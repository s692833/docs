# Node.js 基礎

Node.js 讓 JavaScript 可以在瀏覽器以外的環境執行，常用於建立 API、工具腳本與後端服務。

## 執行 JavaScript 檔案

建立 `app.js` 後，可以用 `node` 執行。

```js
console.log('Hello from Node.js')
```

```sh
node app.js
```

## npm

`npm` 是 Node.js 常用的套件管理工具，可以安裝套件與執行專案腳本。

```sh
npm install
npm run docs:dev
```

## 建立簡單伺服器

Node.js 內建 `http` 模組，可以建立基本伺服器。

```js
import http from 'node:http'

const server = http.createServer((request, response) => {
  response.end('Hello Node.js')
})

server.listen(3000)
```

## 下一步

- 理解 Node.js 如何執行 JavaScript
- 熟悉 `npm` 與 `package.json`
- 學習 Express 或其他後端框架
