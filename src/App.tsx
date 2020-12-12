import React from "react";
import { Route, Router, Switch } from "react-router";
import { createBrowserHistory } from "history";
import { Page } from "./components/elements/page/page";
import { Header } from "./components/header";
import { Home } from "./containers/home";
import { Footer } from "./components/footer";
import { AddCar } from "./containers/add-car";

function App() {
  const history = createBrowserHistory();
  return (
    <div className="App">
      <Router history={history}>
        <Page>
          <Header />
          <Switch>
            <Route path="/add-car" component={AddCar} exact />
            <Route path="/" component={Home} />
          </Switch>
          <Footer />
        </Page>
      </Router>
    </div>
  );
}

export default App;
