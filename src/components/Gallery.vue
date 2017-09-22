<template>
	<section class="container">
		<div class="item-inst">
			<div class="info">
				<div id="profile"></div>
				<h4>Jonas Alves</h4>
			</div>
			<div class="photo"></div>
		</div>

		<div class="item-inst">
			<div class="info">
				<div id="profile"></div>
				<h4>Luan Lucas</h4>
			</div>
			<div class="photo"></div>
		</div>

		<div class="item-inst">
			<div class="info">
				<div id="profile"></div>
				<h4>Felipe Nascimento</h4>
			</div>
			<div class="photo"></div>
		</div>
	</section>
</template>

<script>

export default {
  name: 'Gallery',
  data () {
    return {
      
    	}
	}
}
</script>

<style scoped>

.item-inst{
	text-align: left;
	margin: 0 auto;
	width: 600px;
	height: 600px;
	overflow: hidden;
    margin-top: 60px;
}
.info{
	height: 65px;
	display: flex;
	align-items: center;
	padding-left: 24px;
	background: #fff;
	border: 2px solid #EDEEEE;
}
.info #profile{
	border-radius: 100%;
	border: 2px solid #EDEEEE;
	width: 30px;
	height: 30px;
}
.info h4{
	margin-left: 16px;
}
.photo{
	width: 100%;
	height: 100%;
	background: #eee;
}
@media (min-width: 320px) and (max-width: 425px) {
	.item-inst{
	  width: 100%;
	  height: 305px;
	}
}
@media (min-width: 426px) and (max-width: 768px) {
	.item-inst{
	  width: 100%;
	  height: 500px;
	}
}
</style>