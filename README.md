# menubar

![Image text](https://github.com/haomashroom/menubar/tree/master/data/readme.jpg)
![Image text](https://github.com/haomashroom/menubar/tree/master/data/readme1.jpg)
## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run dev
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```
说明：
1.菜单横向滑动功能依赖了官方的swiper插件库
2.基本例子在App.vue 里面说明
3.参考公开事件
methods:{
       //点击横向菜单
        clickMenu(menu){
            console.log("menu",menu);
        },
        //点击下拉菜单
        clickMenuItem(menuItem){
            console.log("menuItem",menuItem)
        },
        //点击下拉菜单没有儿子节点触发
        renderLeaf(menuItem){
            console.log("menuItem111",menuItem);
            let model = menuItem.model;
            if(model.domain =="PB07"){
                var data1 = [{name:"新数据1",children:[{name:"测试数据1"}]},{name:"新数据2",children:[{name:"测试数据2"}]}];
                //动态添加数据
                menuItem.addSubItems(data1);
            }

        }
  }
### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
