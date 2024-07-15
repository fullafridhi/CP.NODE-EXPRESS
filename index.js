const express = require("express")
const app = express()



const authMiddleware= (req, res, next) => {
  if(day.getDay > 0 && date.getDay < 6 && date.getHours() > 9 && date.getHours < 17){
 
      next();
  }else{
      res.send('<h1>this page is only available during working hours (Monday to Friday,  from 9 to 17).</h1>');
  }

};
app.use(authMiddleware)

 

app.get('/css/style.css', (req, res)=>{
  res.sendFile(__dirname+ "/static/css/style.css")
})
app.get('/home', (req ,res)=>{
res.sendFile(__dirname+ "/static/home.html")
})
app.get('/contact',(req ,res)=>{
res.sendFile(__dirname+"/static/contact.html")
})
app.get('/service',(req ,res)=>{
res.sendFile(__dirname+ "/static/service.html")
})


const PORT = 5000;

app.listen (PORT , (err)=> err ? console.log(err) : console.log("my server is runnig on port ;", PORT))