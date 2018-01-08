<template>
    <!--<div class="col mb-4">-->
  	    <img class="m-1" width="70" height="70" :src="img" alt="...">
    <!--</div>-->
</template>

<script>
    import img from '../../img/placeholder.png'
    const COMPONENT_NAME = 'bottom'
    export default {
        name: COMPONENT_NAME,

        data () {
            return {
                img
            }
        }
    }
</script>