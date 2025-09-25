import {info} from "./user.js"
import {hostname} from "./name.js"
async function mal(){
    try{
        let name=await hostname()
        let userinfo=await info()
        console.log(`Hostname: ${name} 
Username:${userinfo.username}`)
    }catch(e){
        console.error(e)
    }
}
mal()