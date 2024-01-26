import type { Meta, StoryObj } from '@storybook/angular';
import { CartComponent } from './cart.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<CartComponent> = {
  component: CartComponent,
  title: 'CartComponent',
};
export default meta;
type Story = StoryObj<CartComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/cart works!/gi)).toBeTruthy();
  },
};
