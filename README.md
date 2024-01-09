# New Project

> ✨ Bootstrapped with Create Snowpack App (CSA).

## Available Scripts

### npm start

Runs the app in the development mode.
Open http://localhost:8080 to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.

### npm run build

Builds a static copy of your site to the `build/` folder.
Your app is ready to be deployed!

**For the best production performance:** Add a build bundler plugin like "@snowpack/plugin-webpack" to
your `snowpack.config.mjs` config file.

### npm test

Launches the application test runner.
Run with the `--watch` flag (`npm test -- --watch`) to run in interactive watch mode.

## 使用

1. 克隆到本地：`git clone https://github.com/donething/chromium-react-mui-ts-snowpack-example my-ext`
2. 进入工程目录，执行`yarn`，下载依赖

## 目录说明

* `内容脚本`在`src/contents`下
* `后台脚本`在`src/background`下
* `网页页面`在`src/pages`下。可创建更多页面，然后在`index.tsx`中添加路由
    * `选项页面`为`src/pages/Options.tsx`
    * `弹窗页面`为`src/pages/Popup.tsx`

## 代码编写说明

暂无

## 为适配扩展而改动的配置

执行`npx create-snowpack-app chromium-react-mui-ts-snowpack-example --template @snowpack/app-template-react-typescript --use-yarn`
后，改动的配置如下

* `snowpack.config.mjs`
  ```js
  buildOptions: {
    /* ... */
    // "metaUrlPath"的默认值为"_snowpack"，因为 chromium 扩展目录下以"_"开头的文件夹有内定用途，所以改名
    metaUrlPath: "sp_env"
  }
  ```
* `package.json`

  新引入了`mui`、`react-router-dom`、`@types/chrome`、`@types/react-router-dom`：

  `yarn add @mui/material @emotion/react @emotion/styled`

  `yarn add -D @types/chrome @types/react-router-dom`

  ```json
  {
    "dependencies": {
      "@emotion/react": "^11.9.0",
      "@emotion/styled": "^11.8.1",
      "@mui/material": "^5.6.2",
      "react-router-dom": "^6.3.0"
    },
    "devDependencies": {
      "@types/chrome": "^0.0.181",
      "@types/react-router-dom": "^5.3.3",
    }
  }
  ```
  
* `manifest.json`
```json
{
  "manifest_version": 3,
  "minimum_chrome_version": "92",
  "background": {
    "service_worker": "/dist/background/service_worker.js",
    "type": "module"
  },
  "options_page": "/index.html#/options"
}
```