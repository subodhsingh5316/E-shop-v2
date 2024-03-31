import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Router,
  RouterProvider
} from 'react-router-dom'
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/css/bootstrap.min.css'
import HomeScreen from './screen/HomeScreen';
import ProductScreen from './screen/ProductScreen';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path ="/" element={<App />}>
      <Route index = {true} path='/' element ={<HomeScreen />} />
      <Route index = {true} path='/product/:id' element ={<ProductScreen />} />
    </Route>  
  )
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
