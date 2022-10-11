const express = require("express");
const app= express();
app.use(express.urlencoded({extended:true}));
app.use(express.static("public"));
app.engine('ejs', require('ejs').renderFile);
app.set('view engine', 'html');
app.get('/',(req,res)=> {
    var name = req.body.name;
    res.render("index.ejs", { name: name });
});
app.post('/', (req,res)=>{
    var var1= req.body.var1;
    var var2= req.body.var2;
    res.send({title: var1+ " - "+var2});
});
app.listen(3000,()=>{
    console.log("example app listening at port 3000");
})