import { createApp } from 'vue';
import App from './App.vue';
import { firebaseApp } from './firbase/db';
import { createVuetify } from 'vuetify/lib/framework.mjs';
import 'vuetify/styles';
import { fa } from "vuetify/iconsets/fa";
import { aliases, mdi } from "vuetify/lib/iconsets/mdi";
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import "@mdi/font/css/materialdesignicons.css";
import { store } from './store/store.js'
import { VueFire, VueFireFirestoreOptionsAPI } from "vuefire";


//vuetify config
const vuetify = createVuetify(
    {
        icons: {
            defaultSet: "mdi",
            aliases,
            sets: {
                mdi,
                fa,
            },
        },
        components,
        directives,
        mdi
    }
);

const app = createApp(App)
    app.use(store);
    app.use(vuetify);
    app.use(VueFire, {
        firebaseApp,
        modules: [VueFireFirestoreOptionsAPI()],
      });
    app.mount('#app');
