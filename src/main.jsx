import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'



const container1 = document.getElementById("root");

const Root = createRoot(container1)


Root.render(<App/>)