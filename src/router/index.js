import {
	createRouter,
	createWebHashHistory
} from "vue-router";


const routes = [{
	path: '/',
	name: 'index',
	component: () =>
		import('../views/YikeIndex')
}]

const router = createRouter({
	history: createWebHashHistory(),
	routes,
})

export default router;
