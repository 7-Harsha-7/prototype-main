const express = require("express")
const app = express()
const port = process.env.PORT || 2000

app.set("views", "./views")
app.set("view engine", "ejs")

app.use(express.static('assets'))
app.use("/css", express.static(__dirname + "assets/css"))
app.use("/img", express.static(__dirname + "assets/img"))
app.use("/js", express.static(__dirname + "assets/js"))
app.use("/vendor", express.static(__dirname + "assets/vendor"))
app.use("/jquery-3.2.1.slim.min", express.static(__dirname + "jquery-3.2.1.slim.min")) 


app.get("/",(req,res) => {
    
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
app.get("/blog",(req,res) => {
    
    res.render("blog")
})


app.listen(port) 