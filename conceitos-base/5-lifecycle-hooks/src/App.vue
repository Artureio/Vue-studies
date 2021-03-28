<template>
  <h1>
    lifecycle hooks
  </h1>
</template>

<script>
    import {onMounted} from 'vue'
    export default{
        setup (){
            onMounted(() => {
                console.log('Montado por composition API')
            })
        }
    }
/* 
    export default {
        mounted(){
            console.log('Foi montado por options API')
        }

    }

*/
</script>

<style>

</style>