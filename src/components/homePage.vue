<template>
	<div>
		<h3>Things to do</h3>
		<h5><span style="color:red; float:right;">*Double click on label to edit</span></h5>
		<ul id="incomplete-tasks">
			<todos v-for="todo in todos" :todo="todo" v-if="!todo.done"></todos>
		</ul>

		<h3>Completed</h3>

		<ul id="completed-tasks">
			<completed v-for="todo in todos" :todo="todo" v-if="todo.done">></completed>
		</ul>
	</div>
</template>

<script type="text/javascript">
	import Todos from './Todos'
	import CompletedTodo from './CompletedTodo'

	export default{
		name : 'testComp',
		components: {
			'todos' : Todos,
			'completed' : CompletedTodo
		},
		computed: {
			todos () {
				return this.$store.state.todos
			}
		}
	}
</script>

<style scoped>
  body {
    background: #fff;
    color: #333;
    font-family: Lato, sans-serif;
  }
  .container {
    display: block;
    width: 400px;
    margin: 100px auto 0;
  }
  ul {
    margin: 0;
    padding: 0;
  }
  li * {
    float: left;
  }
  li, h3 {
    clear:both;
    list-style:none;
  }
  input, button {
    outline: none;
  }
  button {
    background: none;
    border: 0px;
    color: #888;
    font-size: 15px;
    width: 60px;
    margin: 10px 0 0;
    font-family: Lato, sans-serif;
    cursor: pointer;
  }
  button:hover {
    color: #333;
  }
  /* Heading */
  h3,
  label[for='new-task'] {
    color: #333;
    font-weight: 700;
    font-size: 15px;
    border-bottom: 2px solid #333;
    padding: 30px 0 10px;
    margin: 0;
    text-transform: uppercase;
  }
  input[type="text"] {
    margin: 0;
    font-size: 18px;
    line-height: 18px;
    height: 18px;
    padding: 10px;
    border: 1px solid #ddd;
    background: #fff;
    border-radius: 6px;
    font-family: Lato, sans-serif;
    color: #888;
  }
  input[type="text"]:focus {
    color: #333;
  }

  /* New Task */
  label[for='new-task'] {
    display: block;
    margin: 0 0 20px;
  }
  input#new-task {
    /*float: left;*/
    height: 35px;
    width: 318px;
  }
  input#edit-task {
    /*float: left;*/
    height: 35px;
    width: 250px;
  }
  p > button:hover {
    color: #0FC57C;
  }

  /* Task list */
  li {
    overflow: hidden;
    padding: 20px 0;
    border-bottom: 1px solid #eee;
  }
  li > input[type="checkbox"] {
    margin: 0 10px;
    position: relative;
    top: 15px;
  }
  li > label {
    font-size: 18px;
    line-height: 40px;
    width: 237px;
    padding: 0 0 0 11px;
  }
  li >  input[type="text"] {
    width: 226px;
  }
  li > .delete:hover {
    color: #CF2323;
  }

  /* Completed */
  #completed-tasks label {
    text-decoration: line-through;
    color: #888;
  }
</style>