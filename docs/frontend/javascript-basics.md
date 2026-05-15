# JavaScript 基礎

JavaScript 是瀏覽器中最常用的程式語言，也可以透過 Node.js 在伺服器端執行。

## 變數

常見的宣告方式有 `const` 和 `let`。

```js
const siteName = '我的技術筆記'
let visitorCount = 1

visitorCount += 1
```

## 函式

函式可以把重複的邏輯整理成可重複使用的區塊。

```js
function greet(name) {
  return `Hello, ${name}`
}

console.log(greet('VitePress'))
```

## 陣列

陣列適合保存一組資料。

```js
const topics = ['HTML', 'CSS', 'JavaScript']

topics.forEach((topic) => {
  console.log(topic)
})
```

## 下一步

- 熟悉 `const`、`let`、函式與陣列
- 練習操作 DOM
- 學習非同步語法，例如 `Promise` 和 `async` / `await`
