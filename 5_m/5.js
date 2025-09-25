import path from "path"
import fs from "node:fs/promises"
async function  yul(){
    try{
        const iz=process.cwd()
        const izAb=path.resolve(iz)
      
        const reldoc=`.${path.sep}docs${path.sep}readme.md`
        console.log(reldoc)
        const tuldoc=`${iz}${path.sep}docs${path.sep}readme.md`
        console.log(tuldoc)
        let tek=path.resolve(iz,'docs')
        try{
            await fs.access(tuldoc)
            console.log("File mavjud",tuldoc)
        }catch(e){
            if(e.code=="ENOENT"){
                console.log("docs topilmadi,yaratildi")
                await fs.mkdir(tek)
            }
        }
        await fs.writeFile(tuldoc,"Readme file")
        console.log("readme yaratildi")

    }catch(e){
        console.error(e)
    }
}
yul()