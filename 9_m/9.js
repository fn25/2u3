import fs from "fs/promises"
try{
    await fs.appendFile("message.txt","\nThis is append content")
    console.log("Done")
}catch(err){
    console.error(err)
}