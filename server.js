const express= require('express'),
	 path = require('path');

const app =express();


app.use(express.static('./dist/my-ng5-app'));

app.get('/*', (req,res)=>{
    
res.sendFile(path.join(__dirname,'/dist/my-ng5-app/index.html'));

});

app.listen(process.env.PORT || 8080, ()=>{
console.log('Server started');
})