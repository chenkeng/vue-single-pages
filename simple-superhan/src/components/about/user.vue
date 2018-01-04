<template>
  <div>
    {{msg}}
  </div>
</template>
<script>
  export default {
    mounted(){
      console.log(this.$route.params.id);
    },
    name:'user',
    data(){
      return {
        msg:"hello superhan, this is /about/id"
      }

    }
  }
</script>
