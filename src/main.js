import {createApp} from 'vue'
import App from './App.vue'

let app = createApp(App).mount('#app');

console.log(app.tabs[0]);

