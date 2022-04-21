import React, {useEffect} from 'react'
import Button from "@mui/material/Button"

// 弹窗页面
const Popup = (): JSX.Element => {
  useEffect(() => {
    document.title = "弹窗页面"
  }, [])

  return (
    <Button onClick={() => alert("点击了按钮")}>React 按钮</Button>
  )
}

export default Popup