<template>
  <div>
     <p>{{msg}}</p> 
  </div>
</template>
<style scoped>
    p{
        line-height: 1;
        height: 50px;
        font-size: 30px;
        background-color: brown;
    }
</style>
<script>
export default {
  name:'Test',
  data(){
      return {
          msg :"superhan is a great programer"
      }
  }
}
</script>
