import fs from "fs/promises"
import path from "path"
const path1=path.join(process.cwd(),"files","wrongFileName.txt")
const path2=path.join(process.cwd(),"files","properFilename.md")
async function task12(){
    try{
        
        try{
            await fs.access(path1)  
        }catch(e){
            throw new Error("FS failed")
        }
        try{
            await fs.access(path2)
        }catch(err){
            if(err.code !=="ENOENT"){
                throw err
            }
        }
        await fs.rename(path1,path2)
        console.log("Done")
    }catch(e){
        console.error(e.message)
    }
}
task12()