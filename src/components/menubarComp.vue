<template>
	<div>
		<ul class="menu_ul">
			<li><router-link to="/">Home</router-link></li>
			<li><router-link to="/addTodo">Add Todo</router-link></li>
			<li><router-link to="/test">About</router-link></li>
		</ul>
	</div>
</template>

<script type="text/javascript">
	export default{
		name : 'menubarComp',
		components: {
						
		}
	}
</script>
<style scoped>
.menu_ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #333;
}

.menu_ul li {
  display: inline;
}

.menu_ul li a {
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

/* Change the link color to #111 (black) on hover */
.menu_ul li a:hover {
  background-color: #111;
}
</style>