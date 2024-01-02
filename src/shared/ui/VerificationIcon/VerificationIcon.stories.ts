import type { Meta, StoryObj } from '@storybook/vue3';
import type { ComponentProps } from 'vue-component-type-helpers';

import { VerificationIcon } from "@/shared/index";

type VerificationIconArgs = ComponentProps<typeof VerificationIcon>

const meta: Meta<VerificationIconArgs> = {
    component: VerificationIcon,
    render: (args) => ({
        components: { VerificationIcon },
        setup(){
            return { args }
        },
        template: `
        <VerificationIcon v-bind="args"/>`
    }),
}

export default meta;

type Story = StoryObj<VerificationIconArgs>;

export const VerificationDefault: Story = {
    args: {
        verification: false
    }
}
export const VerificationTrue: Story = {
    args: {
        verification: true
    }
}
export const VerificationFalse: Story = {
    args: {
        verification: false
    }
}