/**
 * @Author:hgq
 * @Describe:
 */
const routes = [
  {
    path: '/',
    component: '../layouts',
    routes: [
      { path: '/', redirect: '/home' },
      { path: '/home', component: './Home/Home' },
      { path: '/about', component: './About/About' },
    ],
  },
];

module.exports = routes;
