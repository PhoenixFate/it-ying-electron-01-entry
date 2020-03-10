const fs = require("fs")

window.onload = function () {
    // --------------------- day04 ---------------- start
    let btn = this.document.querySelector('#package_btn')
    let package_textarea = this.document.querySelector("#package_textarea")
    btn.onclick = function () {
        console.log("package.json")
        //1.获取本地的文件
        fs.readFile("package.json", (error, data) => {
            console.log(data)
            //2.赋值给textarea
            package_textarea.innerHTML = data
        })
    }
    // --------------------- day04 ---------------- end

    // --------------------- day05 ---------------- start
    let content=this.document.querySelector("#content")
    content.ondragenter=content.ondragover=content.ondragleave=function(){
        //阻止默认行为
        return false
    }
    content.ondrop=function(e){
        console.log(e)
        //阻止默认行为
        e.preventDefault()
        console.log(e.dataTransfer.files)
        console.log(e.dataTransfer.files[0])
        let path=e.dataTransfer.files[0].path
        fs.readFile(path,'utf-8',(error,data)=>{
            if(error){
                console.log(error)
                return false
            }
            console.log(data)
            content.innerText=data
        })
    }
    // --------------------- day05 ---------------- end

    // --------------------- day06 ---------------- start
    let open_btn=this.document.querySelector("#open_btn")

    //渲染进程无法直接调用主进程的模块，但我们可以通过electron中但remote模块间接调用主进程但模块
    const BrowserWindow=require('electron').remote.BrowserWindow
    const path=this.require('path')
    var new_window=null
    open_btn.onclick=function(){
        console.log("创建新窗口")
        //调用BrowserWindow打开新窗口
        new_window=new BrowserWindow({
            width:400,
            height:300,
            // fullscreen:true
        })
        new_window.loadURL(path.join('file:',__dirname,'news.html'))
        new_window.on('closed',()=>{
            new_window=null
        })

    }



    // --------------------- day06 ---------------- end


}