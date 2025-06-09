const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: 'pessoas/form', component: () => import('pages/pessoas/CreateEditPessoa.vue') }, 
      // adicionando nova rota para nova página path= caminho e import é pág q criamos vai estar em 
      // http://localhost:9000/pessoas/form
      { path: '', component: () => import('pages/IndexPage.vue') },
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
