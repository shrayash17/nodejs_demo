const exp = require("express")

const app = exp();

app.use("/sant",[
    (req,res,next)=>{
        console.log("first")
        next();
    },
    (req,resp,next)=>{
        console.log("second")
        next();

    },
    (req,res,next)=>{
        console.log("third")
        next()
    },
    (req,res)=>{
        console.log("final")
        res.send("last la alay ")
    }
])

app.listen(7777,()=>{
    console.log("listen chalu ahe @ 7777")
})