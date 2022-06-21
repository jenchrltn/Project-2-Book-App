const express = require('express');
const app = express();
const path = require('path')
const PORT = 3000
const bookRoutes = require('./routes/books')

app.set('view engine', 'ejs')
app.set('views',path.join(__dirname,'views'))
app.use('/books/',bookRoutes)

app.listen(PORT,()=>{
 console.log("this server is connected")
})
