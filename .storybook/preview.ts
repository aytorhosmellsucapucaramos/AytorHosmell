import type { Preview } from '@storybook/react'
import '../src/index.css'

const preview: Preview = {
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'light',
      values: [
        { name: 'light', value: '#F8F9FC' },
        { name: 'dark', value: '#0A0D14' },
      ],
    },
  },
}

export default preview
