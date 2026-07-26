import * as fs from "fs"

fs.mkdir("c:/Users/zaman/Desktop/a", error=>{
    if(error) throw error
    console.log("dir created");
})