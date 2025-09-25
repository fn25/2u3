import fs from "fs/promises"
import path from "path"
const file = path.join(process.cwd(), "files.txt")
const file_copy = path.join(process.cwd(), "files_copy.txt")
async function tek(){
    try{
        try{
        await fs.access(file)
        }catch(e){
            throw new Error("file mavjud emas")
        }
        try{
        await fs.access(file_copy)
        throw new Error("Copy file mavjud")
        }catch(e){
            if(e.message=="Copy file mavjud"){
                throw e
            }
    }
    await fs.cp(file,file_copy,{recursive:true})
        console.log("Nusxalandi")
    }catch(e){
        console.error("Xatolik",e.message)
    }
}
tek()