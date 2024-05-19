import { createStore } from 'vuex';

export const store = createStore({
    state: {
        count: 0,
        todos: [],
      },

      mutations: {
        addTodo(state,task){
            
            state.count = state.count+1;
            state.todos = [
                ...state.todos,
                {   
                    id:state.count,
                    task,
                    completed: false,
                    important: false,
                }
            ]
            console.log(state.todos)
        },
        updateImportant(state,id){
            state.todoList = state.todoList.map((item) => {
                if (item.id === id) {
                  item.important = !item.important;
                }
                return item;
              });
        },
        updateCompleted(state,id){
            state.todoList = state.todoList.map((item) => {
                if (item.id === id) {
                  item.completed = !item.completed;
                }
                return item;
              });
        },
        updateTodos(state,todos){
            state.todos = todos
        }
      },

      getters: {
        completedTodos: (state)=>{
            const completedTodo = state.todos.filter(item=> item.completed === true);
            return completedTodo;
        },
        importantTodos: (state)=>{
            const importantTodo = state.todos.filter(item => item.important === true);
            return importantTodo;
        }
      }
  });