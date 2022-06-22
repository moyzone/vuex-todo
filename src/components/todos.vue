<template>
	<div id="">

		<li>
			<input type="checkbox" v-bind:checked="todo.done" v-on:change="completeTodo({ todo })">
			<label v-show="!editing" v-text="todo.title" v-on:dblclick="editing = true"></label>
			<input type="text" id="edit-task" v-show="editing" v-bind:value="todo.title" v-on:keyup.enter="doneEdit">			
			<button class="delete" v-on:click="deleteTodo({ todo })">Delete</button>
		</li>

	</div>
</template>

<script type="text/javascript">
	export default{
		name : 'todos',
		props: ['todo'],
		data() {
			return {
				editing : false
			}
		},
		methods: {
			doneEdit (e){
				var value = e.target.value
				const { todo } = this
				this.$store.commit('Edit_Todo', { todo, value })
				this.editing = false
			},
			deleteTodo(e){
				const { todo } = this
				this.$store.commit('Delete_Todo', { todo })
			},
			completeTodo(e){
				const { todo } = this
				this.$store.commit('Complete_Todo', { todo })
			}
		},
		directives: {
			// focus (el, { value }, { context }) {
			// 	if (value) {
			// 		context.$nextTick(() => {
			// 			el.focus()
			// 		})
			// 	}
			// }
		}
	}
</script>