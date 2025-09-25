import fs from "fs/promises"
import path from "path"
const path1=path.join(process.cwd(),"file","fileToRemove.txt")

async function task14(){
    try{
        
        try{
            await fs.access(path1)  
        }catch(e){
            throw new Error("FS failed")
        }
        
        
        await fs.unlink(path1)
        console.log("Done")
    }catch(e){
        console.error(e.message)
    }
}
task14()