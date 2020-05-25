import MainPage from './pages/MainPage/index';
import Categories from './pages/Categories/index';
import PageNotFound from './pages/404/index';
import FullView from './pages/FullView/index';

const Routes = 
[
    {
        path: "/",
        component: MainPage,
        exact: true
    },
    {
        path: "/Categories",
        component: Categories,
        exact: true
    },
    {
        path: "/movie/:slug",
        component: FullView,
        exact: true
    },
    {
        path: "*",
        component: PageNotFound,
        exact: true
    }
]

export default Routes