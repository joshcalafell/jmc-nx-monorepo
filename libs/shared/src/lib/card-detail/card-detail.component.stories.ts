import type { Meta, StoryObj } from '@storybook/angular';
import { CardDetailComponent } from './card-detail.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<CardDetailComponent> = {
  component: CardDetailComponent,
  title: 'CardDetailComponent',
};
export default meta;
type Story = StoryObj<CardDetailComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/card-detail works!/gi)).toBeTruthy();
  },
};
