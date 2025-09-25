import fs from "fs/promises"
import path from "path"
const path1=path.join(process.cwd(),"fileRead.txt")
async function name() {
    try{
            const data=await fs.readFile(path1,"utf-8")
            if(data.length==0){
                console.log("FS operation failed")}
            else{
                console.log(data)
            }
    }catch(e){
        console.error(e.message)
        }
}
name()