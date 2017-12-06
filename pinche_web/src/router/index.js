import Vue from 'vue';
import Router from 'vue-router';
import Index from '@/components/index/index';
import personal from '@/components/personal';
import login from '@/components/login/login';
import regist from '@/components/regist/register';
import register1 from '@/components/regist/register1';
import register2 from '@/components/regist/register2';
import register3 from '@/components/regist/register3';
import register4 from '@/components/regist/register4';
import pinche from '@/components/list/Carpooling';
import content from '@/components/content/Content';
import join from '@/components/Pay';
import setting from '@/components/setting';

Vue.use(Router)

export default new Router({
    routes: [
        {path: '/', name: 'Index', component: Index},
        {path: '/personal', component: personal},
        {path: '/login', component: login},
        {
            path: '/regist',
            component: regist,
            children:[
                {path:'',component:register1},
                {path:'/register2',component:register2},
                {path:'/register3',component:register3},
                {path:'/register4',component:register4}
            ]
        },
        {path: '/pinche', component: pinche},
        {path: '/content', component: content},
        {path: '/join', component: join},
        {path: '/setting', component: setting},
    ]
})
