// App.js
import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import About from './components/About';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const setAlertMessage = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === 'dark') {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      setAlertMessage("Light mode has been applied", "success");
    } else {
      setMode('dark');
      document.body.style.backgroundColor = 'black';
      setAlertMessage("Dark mode has been applied", "success");
    }
  };

  return (
    <>
    <Router>
        <Navbar title="TextUtils" about="AboutUs" mode={mode} togglemode={toggleMode} />
        <Alert alert={alert} />
        <div className="container mb-3">
          <Routes>
            <Route path="/" element={<Textform heading="Enter the text" mode={mode} setalert={setAlertMessage} />} />
            <Route exact path="/about" element={<About mode={mode}/>}/>
          </Routes>
        </div>
    </Router>
    </>
  );
}

export default App;
