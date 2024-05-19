<template>
    <v-form>
      <v-container id="taskInput">
        <v-row>
          <v-col cols="12">
           
            <v-text-field
              v-model="task"
              :append-icon="task ? 'mdi-send' : 'mdi-send-clock'"
              :prepend-icon="mdi-Plus-CircleOutline"
              clear-icon="mdi-close-circle"
              label="type your task..."
              type="text"
              variant="filled"
              clearable
              @click:append="sendMessage"
              @click:append-inner="toggleMarker"
              @click:clear="clearMessage"
              @click:prepend="changeIcon"
              @click="clearMessage"
              hover="white"
            ></v-text-field>
       
          </v-col>
        </v-row>
      </v-container>
    </v-form>
  </template>
  <script>
  import { addDoc } from "firebase/firestore";
  import { taskRef } from "../store/firebase";

    export default {
      name:"AddTask",
      data: () => ({
        task: 'Type your task!',
        marker: true,
        iconIndex: 0,
        
      }),

      methods: {
         toggleMarker () {
          this.marker = !this.marker
        },
        async sendMessage () {
          const data = this.task;
          const newDocument = { id: Math.round(Math.random() * 100), task:this.task, completed: false, important: false };

        await addDoc(taskRef, newDocument);
        console.log(data);
          this.$store.commit('addTodo',data)
          //this.addTask(Math.random(),this.task)
          this.clearMessage()
        },
        clearMessage () {
          this.task = ''
        },
       
        
      },
    }
  </script>
  <style scoped>
  #taskInput {
    position: fixed; 
    bottom: 0;
    left: 50%; 
    transform: translateX(-50%); 
    width: 75%; 
    align-items: center;
    }
   
  </style>