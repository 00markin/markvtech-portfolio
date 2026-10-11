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
  expect(screen.getByRole('region', { name: 'Projetos em destaque' })).toHaveAttribute('id', 'projeto');
  expect(screen.getByRole('region', { name: 'Contato' })).toHaveAttribute('id', 'contato');
  const contacts = within(screen.getByRole('region', { name: 'Contato' })).getAllByRole('link').filter(link => link.getAttribute('href')?.startsWith('https:'));
  expect(contacts).toHaveLength(1);
  expect(contacts[0]).toHaveAttribute('href', 'https://markv.company');
  expect(screen.getByRole('link', { name: 'Informações de contato' })).toHaveAttribute('href', '#contato');
  expect(screen.getByText('O contato das marcas e projetos fica centralizado na MarkV Company.')).toBeVisible();
  expect(screen.getByText('markv.tech')).toBeVisible();
  expect(screen.getAllByRole('heading', { level: 1 })).toHaveLength(1);
});

test('project details open and close with their accessible state', () => {
  render(<App />);
  const button = screen.getByRole('button', { name: 'Conhecer a atuação' });
  expect(button).toHaveAttribute('aria-expanded', 'false');
  expect(screen.queryByRole('heading', { name: 'Da ideia à solução' })).not.toBeInTheDocument();
  fireEvent.click(button);
  expect(button).toHaveAttribute('aria-expanded', 'true');
  expect(screen.getByRole('heading', { name: 'Da ideia à solução' })).toBeVisible();
  fireEvent.click(button);
  expect(button).toHaveAttribute('aria-expanded', 'false');
  expect(screen.queryByRole('heading', { name: 'Da ideia à solução' })).not.toBeInTheDocument();
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
