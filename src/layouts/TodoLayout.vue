<template>
    <v-card>
      <v-layout>
        <v-app-bar
          color="primary"
          prominent
        >
          <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer" id="nav-icon" >Menu</v-app-bar-nav-icon>
  
          <v-toolbar-title>TASKIFY</v-toolbar-title>
  
          <v-spacer></v-spacer>
  
          <template v-if="$vuetify.display.mdAndUp">
            <v-btn icon="mdi-magnify" variant="text"></v-btn>
  
            <v-btn icon="mdi-filter" variant="text"></v-btn>
          </template>
  
          <v-btn icon="mdi-dots-vertical" variant="text"></v-btn>
        </v-app-bar>
  
        <SideBarVue  v-model="drawer" />
  
        <v-main style="height: 500px; border-radius: 30px;">
          <v-card-text>
           <AddTaskVue/>
          </v-card-text>
        </v-main>
      </v-layout>
    </v-card>
  </template>
  <script>
import AddTaskVue from '@/components/AddTask.vue'
import SideBarVue from './SideBar.vue'

    export default {
      name:"TodoLayout",
      components:{
        SideBarVue,
        AddTaskVue
      } ,
      data: () => ({
        drawer: false,
        group: null,
      }),
  
      watch: {
        group () {
          this.drawer = false
        },
      },
    }
  </script>
  <style scoped>
#nav-icon {
    padding-left: 10px;
}
   </style>