import { ButtonProps } from "@mui/material"
import { StoryFn, Meta } from "@storybook/react"

import { Button } from "./button"

const meta: Meta = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: { color: { select: "color" } }
}

export default meta

const Template: StoryFn<typeof Button> = ({
  children,
  ...args
}: ButtonProps) => <Button {...args}>{children}</Button>

export const Default = Template.bind({})
export const Primary = Template.bind({})
export const Secondary = Template.bind({})
export const Success = Template.bind({})

Default.args = { color: undefined, children: "Default" }
Primary.args = { variant: "contained", color: "primary", children: "Primary" }
Secondary.args = {
  color: "secondary",
  variant: "contained",
  children: "Secondary"
}
Success.args = { color: "success", variant: "contained", children: "Success" }
