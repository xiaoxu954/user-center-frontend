export default [
  {
    path: '/user',
    layout: false,
    routes: [
      { name: '登录', path: '/user/login', component: './user/Login' },
      { name: '注册', path: '/user/register', component: './user/Register' },
      { component: './404' },
    ],
  },

  { name: '欢迎', path: '/welcome', icon: 'smile', component: './Welcome' },
  {
    name: '用户管理页面',
    path: '/admin',
    icon: 'crown',
    access: 'canAdmin',
    //todo 管理员权限校验
    component: './Admin',
    routes: [
      {
        path: '/admin/addUser',
        name: '添加用户',
        icon: 'smile',
        component: './Admin/AddUser',
      },
      {
        path: '/admin/user-manage',
        name: '用户管理',
        icon: 'smile',
        component: './Admin/UserManage',
      },

      { component: './404' },
    ],
  },
  // {name: '查询表格', icon: 'table', path: '/list', component: './TableList'},
  // {name: '用户管理', path: '/admin/user-manage', icon: 'smile', component: './Admin/UserManage'},

  //默认页面
  { path: '/', redirect: '/welcome' },
  { component: './404' },
];
