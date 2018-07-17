import Vue from 'vue'

import Index from '../pages/otc/index'

export default [
    { path: '/', component: Index },
    { path: '/index', component: Index },
    { path: '*', component: Index },
];
