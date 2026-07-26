import express from "express"
import route from "./routes/routes.js"

const app = express()
const PORT = 5003

//http methods
//GET - retrieving data
//POST - create or insert data
//PUT - completely update data
//PATCH - partially update data
//DELETE - deleting data
//ALL - any http request

/* app.get("/", (req, res)=>{
    res.send("hello world")
})
 */
//string pattern path
/* app.get("/ab?cd", (req, res)=>{
    res.send("this will work if its /acd or /abcd")
}) */

//regex
/* app.get(/x/, (req, res)=>{
    res.send("if it includes x itll run")
}) */

//more than one callback
/* app.get("/d", (req, res, next)=>{
    console.log("first callback")
    next();
},(req, res)=>{
    res.send("second callback")
}
) */

//array of callbacks
/* const cb1 = (req, res, next)=>{
    console.log("first callback")
    next();
}
const cb2 = (req, res, next)=>{
    console.log("second callback")
    next();
}
const cb3 = (req, res)=>{
    console.log("third callback")
    res.send("array of callbacks")
}

app.get("/d", [cb1, cb2, cb3]) */

//idk
/* app.get("/", (req, res)=>{
    res.send("get");
})
app.post("/", (req, res)=>{
    res.send("post");
})
app.put("/", (req, res)=>{
    res.send("put");
})
app.delete("/", (req, res)=>{
    res.send("delete");
})
 */

//refactor
/* app.route("/")
.get("/", (req, res)=>{
    res.send("get");
})
.post("/", (req, res)=>{
    res.send("post");
})
.put("/", (req, res)=>{
    res.send("put");
})
.delete("/", (req, res)=>{
    res.send("delete");
}) */

//router
app.use("/", route)


app.listen(PORT, console.log("server is up"))