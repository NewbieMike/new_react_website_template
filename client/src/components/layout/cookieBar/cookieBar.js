import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import CookieConsent from 'react-cookie-consent';


const Component = () => {

    const {t} = useTranslation();

  return (
    <div className='cookieBar_container'>
        <CookieConsent 
        debug={true}
        expires={365}
        style={{
            background: '#010101',
        }}
        buttonStyle= {{
            background: '#00509d',
            color: '#f1f1f1',
            borderRadius: '6px'
        }}
        buttonText = {t('cookie_bar_button')}
        >
            {t('cookie_bar_text_1')}
            <a href='/'>{t('cookie_bar_policy')}</a>
            {t('cookie_bar_text_2')}
        </CookieConsent>
    </div>
  );
  
};

Component.propTypes = {
  children: PropTypes.node,
};


export {
  Component as CookieBar,
  Component as CookieBarComponent,
};
