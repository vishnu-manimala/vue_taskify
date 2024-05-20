<!-- eslint-disable no-unused-vars -->
<!-- eslint-disable no-unused-vars -->
<template>
    <v-form>
        <v-container fluid v-if="todos">
            <v-row>
                <v-col cols="12">
                    <div class="task-list-container" style="overflow-y: auto; height: 300px;">
                        <v-card v-for="(todo,index) in todos" :key="index" class="mx-auto pa-3 ma-2 text-center"
                            max-width="75%">
                            <v-row>
                                <v-col cols="2">

                                    <v-icon color="green" v-if="todo.completed" >
                                        mdi-check-circle-outline
                                    </v-icon>
                                    <v-icon color="green" v-else-if="!todo.completed"  @click="toggleTick(todo)">
                                        mdi-circle-outline
                                    </v-icon>
                                </v-col>
                                <v-col cols="8">
                                    <v-list-item-title class="headline mb-1" :class="{ 'completed-todo': todo.completed }" id="task">
                                        {{ todo.task }}
                                    </v-list-item-title>
                                </v-col>
                                <v-col cols="1">
                                    <v-icon color="indigo lighten-4" v-if="!todo.important" @click="addToImportant(todo)">mdi-star-outline</v-icon>
                                    <v-icon color="yellow darken-2" v-else-if="todo.important" @click="addToImportant(todo)">mdi-star</v-icon>
                                </v-col>
                                <v-col cols="1">
                                    <v-icon color="red" v-if="!todo.important" @click="deleteTodo(todo)">mdi-delete</v-icon>
                                </v-col>
                            </v-row>
                        </v-card>
                    </div>
                </v-col>
            </v-row>
        </v-container>
    </v-form>
</template>
<script>

import { store } from '../store/store'

export default {
    name: "TaskList",
    created: function () {
        this.todoList;
    },
    data() {
    return {
      isTickSelected: false,
    };
  },
  methods: {
    toggleTick(todo) {
      store.dispatch( 'updateFirebseComplete', todo );
    },

    addToImportant(todo){
        console.log(todo);
        store.dispatch('updateFirebseImportant', todo);
    },

    deleteTodo(todo){
        store.dispatch('deleteTodo', todo);
    }
  },
    computed: {
        todos() {
            return this.$store.state.todos;
        },
        todoList() {
            console.log("get todo")
            return store.dispatch('getTodos')
        },
    }
}
</script>
<style scoped>
#task {
    display: flex;
    justify-content: flex-start;
}
.completed-todo {
  text-decoration: line-through; /* Strikethrough */
  color: gray; /* Gray color */
}

</style>