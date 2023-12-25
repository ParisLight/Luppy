import type { Meta, StoryObj } from '@storybook/vue3';
import type { ComponentProps } from 'vue-component-type-helpers';

import { TagButton } from '@/shared/index';

const meta: Meta = {
    component: TagButton,
    render: (args) => ({
        components: { TagButton },
        setup() {
            return { args, slotContent: 'Контент' };
        },
        template: `
        <TagButton v-bind="args">
            <template v-slot>
                <span>{{ slotContent }}</span>
            </template>
        </TagButton>`,
    }),
};

export default meta;

type Story = StoryObj;

export const defaultTagButton: Story = {};

export const activeTagButton: Story = {};