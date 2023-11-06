export default [
  {
    path: '/user',
    layout: false,
    routes: [
      { path: '/user/login', component: './user/Login' },
      { path: '/user/register', component: './user/Register' },
      { component: './404' },
    ],
  },
  { name: '欢迎', path: '/welcome', icon: 'smile', component: './Welcome' },
  {
    name: '用户管理',
    path: '/admin',
    icon: 'crown',
    access: 'canAdmin',
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

  { component: './404' },
];
