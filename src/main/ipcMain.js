//主进程 处理渲染进程广播的消息
const {ipcMain}=require('electron')


ipcMain.on("sendMessage",function(event,data){
    console.log(data)
    console.log(event)
})

ipcMain.on("sendMessageReplay",function(event,data){
    console.log(data)
    console.log(event)

    //通过主进程给渲染进程广播数据
    event.sender.send("mainReplay","main process replayed")
}) 

//接受同步消息
ipcMain.on("sendSyncMessage",function(event,data){
    console.log(data) 
    //给同步的渲染进程返回数据
    event.returnValue='this is sync main'

})
