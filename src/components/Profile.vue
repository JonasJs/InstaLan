<template>
	<section class="container">
		<h1>Perfil</h1>
		<hr>
		<div class="info">
			<div class="item-info">
				<h3>Nome:</h3>
				<p>{{ name }}</p>
			</div>
			<div class="item-info">
				<h3>Idade:</h3>
				<p>{{ idade }}</p>
			</div>
			<div class="item-info">
				<h3>Email:</h3>
				<p>{{ email }}</p>
			</div>
			<div class="item-info">
				<h3>Telefone:</h3>
				<p>{{ telefone }}</p>
			</div>
			<div class="item-info">
				<h3>Endereço:</h3>
				<p>{{ endereco }}</p>
			</div>
		</div>
		<div class="form-group">
			<h1>Editar</h1>
			<hr>
			<div class="item-form">
				<label>Nome:</label>
				<div class="form">
					<input v-model="name">
				</div>
			</div>
			<div class="item-form">
				<label>Idade:</label>
				<div class="form">
					<input v-model="idade">
				</div>
			</div>
			<div class="item-form">
				<label>Email:</label>
				<div class="form">
					<input v-model="email">
				</div>
			</div>
			<div class="item-form">
				<label>Telefone:</label>
				<div class="form">
					<input v-model="telefone">
				</div>
			</div>
			<div class="item-form">
				<label>Endereço:</label>
				<div class="form">
					<input v-model="endereco">
				</div>
			</div>
		</div>
		
	</section>
</template>

<script>
export default {
	name:'profile',
	data(){
		return{
			name:'Jonas Bezerra Alves',
			idade:'17 Anos',
			email:'joonasjss@gmail.com',
			telefone:'21 976603854',
			endereco:'Rua Antonio Austregésilo'
		}
	}
}

</script>

<style scoped>
h1{
	margin-top: 40px;
}
hr{
	background: #f5ecee;
    height: 1px;
    border: none;
}
.container{
	text-align: left;
}
.info, .item-form{
	margin-top: 16px;
}
.info .item-info{
	
	margin-top: 5px;
	display: flex;
	align-items: center;
}
.item-info h3{
	font-weight: 500;
}
.item-info  p{
	margin-left: 16px;
}
.item-form{
	
}
.item-form input{
	width: 100%;
	margin-top: 5px;
	height: 40px;
	border: none;
	border-radius: 8px;
	background-color: #eee;
	outline: none;
	padding-left: 16px;
	color: #6b6b6b;
    font-size: 11px;
}

</style>