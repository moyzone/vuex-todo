<template>
	<div>
		<p>
			<label for="new-task">Todos</label>
			<add-todo></add-todo>
		</p>
	</div>
</template>

<script type="text/javascript">
	import AddTodo from './AddTodo'

	export default{
		name : 'testComp',
		components: {
			'add-todo' : AddTodo,			
		}
	}
</script>