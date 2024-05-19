import { createApp } from 'vue';
import App from './App.vue';
//import { database } from './firbase/db';
import { createVuetify } from 'vuetify/lib/framework.mjs';
import 'vuetify/styles';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import mdi from 'vuetify/iconsets/mdi'; // Import MDI icons

//vuetify config
const vuetify = createVuetify(
    {
        components,
        directives,
        mdi
    }
);

createApp(App).use(vuetify).mount('#app')
