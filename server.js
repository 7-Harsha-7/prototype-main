const express = require("express")
const app = express()
// const articleRouter = require("./routes/")

app.set("view engine", "ejs")

// app.use("/articles", articleRouter)
 

app.get("/",(req,res) => {
    // const articles = [{
    //     title: "Test Article", 
    //     createdAt: new Date(),
    //     description: "Test Description"
    // }]
    res.render("index")
})
app.get("/team",(req,res) => {
    
    res.render("team")
})
app.get("/events",(req,res) => {
    
    res.render("events")
})

app.get("/innovationpoint",(req,res) => {
    
    res.render("innovationpoint")
})



app.listen(3000) 