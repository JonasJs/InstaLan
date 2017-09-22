<template>

  <nav class="nav-bar">
    <div class="container">
      <div class="logo"><h1><a href="/#/">Insta<span>Lan</span></a></h1></div>
      <div class="nav-icon">
        <ul>
          <li>
            <a href="/#/"><i class="fa fa-picture-o" aria-hidden="true"></i></a>
          </li>
          <li>
            <a href="#/profile"><i class="fa fa-user" aria-hidden="true"></i></a>
          </li>
        </ul>
      </div>
    </div>
  </nav>

</template>
 
<script>
export default {
  name: 'Nav',
  data () {
    return {
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a{
  text-decoration: none;
}
.container{
	display: flex;
}
nav{
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 107px;
  border: 1px solid #EDEEEE;
  background-color: #E82D50;
}


.logo h1{
  font-size: 32px;
  font-weight: 300;
}
.logo h1 span{
  font-weight: 500;
}
.logo a{
	color: #FFFFFF;
}
.nav-icon{
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
.nav-icon ul {
  display: flex;
  justify-content: flex-end;
  list-style: none;
}

.nav-icon ul li{
  margin: 0 24px 0 0;
}
.nav-icon a{
	color: #FFFFFF;
}
.nav-icon a:hover{
  color:#F8B4C1;
}
.nav-icon ul li i {
  font-size: 26px;
}

</style>
