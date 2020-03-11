// 创建菜单
const electron = require('electron')
const Menu = electron.Menu

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




