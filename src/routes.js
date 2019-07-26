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
      { path: '/setting', component: './Setting/Setting' },
    ],
  },
];

module.exports = routes;
