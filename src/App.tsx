import React from 'react';
import './App.css';
import { Rating } from './components/rating/Rating';
import { Accordion } from './components/accordion/Accordion';
import { OnOff } from './components/onOff/OnOff';
import { UncontrolledAccordion } from './components/uncontrolledAccordion/UncontrolledAccordion ';
import { UncontrolledRating } from './components/uncontrolledRating/UncontrolledRating';

function App() {
  return (
    <div>
      {/* <AppTitle />
      <Rating value={0} />
      <Rating value={1} />
      <Rating value={2} />
      <Rating value={3} />
      <Rating value={4} />
      <Rating value={5} />
      <Accordion titleValue={'Menu'} collapsed />
      <Accordion titleValue={'Users'} /> */}
      {/* <OnOff />
      <OnOff /> */}
      {/* <UncontrolledAccordion titleValue={'Menu'} />
      <UncontrolledAccordion titleValue={'Users'} /> */}
      <UncontrolledRating />
    </div>
  );
}

export default App;


const AppTitle = () => {
  return <>This is App Component</>
}