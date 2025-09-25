import fs from "node:fs/promises"
function sonlar(){
    let txt=""
    for(let i=1; i<=100; i++){
        txt+=i
        txt+="\n"
        txt+=" "
    }
    return txt
}
function writeNumber(){
    fs.writeFile("sonlar.txt",sonlar(),(err)=>{
        if(err){
            console.error(err)
            return
        }
        console.log("Yozildi")
    })
}

async function yig(){
    try{
        let ls=[]
        let mal=await fs.readFile('sonlar.txt','utf8')
        let lines=mal.trim().split('\n')
        for(let i of lines){
            if(i.trim() !==""){
                ls.push(+i.trim())}
            }
        console.log(ls)
    }catch(e){
        console.log(e)
    }
}
async function main(){
    await writeNumber()
    await yig()
}
main()

