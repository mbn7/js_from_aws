const express = require('express');

const app = express();

app.get('/',(req,res)=>{
    // return res.send();
    return res.json({message: 'Server OK'})
})

app.listen(3333)