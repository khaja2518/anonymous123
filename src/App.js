import './App.css';
import React, { useState } from 'react'

import SampleComponent from './components/SampleComponent/sample'
import PropsComponent from './components/PropsComponent/propsComponent';
import PersonLIstConponent from './components/PersonList/PersonListComponent';
import FormComponent from './components/FormControlComponent/FormComponent';

function App() {

  let [obj, setObjState] = useState([{
    Name: "khaja",
    age: 21
  },
  {
    Name: "siri",
    age: 20
  }])



  const changeData = (props) => {

  }

  return (
    <div className="App">
      <SampleComponent />
      <PropsComponent Obj={obj} handleData={changeData} />
      <PersonLIstConponent/>
      <FormComponent/>
    </div>
  );
}

export default App;
