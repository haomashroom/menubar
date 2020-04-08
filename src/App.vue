<template>
  <div id="app">
   <menu-bar :data="list"></menu-bar>
  </div>
</template>

<script>
import MenuBar from './components/menubar/MenuBar.vue'
export default {
  name: 'app',
  components: {
      MenuBar
  },
  data(){
      return{
          list:[]
      }
  },
   created(){
       var res = {};
       res.name = "全部";
       res.href = "";
       res.children =[{"isDefault":1,"src":"images/icontype1.png","children":[{name:"A模块",children:[{name:'AA模块',children:[{name:"AAA模块"}]},{name:'AA模块',children:[{name:"AAc模块"}]},{name:'Ab模块',children:[{name:"Abb模块"}]}]},{name:"B模块",children:[{name:'BB模块',children:[{name:"BBB模块"}]}]}],"domain":"PB07","maptype":"CONTAINER","name":"维修公告","oid":"com.imecms.container.Container:1001"},{"path":"用户手册","src":"images/icontype1.png","domain":"PB07","maptype":"ST","name":"用户手册","oid":"com.imecms.container.Folder:3837"},{"path":"保养手册","src":"images/icontype1.png","domain":"PB07","maptype":"ST","name":"保养手册","oid":"com.imecms.container.Folder:3838"},{"path":"下载区","src":"images/icontype1.png","domain":"PB07","maptype":"JS","name":"下载区","js":"showDownloadAreaContent();"}];
      this.list = [res];
   }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
