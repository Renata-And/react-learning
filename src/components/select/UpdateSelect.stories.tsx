import { useState } from "react"
import { UpdateSelect } from "./UpdateSelect"
import { action } from '@storybook/addon-actions';

export default {
  title: 'Select',
  component: UpdateSelect,
}

const items = [{ title: 'Ufa', value: 1 }, { title: 'Moscow', value: 2 }, { title: 'Saint-Petersburg', value: 3 }]

export const BaseExample = () => {
  return <UpdateSelect items={items} value={'1'} onChange={action('Value changed')} />
}