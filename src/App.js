// import logo from './logo.svg';
import React, { useState } from 'react'
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   // Link
// } from "react-router-dom";

import './App.css';
import Alert from './components/Alert';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  const [Mode, setMode] =useState('light'); //whether dark mode is enabled or not
  const [alert, setAlert] = useState(null)

  const showAlert=(message,type)=>{
    setAlert({
        msg: message,
        type: type,
      }
      )
      setTimeout(() => {
          setAlert(null);
        }, 1500)
  }


  const toggleMode =()=>{
    if(Mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor ='#212521'
      showAlert('Dark Mode is enabled','success')
    }
  
    else{
      setMode('light')
      document.body.style.backgroundColor ='white'
      showAlert('light Mode is enabled','success')


    }
  }
  return (
  <>
  {/* <Router> */}
  <Navbar title = "TextUlits" mode={Mode} toggleMode={toggleMode}/>
  <Alert alert={alert}/>
  {/* <div className="container my-3" > */}
  {/* <Routes>
          <Route exact path="/about" element={<About/>}>
          </Route> */}
          
          {/* <Route exact path="/" element= */}
          {<TextForm showAlert={showAlert} heading = "Enter text to analysis" mode={Mode}/>}
          {/* </Route> */}
      {/* </Routes> */}
    {/* </Router>   */}
  {/* </div> */}

  </>
  );

}

export default App;
