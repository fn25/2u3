import fs from "fs/promises"
import path from "path"
const path1=(process.cwd(),"file")
async function files(){
    try{
        try{
            await fs.access(path1)

        }catch(e){
            throw new Error("FS failed")
        }
        const files=await fs.readdir(path1)
        if(files.length==0){
            console.log("Bush")
        }else{
            files.forEach((x)=>console.log(x))    
        }
    }catch(e){
        console.error(e.message)
    }
}
files()