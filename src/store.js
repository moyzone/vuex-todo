import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		todos: window.localStorage.todos?JSON.parse(window.localStorage.getItem("todos")):[],
	},
	mutations: {
		ADD_TODO (state, { title,taskid }) {
			state.todos.push({
				title,
				taskid,
				done: false
			})
			localStorage.setItem("todos",JSON.stringify(state.todos));
		},
		Edit_Todo (state, { todo, value }) {
			// console.log(todo)
			console.log(value)
			state.todos.forEach(task=>{
				
				if(task.taskid===todo.taskid){
					
					task.title=value;
					task.done=false;
					console.log(task.title)
				}
			})
			// todo.title = value
			console.log(state.todos)
			localStorage.setItem("todos",JSON.stringify(state.todos));
		},
		Complete_Todo (state, { todo }) {
			todo.done = !todo.done
			localStorage.setItem("todos",JSON.stringify(state.todos));
		},
		Delete_Todo (state, { todo }){
			state.todos.splice(state.todos.indexOf(todo), 1)
			localStorage.setItem("todos",JSON.stringify(state.todos));
		}
	}
})