import type { Meta, StoryObj } from '@storybook/vue3';
import type { ComponentProps } from 'vue-component-type-helpers';

import { ToggleComponent } from '@/shared/index';

type ToggleComponentArgs = ComponentProps<typeof ToggleComponent>

const meta: Meta<ToggleComponentArgs> = {
    component: ToggleComponent,
    render: (args) => ({
        components: { ToggleComponent },
        setup(){
            return { args }
        },
        template: `<ToggleComponent v-bind="args"/>`
    })
}

export default meta;

type Story = StoryObj<ToggleComponentArgs>;

export const defaultToggleComponent: Story = {
    args: {}
}