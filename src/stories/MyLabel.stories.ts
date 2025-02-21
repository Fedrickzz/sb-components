import { Meta, StoryObj } from '@storybook/react';
import { MyLabel } from '../components/MyLabel';

const meta = {
  title: 'UI/labels/MyLabel',
  component: MyLabel,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    size: { control: 'inline-radio' },
    fontColor: { control: 'color' },
  },
} satisfies Meta<typeof MyLabel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AllCaps: Story = {
  args: {
    label: 'All Caps',
    size: 'normal',
    allCaps: true,
  },
};

export const Secondary: Story = {
  args: {
    label: 'Secondary label',
    color: 'text-secondary',
  },
};

export const Tertiary: Story = {
    args: {
      label: 'Tertiary label',
      color: 'text-tertiary',
    },
  };

export const CustomBackgroundColor: Story = {
  args: {
    size: 'h1',
    label: 'Background Color',
    fontColor: 'white',
    backgroundColor: 'black'
  },
};
