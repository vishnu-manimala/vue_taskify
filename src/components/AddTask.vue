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
    export default {
      name:"AddTask",
      data: () => ({
        task: 'Type your task!',
        marker: true,
        iconIndex: 0,
        
      }),

  
      computed: {
        icon () {
          return this.icons[this.iconIndex]
        },
      },
  
      methods: {
        toggleMarker () {
          this.marker = !this.marker
        },
        sendMessage () {
          this.resetIcon()
          this.clearMessage()
        },
        clearMessage () {
          this.task = ''
        },
        resetIcon () {
          this.iconIndex = 0
        },
        changeIcon () {
          this.iconIndex === this.icons.length - 1
            ? this.iconIndex = 0
            : this.iconIndex++
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