import React, {useEffect} from 'react'

// 选项页面
const Options = (): React.ReactElement => {
  useEffect(() => {
    document.title = "选项页面"
  }, [])

  return (
    <div>选项页面</div>
  )
}

export default Options