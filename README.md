# 老爸の私房錢 - Expense Tracker
一個使用 Node.js 的框架 Express 打造的記帳網站專案。

## 功能描述 - Features
* 首頁即為所有支出的列表，在列表中顯示每一筆支出的名稱、消費日期、分類、消費金額，最上方標示所有支出的總金額。
* 除了瀏覽支出資料之外，使用者可以透過新增支出功能來增加新的一筆支出資料。
* 每一筆支出資料皆可以透過修改按鈕進行資料修改並儲存。
* 不喜歡的支出可以透過刪除按鈕將該筆支出資料從資料庫中移除。
* 可以使用分類篩選支出項目，如果找不到符合的資料會顯示提示資訊，切換到別的分類會重新計算總金額。

## 專案畫面
![RestaurantList-Demo](https://raw.githubusercontent.com/RyanHsun/expense-tracker/master/app-demo.png "Restaurant List - Demo") 

## 環境建置與需求 - Prerequisites
* 開發環境：Node.js v10.15.0
* 開發框架：Express v4.17.1
* 開發套件：handlebars v5.3.2
* 開發套件：handlebars-helpers v0.10.0
* 開發套件：body-parser v1.19.0
* 開發套件：method-override v3.0.0
* 資料庫：  mongoDB v4.2.13
* 資料庫套件：mongoose v5.12.10

## 安裝與執行步驟 - Installation and execution
1. 打開終端機(Terminal)，使用 git clone 將專案下載至本機電腦，或是直接在 github 下載專案壓縮檔(Download ZIP)。
```
git clone https://github.com/RyanHsun/expense-tracker.git
```

2. 在終端機輸入以下指令，進入專案資料夾
```
cd expense-tracker
```

3. 先安裝 MongoDB 資料庫，請看下方安裝流程說明。

4. 再安裝執行專案需要的相關套件
```
npm install
npm install nodemon mongoose express-handlebars body-parser method-override
```

5. 載入預設的餐廳資料以及餐廳類別資料。
```
npm run seed
```

6. 當終端機顯示以下訊息即表示資料載入完成
```
mongodb connected!
import records, done!
import categories, done!
```

7. 接著就可以啟動伺服器來執行專案，若沒有執行步驟 5 在啟動專案後畫面不會顯示餐廳資料。
```
npm run dev
``` 

8. 當終端機顯示以下訊息即成功啟動，使用瀏覽器於網址列中輸入 http://localhost:3000 即可開始操作專案～
```
Server is listening on http://localhost:3000
```

9. 在伺服器啟動狀態下於鍵盤按下 Ctrl + C ，即可關閉伺服器停止執行專案


## 安裝 MongoDB 流程
1. 安裝 MongoDB，將在在後的資料夾名稱改為 "mongodb"，並與專案資料夾放置在同層，接著建立新資料夾 mongodb-data 存放資料。

2. 啟動 MongoDB 伺服器，在終端機輸入以下指令切換到 mongodb 目錄資料夾。
```
cd ~/mongodb/bin/
```

3. 接著輸入以下指令
```
./mongod --dbpath /Users/[你的使用者名稱]/mongodb-data
```

4. 在終端機中找到以下訊息，表示伺服器啟動成功。
```
waiting for connections on port 27017
```

## 專案開發人員 - Contributor
[RyanHsun](https://github.com/RyanHsun)