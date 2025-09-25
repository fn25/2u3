import EventEmitter from "events"
const emitter=new EventEmitter()
emitter.on("dataRecieved",(data)=>{
    console.log("Malumotlar:",data)
})
// emitter.emit("dataRecieved","Salom")
process.stdin.setEncoding("utf-8")
console.log("kirtng> ")
process.stdin.on("data",(input)=>{
    const suz=input.trim()
    if(suz){
        emitter.emit("dataRecieved",suz)
    }
})