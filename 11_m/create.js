import fs from "fs/promises"
import path from "path"
const iz=path.join(process.cwd(),"files","fresh.txt")
async function task11(){
    
        try{
        await fs.access(iz)
        throw new Error ("Already have")
        
        }catch(e){
           try{
            await fs.mkdir(path.dirname(iz,{recursive:true}))
            await fs.writeFile(iz,"I am fresh and young")
            console.log("Done")}
            catch(e){
                console.error("Yozishda xatolik")
            }
        }
    }

task11()