import type { Meta, StoryObj } from '@storybook/react'
import { Download } from 'lucide-react'
import { Button } from './Button'

const meta = {
  title: 'Atoms/Button',
  component: Button,
  tags: ['autodocs'],
  args: {
    children: 'Descargar CV',
    variant: 'primary',
    size: 'md',
  },
} satisfies Meta<typeof Button>

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {}

export const OutlineWithIcon: Story = {
  args: {
    variant: 'outline',
    leftIcon: <Download size={18} />,
  },
}
