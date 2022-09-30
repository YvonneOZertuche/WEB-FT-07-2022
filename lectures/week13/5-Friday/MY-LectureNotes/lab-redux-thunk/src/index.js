import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware, compose} from 'redux'
import reduxThunk from 'redux-thunk'
import {Provider} from 'react-redux'
import './index.css';
import App from './App';
import CountHooks from './components/CountHooks'
import ViewCountHooks from './components/ViewCountHooks'
import reducer from './reducers/reducer'
import BaseLayout from './components/layout/BaseLayout';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import {loadData} from  './actions/incrementCount'

const store = createStore(reducer, compose(applyMiddleware(reduxThunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
))

store.dispatch(loadData())

ReactDOM.render(
  <Provider store={store}>
  <React.StrictMode>
  <Router>
      <BaseLayout>
        <Routes>
          <Route path="/" element={<App />}/>
          <Route path='/count_hooks' element={<CountHooks />}/>
          <Route path='/view_count_hooks' element={<ViewCountHooks />}/>
          
        </Routes>
      </BaseLayout>
    </Router>
  </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

