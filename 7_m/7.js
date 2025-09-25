import fs from "fs"
const yul=process.argv[2]
if(!yul){
    console.error("node 7.js filename bulsin")
    process.exit(1)
}
fs.readFile(yul,"utf-8",(err,data)=>{
    if(err){
        if(err.code=="ENOENT"){
            console.error(`${yul} nomli file topilmadi`)
        }else{
            console.error("Xatolik",err.message)
        }
        
    }else{
        console.log("Tarkib:",data)}
})







