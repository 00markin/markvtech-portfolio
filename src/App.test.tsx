import React from 'react';
import { fireEvent, render, screen, within } from '@testing-library/react';
import App from './App';
jest.mock('./components/MatrixBackground', () => ({ __esModule: true, default: ({ paused }: { paused: boolean }) => <canvas aria-hidden="true" data-testid="matrix" data-paused={String(paused)} /> }));

test('navigation resolves to sections and contact does not point back to the canonical homepage', () => {
  render(<App />);
  const nav = screen.getByRole('navigation', { name: 'Navegação principal' });
  expect(within(nav).getByRole('link', { name: 'Sobre' })).toHaveAttribute('href', '#sobre');
  expect(within(nav).getByRole('link', { name: 'Projeto' })).toHaveAttribute('href', '#projeto');
  expect(within(nav).getByRole('link', { name: 'Contato' })).toHaveAttribute('href', '#contato');
  expect(screen.getByRole('region', { name: 'Sobre este espaço' })).toHaveAttribute('id', 'sobre');
  expect(screen.getByRole('region', { name: 'Projeto em destaque' })).toHaveAttribute('id', 'projeto');
  expect(screen.getByRole('region', { name: 'Contato' })).toHaveAttribute('id', 'contato');
  const contacts = screen.getAllByRole('link').filter(link => link.getAttribute('href')?.startsWith('https:'));
  expect(contacts).toHaveLength(0);
  expect(screen.getByRole('link', { name: 'Informações de contato' })).toHaveAttribute('href', '#contato');
  expect(screen.getByText('Este portfólio está em construção. O canal de contato será informado aqui após confirmação.')).toBeVisible();
  expect(screen.getByText('markv.tech')).toBeVisible();
  expect(screen.getAllByRole('heading', { level: 1 })).toHaveLength(1);
});

test('project details open and close with their accessible state', () => {
  render(<App />);
  const button = screen.getByRole('button', { name: 'Conhecer a construção' });
  expect(button).toHaveAttribute('aria-expanded', 'false');
  expect(screen.queryByRole('heading', { name: 'Como foi construído' })).not.toBeInTheDocument();
  fireEvent.click(button);
  expect(button).toHaveAttribute('aria-expanded', 'true');
  expect(screen.getByRole('heading', { name: 'Como foi construído' })).toBeVisible();
  fireEvent.click(button);
  expect(button).toHaveAttribute('aria-expanded', 'false');
  expect(screen.queryByRole('heading', { name: 'Como foi construído' })).not.toBeInTheDocument();
});

test('motion control sends pause and resume to the canvas', () => {
  render(<App />);
  const toggle = screen.getByRole('checkbox', { name: 'Pausar animação' });
  expect(screen.getByTestId('matrix')).toHaveAttribute('data-paused', 'false');
  fireEvent.click(toggle);
  expect(toggle).toBeChecked();
  expect(screen.getByTestId('matrix')).toHaveAttribute('data-paused', 'true');
  fireEvent.click(toggle);
  expect(screen.getByTestId('matrix')).toHaveAttribute('data-paused', 'false');
});
