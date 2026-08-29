import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the main value proposition and CTAs', () => {
    render(<Hero />)

    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      'Aytor Hosmell Sucapuca Ramos',
    )
    expect(screen.getByRole('link', { name: /descargar cv/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /escríbeme/i })).toBeInTheDocument()
    expect(screen.getByRole('complementary', { name: /resumen del portafolio/i })).toBeInTheDocument()
  })
})
