import React from 'react'
import ReactDOM from 'react-dom'
import Popup from "./pages/Popup"
import Options from "./pages/Options"
import {HashRouter, Route, Routes} from "react-router-dom"
import './index.css'

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<span>首页</span>}/>
        <Route path="/options" element={<Options/>}/>
        <Route path="/popup" element={<Popup/>}/>
      </Routes>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root'),
)

// Hot Module Replacement (HMR) - Remove this snippet to remove HMR.
// Learn more: https://snowpack.dev/concepts/hot-module-replacement
if (import.meta.hot) {
  import.meta.hot.accept()
}
