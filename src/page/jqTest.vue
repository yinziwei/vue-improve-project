<template>
    <div class="love">
      <p>这里是初始文字</p>
      <button @click="testjq">看看jq有没有工组</button>
    </div>
</template>

<script>
    export default {
        name: "jqTest",
      methods:{
          testjq(){
            $('.love p').html('jq工作正常')
          }
      }
    }
</script>

<style scoped>

</style>
