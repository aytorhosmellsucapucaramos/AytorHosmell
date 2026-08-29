import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { ContactForm } from './ContactForm'

describe('ContactForm', () => {
  it('shows validation errors for empty required fields', async () => {
    render(<ContactForm />)

    fireEvent.click(screen.getByRole('button', { name: /enviar mensaje/i }))

    expect(await screen.findAllByText('Este campo es obligatorio')).toHaveLength(3)
  })

  it('shows an email validation error', async () => {
    render(<ContactForm />)

    fireEvent.change(screen.getByLabelText(/nombre/i), { target: { value: 'Aytor' } })
    fireEvent.change(screen.getByLabelText(/email/i), { target: { value: 'correo-invalido' } })
    fireEvent.change(screen.getByLabelText(/mensaje/i), { target: { value: 'Hola' } })
    fireEvent.click(screen.getByRole('button', { name: /enviar mensaje/i }))

    expect(await screen.findByText('Ingresa un email válido')).toBeInTheDocument()
  })
})
