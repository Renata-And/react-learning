import { useState } from "react"
import { Select } from "./Select"
import { action } from '@storybook/addon-actions';

export default {
  title: 'Select',
  component: Select,
}

const items = [{ title: 'Ufa', value: '1' }, { title: 'Moscow', value: '2' }, { title: 'Saint-Petersburg', value: '3' }]

export const WithValue = () => {
  const [value, setValue] = useState('2');

  return <Select items={items} value={value} onChange={setValue} />
}

export const WithoutValue = () => {
  const [value, setValue] = useState(null);

  return <Select value={value} items={items} onChange={setValue} />
}