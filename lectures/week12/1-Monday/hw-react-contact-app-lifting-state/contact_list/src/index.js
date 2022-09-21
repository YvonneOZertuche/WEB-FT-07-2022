import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Route, Routes as Switch } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import BaseLayout from './components/layout/BaseLayout.js'
import Contacts from './components/Contacts'
import AddContact from './components/AddContact'



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Router>
        <BaseLayout>
            <Switch>
                <Route path='/' element={<App />} />
                <Route path='/contacts' element={<Contacts />} />
                <Route path='/addcontact' element={<AddContact />} />
            </Switch>
        </BaseLayout>
    </Router>

   




)