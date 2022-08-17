import './App.css';
import React, {useState} from 'react';

//importing components
import BoxGenForm from './components/BoxGenForm';
import Box from './components/Box';

const containerapp ={
  display:'flex',
  alignItems: 'center',
  flexdirection: 'wrap',
  margin:'400px',  
};

// const initialState = {
//   color:{
//     value:'',
//   },
//   submitted:false
// };


function App() {
  const [state,setState] = useState([]);
  document.body.style.backgroundColor = "rgba(237, 237, 49, 0.29)";
  return (
    <div>
      <BoxGenForm state={state} setState={setState} />
      <Box state={state} setState={setState} />
    </div>
  );
}
export default App;
