import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Menu from "./components/Menu/Menu";
import routes from "./routes";

function App() {
  let showContentMenus = (routes) => {
    let result = null;

    if (routes.length > 0) {
      result = routes.map((route, index) => {
        return (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={route.main}
          />
        );
      });
    }

    return <Switch> {result} </Switch>;
  };

  return (
    <BrowserRouter>
      <div className="App">
        <Menu />
        <div className="container">
          <div className="row">{showContentMenus(routes)}</div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
