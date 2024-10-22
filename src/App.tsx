import React, { useState } from 'react';
import './App.css';
import { OnOff } from './components/onOff/OnOff';
import { Rating, RatingValueType } from './components/rating/Rating';
import { UpdateSelect } from './components/select/UpdateSelect';

function App() {
  const [ratingValue, setRatingValue] = useState<RatingValueType>(0)
  const [switchOn, setSwitchOn] = useState(false);

  const items = [{ title: 'Ufa', value: '1' }, { title: 'Moscow', value: '2' }, { title: 'Saint-Petersburg', value: '3' }]

  return (
    <div className={'App'}>
      {/* <OnOff on={switchOn} setOn={setSwitchOn} />
      <OnOff on={switchOn} setOn={setSwitchOn} />
      <OnOff on={switchOn} setOn={setSwitchOn} />
      <Rating value={ratingValue} onClick={setRatingValue} /> */}
      <UpdateSelect items={items} value={'2'} onChange={() => { }} />
    </div>
  );
}

export default App;
