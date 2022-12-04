const express = require('express');

const app = express();

app.get('/',(req,res)=>{
    // return res.send();
    return res.json({message: 'get server req'})
})

app.listen(3333,()=> {
    console.log('listen on port: 3333')
});
