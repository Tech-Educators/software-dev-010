import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)


// 1. install react-router-dom
// 2. go to your main.jsx and import { BrowserRouter } from 'react-router-dom'
// 3. Wrap the <App/> component in <BrowserRouter>
// 4. Inside the App.jsx, import the <Routes> and <Route> components.
// 5. Use the <Routes> Component in the jsx of the App.jsx
// 6. Inside the <Routes> create/use individual Route compoents.
// refer to app.jsx
// : denotes that it's a dynamic route - eg books/:id