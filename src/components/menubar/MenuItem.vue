<template>
   <li @click.stop="handleClick"><a href="javascript:void(0)" class="ui-link">{{model.name}}</a></li>
</template>
<script>
    import { findComponentUpward } from '../../utils/utils';
    export default {
        name:'menuItem',
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
                this.menubar.removeMenuTo(this.menu);
                this.model.open = true;
                this.menubar.addMenu(this.model);
                this.menu.close();
            }
        }

    }
</script>  
    