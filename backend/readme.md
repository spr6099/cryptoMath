(\*)npm init
(\*)npm i express
(\*)npm i cors

(\*)npm i nodemon

npm start

(\*)npm install body-parser
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }))
<!-- https://dev.to/chibuezesamobisike/what-does-appusebodyparserurlencoded-extended-false-mean-12k6 -->
app.use(bodyParser.json())

(*)npm i mongodb