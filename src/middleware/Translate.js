import { createI18n } from 'vue-i18n';

import { ru } from './store/ru.js';
import { en } from './store/en.js';

const languages = {
  ru,
  en,
};

const translate = createI18n({
  locale: localStorage.getItem('Region'),
  messages: languages,
});

export default translate;
