import fs from "fs"
try{
    fs.writeFileSync("message.txt","Hello World","utf8")
    console.log("Done")
}catch(e){
    console.error(e.message)
}