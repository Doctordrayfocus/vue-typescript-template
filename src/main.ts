import AppLayout from "./layouts/AppLayout.vue";
import { createApp } from "vue/dist/vue.esm-bundler.js";
import App from "./App.vue";
import { createRouter, createWebHistory } from "vue-router";
import routes from "./router/routes";
import { createMetaManager } from "vue-meta";

// You can disable this if you dont want TailwindCss
import "./assets/app.css";

import { store, key } from "./store";

const router = Promise.all(routes).then((routes) => {
	const router = createRouter({
		history: createWebHistory(),
		routes,
	});

	router.beforeEach((to, from, next) => {
		if (!to.meta.middlewares) {
			return next();
		}
		const middlewares: any = to.meta.middlewares;
		Object.keys(middlewares).forEach((middleware) => {
			middlewares[middleware]({ to, from, next });
		});
		return next();
	});

	return router;
});

const init = async () => {
	createApp({
		components: {
			App,
		},
	})
		.component("AppLayout", AppLayout)
		.use(await router)
		.use(store, key)
		.use(createMetaManager())
		.mount("#app");
};

init();
