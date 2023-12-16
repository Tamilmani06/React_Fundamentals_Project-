import { useState } from 'react';
import data from './data'
import Question from './Question';




const App = () => {
  const[question,setQuestion]= useState(data)
  return (
    <main>
      <Question question={question}/>
    </main>
  )
};
export default App;
