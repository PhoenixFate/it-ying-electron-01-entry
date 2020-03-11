//让渲染进程给主进程发送消息
//IPC（Inter-Process Communication，进程间通信）
const {ipcRenderer} =require('electron')

let sendDom=document.querySelector("#send")
//渲染进程执行主进程里面的方法
sendDom.onclick=function(){
    //  
    ipcRenderer.send("sendMessage","this is index renderer")
}


let sendReplayDom=document.querySelector("#sendReplay")
sendReplayDom.onclick=function(){
    ipcRenderer.send("sendMessageReplay","this is send replay dom")
}


//接受广播 并且返回处理结果
ipcRenderer.on("mainReplay",function(event,data){
    console.log(event)
    console.log(data)
})

//给主进程通信，同步
let sendSyncDom=document.querySelector("#sendSync")
sendSyncDom.onclick=function(){
    let returnMessage=ipcRenderer.sendSync("sendSyncMessage","this is index renderer sync")
    console.log(returnMessage)
}




