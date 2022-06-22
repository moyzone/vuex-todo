import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		todos: [],
	},
	mutations: {
		ADD_TODO (state, { title }) {
			state.todos.push({
				title,
				done: false
			})
		},
		Edit_Todo (state, { todo, value }) {
			todo.title = value
		},
		Complete_Todo (state, { todo }) {
			todo.done = !todo.done
		},
		Delete_Todo (state, { todo }){
			state.todos.splice(state.todos.indexOf(todo), 1)
		}
	}
})