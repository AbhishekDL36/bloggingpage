import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store';
import Index2 from './index2';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
   <Provider store={store}>
  <Index2/>
  </Provider>
  
  </BrowserRouter>
 
);


