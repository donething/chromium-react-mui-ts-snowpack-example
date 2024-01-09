import React, {useEffect} from 'react'
import {Button} from "@mui/material"

// 弹窗页面
const Popup = (): React.ReactElement => {
  useEffect(() => {
    document.title = "弹窗页面"
  }, [])

  return (
    <Button onClick={() => alert("点击了按钮")}>按钮</Button>
  )
}

export default Popup