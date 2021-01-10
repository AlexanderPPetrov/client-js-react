import Home from './pages/Home';
import Products from './pages/Products';
import DefaultLayout from './layouts/Default';
import Contact from './pages/Contact';
import Movies from './pages/Movies';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

const routes = [
  {
    path: '/',
    exact: true,
    main: () => <DefaultLayout>
      <Movies></Movies>
    </DefaultLayout>
  },
  {
    path: '/products',
    main: () => <DefaultLayout>
      <Products></Products>
    </DefaultLayout>
  },
  {
    path: '/contact',
    main: () => <DefaultLayout>
      <Contact></Contact>
    </DefaultLayout>
  },
  {
    path: '/example',
    main: () => <DefaultLayout>
      <Home></Home>

    </DefaultLayout>
  },
]

const getRoutes = () => {
  const routeComponents = routes.map((route, index) => {
    return <Route
      key={index}
      exact={route.exact}
      path={route.path}
    >
      {route.main}
    </Route>
  })
  return routeComponents
}


function App() {
  return (
    <Router>
        <Switch>
          {getRoutes()}
        </Switch>
    </Router>
  );
}

export default App;
