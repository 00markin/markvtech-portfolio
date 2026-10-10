/* Canvas allocation and pixel dimensions require direct DOM inspection because the decorative canvas is aria-hidden. */
/* eslint-disable testing-library/no-container, testing-library/no-node-access */
import React from 'react';
import { act, render } from '@testing-library/react';
import MatrixBackground from './MatrixBackground';
let motion: { matches: boolean; addEventListener: jest.Mock; removeEventListener: jest.Mock };
let pending: Map<number, FrameRequestCallback>;
let nextId: number;
let context: { fillRect: jest.Mock; fillText: jest.Mock; fillStyle: string; font: string };
beforeEach(() => {
  pending = new Map(); nextId = 0;
  motion = { matches: false, addEventListener: jest.fn(), removeEventListener: jest.fn() };
  Object.defineProperty(window, 'matchMedia', { configurable: true, value: jest.fn(() => motion) });
  Object.defineProperty(document, 'hidden', { configurable: true, value: false });
  context = { fillRect: jest.fn(), fillText: jest.fn(), fillStyle: '', font: '' };
  jest.spyOn(HTMLCanvasElement.prototype, 'getContext').mockImplementation(() => context as any);
  jest.spyOn(window, 'requestAnimationFrame').mockImplementation(callback => { pending.set(++nextId, callback); return nextId; });
  jest.spyOn(window, 'cancelAnimationFrame').mockImplementation(id => { pending.delete(id); });
});
afterEach(() => jest.restoreAllMocks());
function tick(time: number) {
  const entry = Array.from(pending.entries())[0];
  expect(entry).toBeDefined();
  pending.delete(entry[0]);
  act(() => entry[1](time));
}
test('many animation frames keep one canvas and one scheduled frame; cleanup removes work', () => {
  const { container, unmount } = render(<React.StrictMode><MatrixBackground /></React.StrictMode>);
  for (let i = 1; i <= 50; i++) tick(i * 50);
  expect(container.querySelectorAll('canvas')).toHaveLength(1);
  expect(pending.size).toBe(1);
  expect(context.fillText).toHaveBeenCalled();
  unmount();
  expect(pending.size).toBe(0);
  expect(motion.removeEventListener).toHaveBeenCalledWith('change', expect.any(Function));
});
test('manual pause and reduced motion stop animation', () => {
  const { rerender, unmount } = render(<MatrixBackground />);
  expect(pending.size).toBe(1);
  rerender(<MatrixBackground paused />);
  expect(pending.size).toBe(0);
  rerender(<MatrixBackground paused={false} />);
  expect(pending.size).toBe(1);
  unmount();
  motion.matches = true;
  render(<MatrixBackground />);
  expect(pending.size).toBe(0);
});
test('visibility and resize restart a single animation and rebuild viewport dimensions', () => {
  const { container } = render(<MatrixBackground />);
  Object.defineProperty(document, 'hidden', { configurable: true, value: true });
  act(() => document.dispatchEvent(new Event('visibilitychange')));
  expect(pending.size).toBe(0);
  Object.defineProperty(document, 'hidden', { configurable: true, value: false });
  act(() => document.dispatchEvent(new Event('visibilitychange')));
  Object.defineProperty(window, 'innerWidth', { configurable: true, value: 390 });
  Object.defineProperty(window, 'innerHeight', { configurable: true, value: 844 });
  act(() => window.dispatchEvent(new Event('resize')));
  expect(container.querySelector('canvas')).toHaveAttribute('width', '390');
  expect(container.querySelector('canvas')).toHaveAttribute('height', '844');
  expect(pending.size).toBe(1);
});
