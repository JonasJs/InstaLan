<template>

	<div>
		<gallery> </gallery>

	</div>

</template>
 
<script>
import Gallery from '@/components/Gallery';
export default {
  name: 'Home',
   components:{
    Gallery
  },
  data () {
    return {
      msg: 'Bem-Vindo'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
