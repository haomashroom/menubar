<template>
    <li :class="['swiper-slide',{'selected':this.model.open}]" @click.stop ="handleClick">
        <a href="javascript:void(0)"  class="ui-link" >{{model.name}}</a>
        <ul :class="['swiper-menu',{'open':this.model.open}]" v-if="model.children&&model.children.length" >
            <MenuItem v-for="(item,index) in model.children" :model="item"></MenuItem>
        </ul>
    </li>
</template>
<script>
    import MenuItem from './MenuItem.vue'
    import { findComponentUpward } from '../../utils/utils';
    export default {
        name:'menuSlide',
        props: {
          model:{
              type: Object,
              default () {
                  return {};
              }
          },
        },
        data() {
            return {
            }
        },
        computed: {
            show(){
                return 'open' in this.model && this.model.open;
            }
        },
        created(){
            //get parent
            this.menubar =  findComponentUpward(this, 'menubar');
        },
        methods:{
            open(){
                this.$forceUpdate();
                this.$set(this.model,'open',true);
            },
            close(){
                this.$forceUpdate();
                this.$set(this.model,'open',false);
            },
            toggle(){
                this.$forceUpdate();
                this.$set(this.model,'open',!this.model.open);
            },
            handleClick(){
                this.menubar.closeOther(this);
                this.toggle();
            }
        },
        components:{
            MenuItem
        }
    }
</script>  
    