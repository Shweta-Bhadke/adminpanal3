
import i18n from 'i18next';

export const translatefun = (naven,navchi,lang) => {

  const translate1 = lang === "en" ? naven:navchi 
    i18n.changeLanguage(lang)
   
    return translate1;
 
  };
