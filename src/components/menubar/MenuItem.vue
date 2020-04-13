<template>
   <li @click.stop="handleClick"><a href="javascript:void(0)" class="ui-link">{{model.name}}</a></li>
</template>
<script>
    import { findComponentUpward } from '../../utils/utils';
    import Emitter from '../../mixins/emitter';
    export default {
        name:'menuItem',
        mixins: [ Emitter],
        props: {
            model:{
                type: Object,
                default () {
                    return {};
                }
            },
        },
        created(){
            this.menu = findComponentUpward(this, 'menuSlide');
            this.menubar = this.menu.menubar;
        },
        data() {
            return {}
        },
        methods:{
            handleClick(){
                //判断是否是叶子节点
                if(!this.model.children||this.model.children.length===0){
                    this.dispatch('menubar', 'renderLeaf',this);
                }
                this.menubar.removeMenuTo(this.menu);
                this.model.open = true;
                this.menubar.addMenu(this.model);
                this.menu.close();
            },
            addSubItems(array){
                this.model.children = array;
            }
        }

    }
</script>  
    