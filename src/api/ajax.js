import axios from "axios"
import qs from 'querystring'

export default function ajax(url,data={},method="GET"){
    return new Promise((resolve,reject)=>{
      let promise;
        if(method=="GET"){
            if(JSON.stringify(data) != "{}"){
              promise = axios.get(url,{params:data})
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
        }).catch()
    })
}
