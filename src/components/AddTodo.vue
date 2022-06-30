<template>
	<div id="addTodo" class="modal-vue">
		<!-- <input type="text" class="form-control add-todo" placeholder="Add todo" v-on:keyup.enter="addTodo"> -->
		<input id="new-task" type="text" placeholder="Add todo" v-on:keyup.enter="addTodo">
		<button class="btn btn-success" style="margin-top:10px;" v-on:click="addTodo">Add</button>
		
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
				var taskid=this.newTaskId
				// console.log(taskid)
				this.$store.commit('ADD_TODO', { title, taskid } )
				e.target.value = ''
				alert("Todo was added successfully!!");
				this.$router.push({ path: `/` }) 
			}
		},
		computed: {
			newTaskId() {
				let max=0;
				this.$store.state.todos.forEach(element => {					
					let curr=element.taskid;
					console.log(element.taskid)
					max=Math.max(max, curr) +1;
				});
				return max;
			}
		}		
	}
</script>
