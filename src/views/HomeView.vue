<script>
import TheWelcome from '../components/TheWelcome.vue'
export default{
   computed:{
    isOpenLine(){
      console.log(window.liff.isInClient(), '是否透過line開啟')
      return window.liff.isInClient()
    }
  }
}
</script>

<template>
  <main>
    <h1>LIFF APP 是否透過LINE 內部瀏覽器開啟</h1>
    {{ isOpenLine }}

    <TheWelcome />
  </main>
</template>
