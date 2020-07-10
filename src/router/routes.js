
const routes = [
  {
    path: '/',
    component: () => import('layouts/layout.vue'),
    children: [
      { path: '', name: 'home', component: () => import('pages/home.vue') },
      { path: 'akomodasi', name: 'akomodasi', component: () => import('pages/akomodasi.vue') },
      { path: 'destnasi', name: 'destinasi', component: () => import('pages/destinasi.vue') },
      { path: 'event', name: 'event', component: () => import('pages/event.vue') }
    ]
  },
  {
    path: '/',
    component: () => import('layouts/layoutlogin.vue'),
    children: [
      { path: 'login', name: 'login', component: () => import('pages/loginregis.vue') }
    ]
  },
  {
    path: '/',
    component: () => import('layouts/layoutadmin.vue'),
    children: [
      { path: 'homeadmin', name: 'homeadmin', component: () => import('pages/adminhome.vue') },
      { path: 'editadmin/:id', name: 'editadmin', component: () => import('pages/adminedit.vue') },
      { path: 'datawisata', name: 'datawisata', component: () => import('pages/adminwisata.vue') },
      { path: 'editwisata/:id', name: 'editwisata', component: () => import('pages/adminwisataedit.vue') }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
