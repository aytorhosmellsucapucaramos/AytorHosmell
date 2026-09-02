import { render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the editorial intro, visible contact and primary actions', () => {
    render(<Hero language="es" onNavigate={vi.fn()} />)

    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      'Aytor Hosmell Sucapuca Ramos',
    )
    expect(screen.getByText('Hola, soy Aytor.')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /escríbeme/i })).toHaveAttribute(
      'href',
      'mailto:ramosaytor@gmail.com',
    )
    expect(screen.getByText('ramosaytor@gmail.com')).toBeInTheDocument()
    expect(screen.getByText('+51 984 450 240')).toBeInTheDocument()
    expect(screen.queryByLabelText('Resumen del portafolio')).not.toBeInTheDocument()
    expect(screen.getAllByRole('article')).toHaveLength(3)
  })
})
