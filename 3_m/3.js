import { log } from "node:console"
import fs from "node:fs"
let iz="./my_nodejs_files/hello_world.txt"
fs.readFile(iz,"utf8",(e,data)=>{
    if(e){
        console.log(e)
        return
    }
    console.log(data);
})
let sana=new Date()
let yil=sana.getFullYear()
let oy=sana.getMonth()
let kun=sana.getDate()
let hour=sana.getHours()
let min=sana.getMinutes()
let sec=sana.getSeconds()
let vaqt=`${kun}-${oy}-${yil}  TIME:${hour}:${min} sec:${sec}`
fs.writeFile(iz,vaqt,(err)=>{
    if(err){
        console.error(e)
        return
    }
    console.log("Yozildi")
})