const exp = require("express")

const app = exp();

app.listen(7777,()=>{
    console.log("listening to port 7777")
})

app.use("/shet",(req,resp)=>{
    resp.send("shet namaskar !")
})

