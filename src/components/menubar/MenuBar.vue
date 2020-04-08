<template>
        <div  class="swiper-container swiper1"  ref="slider" >
                <div class="swiper-wrapper" >
                    <Menu v-for="(item,index) in menuData" :model="item" ref="menuSlide"></Menu>
                </div>
        </div>
</template>
<script>
    import Menu from './Menu.vue'
    import Swiper from "swiper"
    import 'swiper/css/swiper.css'
    import './css/nav.css'
    import Emitter from '../../mixins/emitter';
    export default {
        name:'menubar',
        mixins: [ Emitter],
        props:{
            data: {
                type: Array,
                default () {
                    return [];
                }
            },
        },
        watch:{
            data(value){
                this.menuData = value;
            },
            menuData(value) {

            }
        },
        components:{
            Menu,
        },
        data() {
            return {
                menuData:this.data,
            }
        },
        created(){

        },
        mounted(){
            setTimeout(() => {
                this._initSlider()
            }, 1000)
        },
        methods:{
            _initSlider(){
                this.swiper = new Swiper(this.$refs.slider, {
                    slidesPerView : 'auto'
                });
            },
            closeAll(){
                let  menus = this.$refs.menuSlide;
                menus.forEach((item,index)=>{
                    item.close();
            })
            },
            closeOther(menu){
                let  menus = this.$refs.menuSlide;
                menus.forEach((item,index)=>{
                    if(item!==menu){
                       item.close();
                    }
                })
            },
            removeMenuTo(menu){
                while (this.menuData.length>1){
                    if(this.menuData[this.menuData.length-1]===menu.model){
                        break;
                    }else {
                        this.removeMenu();
                    }
                }
            },
            removeMenu(){
                this.menuData.pop();
            },
            addMenu(model){
                this.menuData.push(model);
                if (this.swiper) {
                    setTimeout(() => {
                        this.$refs.menuSlide[this.menuData.length-1].open();
                        this.swiper.update();
                    }, 20);
                }
            }
        }
    }
</script>  
    