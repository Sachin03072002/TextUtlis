import { useState } from 'react';
import './App.css';
import About from './componenets/About';
import Alert from './componenets/Alert';
import Navbar from './componenets/Navbar';
import TextForm from './componenets/TextForm';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import Switch form 'react-router-dom';

function App() {
  const [Mode, setMode] = useState('light'); //whether dark mode enabled or not
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1000);
  };
  const toggleMode = () => {
    if (Mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
      document.body.style.color = 'white';
      showAlert('Dark Mode has been enabled', 'success');
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      showAlert('Light Mode has been enabled', 'success');
    }
  };

  return (
    <>
      <Router>
        <Navbar title="TextUtlis" mode={Mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container">
          <Switch>
            <Route path="/" exact>
              <TextForm
                showAlert={showAlert}
                heading="Enter the text to analyse"
                mode={Mode}
              />
            </Route>
            <Route path="/about">
              <About />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
