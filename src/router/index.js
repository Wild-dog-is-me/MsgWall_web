import {
	createRouter,
	createWebHashHistory
} from "vue-router";


const routes = [{
	path: '/',
  redirect:'wall',
	name: 'index',
	component: () =>
		import('../views/YikeIndex'),
  children:[
    {
      path:'wall',
      component:()=>import('../views/WallMessage')
    }
  ]
}]

const router = createRouter({
	history: createWebHashHistory(),
	routes,
})

export default router;
