<template>
    <v-form>
        <v-container id="taskInput">
            <v-row>
                <v-col cols="12" v-if="todos">
                    <v-card class="mx-auto pa-3 ma-2 text-center" max-width="75%" v-for="todo in todos"
                        :key="todo.task">
                        <v-row>

                            <v-col cols="2">

                                <v-icon>mdi-circle-outline</v-icon>

                            </v-col>
                            <v-col cols="8">
                                <v-list-item-title class="headline mb-1" id="task">{{ todo.task }}</v-list-item-title>
                            </v-col>
                            <v-col cols="1">

                                <v-icon color="indigo lighten-4">mdi-star-outline</v-icon>

                            </v-col>

                        </v-row>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </v-form>
</template>
<script>

import { store } from  '../store/store'
export default {
    name: "TaskList",
    created: function () {
        this.todoList;
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
</style>