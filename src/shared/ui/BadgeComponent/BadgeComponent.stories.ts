import type { Meta, StoryObj } from '@storybook/vue3';
import type { ComponentProps } from "vue-component-type-helpers";

import { BadgeComponent } from '@/shared/index';

type BadgeComponentArgs = ComponentProps<typeof BadgeComponent>

const meta: Meta<BadgeComponentArgs> = {
    component: BadgeComponent,
    render: (args) => ({
        components: { BadgeComponent },
        setup(){
            return { args }
        },
        template: `<BadgeComponent 
                    :color="args.color"
                    :text="args.text"
                  />`
    })
}

export default meta;

type Story = StoryObj<BadgeComponentArgs>;

export const BadgeComponentDefault: Story = {
    args: {
        color: 'follow',
        text: 'text',
    }
}