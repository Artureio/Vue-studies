<template>
<div class="">
  <h1 :style="{textDecoration: decoration}">Olá{{name}}</h1>
  <a :href="link">Repositório</a>
  <br>
  <input type="text" v-model="name">
</div>
  
</template>

<script>
export default {
    data: ()=> ({
        name:'Artur',
        decoration: 'underline',
        link:'https://github.com/artureio'
    })

}
</script>

<style>

</style>