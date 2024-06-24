const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const{ connectToDb, getDb } = require('./db')

//db connection
let db
connectToDb((err)=>{
  if(!err){
    app.listen(port, () => {
      console.log(`Server is running at http://localhost:${port}`);
    });
    db = getDb()
  }
  
})

app.get('/', (req, res) => {
  db.collection('SignUp')
  .find()
  res.send('Hello World!');
});


