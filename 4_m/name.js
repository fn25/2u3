
import os from "os"
export function hostname(){
    return new Promise((res,rej)=>{
        try{
            res(os.hostname())
        }catch(e){

            rej("Xatolik:",e)
        }
    }
    )
}
    