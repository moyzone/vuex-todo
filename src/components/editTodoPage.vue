<template>
	<div>
		<p>
			<!-- Hi kela {{this.userId}} -->
			<input type="text" id="edit-task" v-bind:value="this.todo.title" v-on:keyup.enter="doneEdit">
			<button class="btn btn-success" style="margin-top:10px;"  v-on:click="doneEdit()">Save</button>
		</p>
	</div>
</template>

<script type="text/javascript">

	export default{
		name : 'editTodoPage',
		data() {
			return{
				todo:{}
			}
		},
		mounted(){
			this.todo=this.$route.params.obj
			// console.log(this.todo)
		},
		methods: {
			doneEdit (){
				var value = this.todo.title
				const { todo } = this
				// console.log(item)
				this.$store.commit('Edit_Todo', { todo, value })
				
			}
		}
	}
</script>