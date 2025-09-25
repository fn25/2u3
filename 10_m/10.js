import fs from "fs"
import path from "path"
const currentpath=process.cwd()
console.log("Joriy:",currentpath)
fs.readdir(currentpath,(er,data)=>{
    if(er){
        console.error(er)
        return
    }
    
    for(let i of data){
        console.log(i)
    }
    
})