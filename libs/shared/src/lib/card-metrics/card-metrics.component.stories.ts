import type { Meta, StoryObj } from '@storybook/angular';
import { CardMetricsComponent } from './card-metrics.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<CardMetricsComponent> = {
  component: CardMetricsComponent,
  title: 'CardMetricsComponent',
};
export default meta;
type Story = StoryObj<CardMetricsComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/card-metrics works!/gi)).toBeTruthy();
  },
};
