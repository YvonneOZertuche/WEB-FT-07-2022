import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import 'bootstrap/dist/css/bootstrap.min.css'
import App from './App';
import { BrowserRouter as Router, Route, Routes as Switch} from 'react-router-dom'
import  ShoppingList from './components/ShoppingList'
import AddressBook from './components/AddressBook'
import ColorPicker from './components/ColorPicker'
import BaseLayout from './components/layouts/BaseLayout'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <Router>
    <BaseLayout>
      <Switch>
        <Route path = '/' element={<App />} />
        <Route path = '/shopping' element={<ShoppingList />} />
        <Route path = '/addressbook' element={<AddressBook />} />
        <Route path = '/colorpicker' element={<ColorPicker />} />
      </Switch>
    </BaseLayout>
  </Router>
  
   
 
);


