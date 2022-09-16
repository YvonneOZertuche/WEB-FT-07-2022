import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Route, Routes as Switch} from 'react-router-dom'
import Forms from './components/Forms'
import AboutUs from './components/AboutUs' 
import BaseLayout from './components/layout/BaseLayout';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 
 <Router>

    <BaseLayout>
        <Switch>
            <Route path="/" element={<App />}/>
            <Route path="/forms" element={<Forms />}/>
            <Route path="/about" element={<AboutUs />}/>
        </Switch>
    </BaseLayout>
 </Router>
    
 
);


