import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Contact } from './Contact'

describe('Contact', () => {
  it('shows only confirmed direct contact links', () => {
    render(<Contact language="es" />)

    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      '¿Tienes un proyecto o quieres conversar?',
    )
    expect(screen.getByRole('link', { name: /ramosaytor@gmail.com/i })).toHaveAttribute(
      'href',
      'mailto:ramosaytor@gmail.com',
    )
    expect(screen.getByRole('link', { name: /\+51 984 450 240/i })).toHaveAttribute(
      'href',
      expect.stringContaining('https://wa.me/51984450240'),
    )
    expect(screen.queryByRole('form')).not.toBeInTheDocument()
  })
})
