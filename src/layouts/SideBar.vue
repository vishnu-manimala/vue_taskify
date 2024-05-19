<template>
    <v-navigation-drawer :location="$vuetify.display.mobile ? 'left' : undefined" temporary>
        <v-list>
            <v-list-item v-for="item in items" :key="item.value" @click.prevent="handleItemClick(item.value)">
                <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item>
        </v-list>
    </v-navigation-drawer>
</template>
<script>
export default {
    name: "SideBar",
    data: () => ({
        items: [
            {
                title: 'My Day',
                value: 'myDay',
            },
            {
                title: 'Important',
                value: 'important',
            },
            {
                title: 'Tasks',
                value: 'tasks',
            },
            {
                title: 'Completed',
                value: 'completed',
            },
            {
                title: 'Pending',
                value: 'pending',
            },
        ],
    }),
    methods:{
        handleItemClick(clikcedValue){
            console.log(clikcedValue)
        }
    }
}
</script>
