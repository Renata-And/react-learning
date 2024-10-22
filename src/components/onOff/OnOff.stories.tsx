import { useState } from "react"
import { OnOff } from "./OnOff"
import { action } from '@storybook/addon-actions';

export default {
  title: 'OnOff',
  component: OnOff,
}

const callback = action('cliked');

export const OnMode = () => <OnOff on={true} setOn={callback} />
export const OffMode = () => <OnOff on={false} setOn={callback} />
export const ModeChanging = () => {
  const [switchOn, setSwitchOn] = useState<boolean>(true);
  return <OnOff on={switchOn} setOn={setSwitchOn} />
}
