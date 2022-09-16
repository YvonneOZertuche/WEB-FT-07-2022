import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Forms from './components/Forms'
import AboutUs from './components/AboutUs'
import BaseLayout from './components/layout/BaseLayout';
import { BrowserRouter as Router, Route, Routes as Switch} from 'react-router-dom'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
   
  <Router>

    <BaseLayout>
      <Switch>
          <Route path="/"  element={<App />}/>
          <Route path="/forms"  element={<Forms />}/>
          <Route path="/about"  element={<AboutUs />}/>
          <Route path="/about/:aboutID"  element={<AboutUs />}/>
      </Switch>
    </BaseLayout>
  </Router>
  
);

