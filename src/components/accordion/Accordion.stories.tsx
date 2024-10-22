import { useState } from "react"
import { Accordion } from "./Accordion";
import { action } from '@storybook/addon-actions';

export default {
  title: 'Accordion',
  component: Accordion,
}

const callback = action('cliked');
const OnClickCallback = action('some item was clicked');

export const OpenAccordion = () => <Accordion collapsed={false} titleValue="Menu" setCollapsed={callback} items={[{ title: 'milk', value: '1' }, { title: 'bread', value: '2' }]} onClick={OnClickCallback} />
export const CloseAccordion = () => <Accordion collapsed={true} titleValue="Menu" setCollapsed={callback} items={[]} onClick={OnClickCallback} />

export const AccordionChanging = () => {
  const [collapsed, setCollapsed] = useState<boolean>(true);
  return <Accordion titleValue="Technologies" collapsed={collapsed} setCollapsed={setCollapsed} items={[{ title: 'js', value: '1' }, { title: 'react', value: '2' }, { title: 'html', value: '3' }, { title: 'css', value: '4' }]} onClick={OnClickCallback} />
}
