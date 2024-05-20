import { createStore } from 'vuex';
import { useCollection } from "vuefire";
import { db, taskRef } from "./firebase";
import { updateDoc, doc, addDoc, deleteDoc } from "firebase/firestore";
import { Vuex } from 'vuex'

export const store = createStore({
  state: {
    todos: [],
  },

  mutations: {

    addTodo(state, todo) {
      Vuex.set(state.todos, state.todos.length, todo);
    },

    updateImportant(state, todo) {
      state.todos = state.todos.map((item) => {
        if (item.id === todo.id) {
          item.important = !item.important;
          item.updatedAt = Date.now();
        }
        return item;
      });

    },

    updateCompleted(state, todo) {

      state.todos = state.todos.map((item) => {
        if (item.id === todo.id) {
          item.completed = !item.completed;
          item.updatedAt = Date.now();
        }

        return item;
      });

    },

    updateTodos(state, todos) {

      state.todos = todos
    },

    todoDelete(state, todo){
      const index = state.todos.findIndex(item => item.id === todo.id);
      if (index !== -1) {
        state.todos.splice(index, 1); 
      }
  },
  },
  getters: {
    completedTodos: (state) => {
      const completedTodo = state.todos.filter(item => item.completed === true);
      return completedTodo;
    },
    importantTodos: (state) => {
      const importantTodo = state.todos.filter(item => item.important === true);
      return importantTodo;
    }
  },

  actions: {
    getTodos({ commit }) {
      const documents = useCollection(taskRef);
      commit('updateTodos', documents)
    },
    
    async updateFirebseComplete({ commit }, todo) {
      
      todo.completed = !todo.completed;
      console.log(todo);
      const docRef = doc(db, "tasks", todo.id);
      await updateDoc(docRef, todo);
      commit('updateCompleted', todo)
    },

    async saveTodoFirebase({ commit }, task) {

      await addDoc(taskRef, task);
      commit('addTodo', task);

    },

    async updateFirebseImportant({commit}, todo){
      todo.important = !todo.important;
      const docref = doc(db, 'tasks', todo);
      await updateDoc(docref, todo);
      commit('updateImportant', todo);
    },

    async deleteTodo( {commit}, todo){
      await deleteDoc(doc(db, "taks", todo.id));
      commit('todoDelete', todo);
    }
  }
});