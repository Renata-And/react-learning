import { UncontrolledRating } from "./UncontrolledRating"
import { action } from '@storybook/addon-actions';

export default {
  title: 'UncontrolledRating',
  component: UncontrolledRating,
}

export const EmptyRating = () => <UncontrolledRating defaultValue={0} onChange={action('Rating changed')} />
export const Rating1 = () => <UncontrolledRating defaultValue={1} onChange={action('Rating changed')} />
export const Rating2 = () => <UncontrolledRating defaultValue={2} onChange={action('Rating changed')} />
export const Rating3 = () => <UncontrolledRating defaultValue={3} onChange={action('Rating changed')} />
export const Rating4 = () => <UncontrolledRating defaultValue={4} onChange={action('Rating changed')} />
export const Rating5 = () => <UncontrolledRating defaultValue={5} onChange={action('Rating changed')} />
