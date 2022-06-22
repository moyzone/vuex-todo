<template>
	<div id="addTodo">
		<!-- <input type="text" class="form-control add-todo" placeholder="Add todo" v-on:keyup.enter="addTodo"> -->
		<input id="new-task" type="text" placeholder="Add todo" v-on:keyup.enter="addTodo">
		<!-- <button class="btn btn-success" style="margin-top:10px;" v-on:click="addTodo">Add</button> -->
	</div>
</template>

<script type="text/javascript">
	export default{
		name : 'addTodo',
		data() {
			return {
				title : ''
			}
		},
		methods : {
			addTodo(e) {
				var title = e.target.value
				this.$store.commit('ADD_TODO', { title } )
				e.target.value = ''
			}
		}
	}
</script>