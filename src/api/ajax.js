import axios from "axios"
import qs from 'querystring'
const CancelToken = axios.CancelToken
let cancel

export default function ajax(url,data={},method="GET"){
    const {onlyOne}=data
    return new Promise((resolve,reject)=>{
        let promise
        if(onlyOne){
            delete data.onlyOne
            if(typeof cancel==="function"){
                cancel()
                console.log('取消一个')
            }
        }
        if(method=="GET"){
            if(JSON.stringify(data) != "{}"){
                // let str=""
                // Object.keys(data).forEach((key)=>{
                //     str+=`${key}=${data[key]}&`
                // })
                // url+="?"+str.substring(0,str.length-1)
                if(onlyOne){
                    promise = axios.get(url,{
                        params:data,
                        cancelToken:new CancelToken(function(c){
                            cancel=c
                        })
                    })
                }else{
                    promise = axios.get(url,{params:data})
                }
            }
            else{
                promise = axios.get(url)
            }
        }else{
            if(method=="POST"){
                promise=axios.post(url,data)
            }else if(method=="POSTFORM"){
                promise=axios({
                    url,
                    data:qs.stringify(data),
                    headers: { 'content-type': 'application/x-www-form-urlencoded' },
                    method: 'POST',
                })
            }
        }
        promise.then((response)=>{
            resolve(response.data)
            cancel=null
        }).catch()
    })
}