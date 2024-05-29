// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
// import './index.css'
// import {BrowserRouter} from 'react-router-dom';

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <BrowserRouter basename="/CookBookReact">
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
//   </BrowserRouter>
  
// )
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {HashRouter as Router} from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router basename="/CookBookReact">
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Router>
  
)