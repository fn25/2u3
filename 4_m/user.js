import os from "os"
export function info(){
    return new Promise((res,rej)=>{
        try{
            res(os.userInfo())
        }catch(err){
            rej("Xatolik"+err.message)
        }
})}