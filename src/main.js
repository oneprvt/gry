import { createApp } from 'vue';
import route from './middleware/Route';
import translate from './middleware/Translate';
import './style.css';
import App from './App.vue';

createApp(App).use(translate).use(route).mount('#app');
