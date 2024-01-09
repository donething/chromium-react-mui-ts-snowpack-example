import {createRoot} from "react-dom/client"
import {HashRouter, Route, Routes} from "react-router-dom"
import React from "react"
import Options from "./pages/Options"
import Popup from "./pages/Popup"

const container = document.getElementById('root')
const root = createRoot(container!)

root.render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<span>首页</span>}/>
        <Route path="/options" element={<Options/>}/>
        <Route path="/popup" element={<Popup/>}/>
      </Routes>
    </HashRouter>
  </React.StrictMode>
)

// Hot Module Replacement (HMR) - Remove this snippet to remove HMR.
// Learn more: https://snowpack.dev/concepts/hot-module-replacement
if (import.meta.hot) {
  import.meta.hot.accept()
}
