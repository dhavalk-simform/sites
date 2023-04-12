import { StoryFn, Meta } from "@storybook/react"
import { Checkbox } from "./checkbox"

import { CheckboxProps } from "@mui/material"

const meta: Meta = { title: "Components/Checkbox", component: Checkbox }
export default meta

const Template: StoryFn<typeof Checkbox> = ({ ...args }: CheckboxProps) => (
  <Checkbox {...args} />
)

export const Default = Template.bind({})
export const Primary = Template.bind({})
export const Success = Template.bind({})
export const Warning = Template.bind({})

Primary.args = {
  color: "primary"
}
Success.args = {
  color: "success"
}
Warning.args = {
  color: "warning"
}
