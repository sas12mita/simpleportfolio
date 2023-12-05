const express=require("express");
const app= express();
const hbs= require("hbs")
const path= require("path");
require("../db/conn");
const User=require("../models/usermodel");
app.use(express.urlencoded());
const templatepath=path.join(__dirname,"../templates/views")
const partialpath=path.join(__dirname,"../templates/partials")
app.use("/css",express.static(path.join(__dirname,"../node_modules/bootstrap/dist/css")));
app.use("/js",express.static(path.join(__dirname,"../node_modules/bootstrap/dist/js")));
app.use("/jq",express.static(path.join(__dirname,"../node_modules/jquery/dist")));
app.set("view engine","hbs");
app.set("views",templatepath)
hbs.registerPartials(partialpath);
app.use(express.static("public")); 
app.get("/",(req,res )=>
{
res.render("index");
})
app.post("/contact",async(req,res)=>
    {
try {
    const Userdata= new User(req.body);
    Userdata.save();
    res.render("index");
} catch (error) {
    res.status(500).send(error);
}
    }) 
app.listen("8000",()=>
{
    console.log("Server is listening");
});