import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Card from './component/card';
import RootConfig from './component/RootConfig';
import About from './component/About';
import Nav from './component/Nav';
import { Route, RouterProvider, Routes, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Home from './component/Home';
import Like from './component/Like';
import CondRend from './component/CondRend';
import IncCount from './component/Counter';
import EvalExpress from './component/EvalExpress';
import DemoToDo from './component/DemoToDo';



const routes=createBrowserRouter(
  createRoutesFromElements(
    <Route  path='/' element={<App/>}>
      <Route index={true} path='/' element={<Home/>}/>
      <Route path='/About' element={<About/>}/>
      <Route path='/Like' element={<Like/>}/>
      <Route path='/card' element={<Card/>}/>
      <Route path='/condrend' element={<CondRend/>}/>
      <Route path='/Counter' element={<IncCount/>}/>
      <Route path='/eval' element={<EvalExpress/>}/>
      <Route path='/demotodo' element={<DemoToDo/>}/>

    </Route>
  )
)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
   
    <RouterProvider router={routes}/>
  


   
  
  
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
