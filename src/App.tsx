import React, { useState } from 'react';
import './App.css';
import { OnOff } from './components/onOff/OnOff';
import { Rating, RatingValueType } from './components/rating/Rating';
import { Select } from './components/select/Select';
import { UncontrolledAccordion } from './components/uncontrolledAccordion/UncontrolledAccordion ';

function App() {
  const [ratingValue, setRatingValue] = useState<RatingValueType>(0)
  const [switchOn, setSwitchOn] = useState(false);
  const [value, setValue] = useState('2');

  const items = [{ title: 'Ufa', value: '1' }, { title: 'Moscow', value: '2' }, { title: 'Saint-Petersburg', value: '3' }]

  return (
    <div className={'App'}>
      {/* <OnOff on={switchOn} setOn={setSwitchOn} />
      <OnOff on={switchOn} setOn={setSwitchOn} />
      <OnOff on={switchOn} setOn={setSwitchOn} />
      <Rating value={ratingValue} onClick={setRatingValue} /> */}
      {/* <Select items={items} value={value} onChange={setValue} /> */}
      <UncontrolledAccordion titleValue='menu' />
    </div>
  );
}

export default App;
