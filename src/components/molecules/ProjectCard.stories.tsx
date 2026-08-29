import type { Meta, StoryObj } from '@storybook/react'
import { projects } from '../../content/content'
import { ProjectCard } from './ProjectCard'

const meta = {
  title: 'Molecules/ProjectCard',
  component: ProjectCard,
  tags: ['autodocs'],
  args: {
    project: projects[0],
    index: 0,
  },
  decorators: [
    Story => (
      <div className="max-w-3xl p-6">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof ProjectCard>

export default meta

type Story = StoryObj<typeof meta>

export const RegistroCanino: Story = {}
