import Vue from 'vue'

import AppButton       from './components/core/elements/Button/AppButton';
import AppNotification from './components/core/elements/Notification/AppNotification';
import AppIcon         from './components/core/elements/Icon/AppIcon';
import AppInput        from './components/core/elements/Form/AppInput';
import AppInputIcon    from './components/core/elements/Form/AppInputIcon';
import AppRow          from './components/core/elements/Grid/AppRow';
import AppCol          from './components/core/elements/Grid/AppCol';
import AppLoader       from './components/core/elements/Loader/AppLoader';

let Templ8 = {};

Templ8.install = (Vue, options) => {
    Vue.component('AppButton', AppButton);
    Vue.component('AppNotification', AppNotification);
    Vue.component('AppIcon', AppIcon);
    Vue.component('AppInput', AppInput);
    Vue.component('AppInputIcon', AppInputIcon);
    Vue.component('AppRow', AppRow);
    Vue.component('AppCol', AppCol);
    Vue.component('AppLoader', AppLoader);
}

export default Templ8;