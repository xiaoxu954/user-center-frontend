export default [
  {
    path: '/user',
    layout: false,
    routes: [{ path: '/user/login', component: './user/Login' }, { component: './404' }],
  },
  { path: '/welcome', icon: 'smile', component: './Welcome' },
  {
    path: '/admin',
    icon: 'crown',
    access: 'canAdmin',
    routes: [
      { path: '/admin/sub-page', icon: 'smile', component: './Welcome' },
      { component: './404' },
    ],
  },
  { icon: 'table', path: '/list', component: './TableList' },
  { path: '/', redirect: '/welcome' },
  { component: './404' },
];
