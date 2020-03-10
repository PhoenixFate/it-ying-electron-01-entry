// 创建菜单
const remote=require('electron').remote
const Menu = remote.Menu

var template = [
    {
        label:'该应用',
        submenu:[
            {
                label:'关闭当前窗口',
                role:'close'
            },
            {
                label:'退出程序',
                role:'quit'
            }
        ]
    },
    {
        label: '文件',
        submenu:[
            {
                label:'新建文件',
                accelerator:"ctrl+n",
                click:function(){
                    console.log("新建文件")
                }
            },
            {
                label:'新建窗口',
                click:function(){
                    console.log("新建窗口")
                }
            }
        ]
    }, {
        label: '编辑',
        submenu:[
            {
                label:'全选',
                role:"selectAll"
            },
            {
                label:'复制',
                role:"copy"
            },{
                label:'剪切',
                role:"cut"

            },{
                label:"粘贴",
                role:"paste"
            }
        ]
    }

]
var m=Menu.buildFromTemplate(template)
Menu.setApplicationMenu(m)

//右键菜单
window.addEventListener('contextmenu',function(e){
    console.log("当前页 右键")

    //阻止当前窗口默认事件
    e.preventDefault()

    //在当前窗口点击右键的时候 弹出 定义的菜单模板
    m.popup({
        window:remote.getCurrentWindow()
    })


},false)