import "./App.css";
import { useSelector } from "react-redux";
// import { useSelector } from "react-redux";
// import LoginCard from "./component/LoginCard/index";
// import NavBar from "./component/NavBar/index.js";
// import CompanyCardProfile from "./component/CompanyCardProfile";
import PageLogin from "./pages/PageLogin/index.js";
import NavBar from "./component/NavBar/index";

import PageCompanyDashboard from "./pages/PageCompanyDashboard/index.js";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { BrowserRouter } from "react-router-dom";

function App() {
  //take the state from redux
  // const token = useSelector((state) => state.tokenReducer);
  const tokenM = useSelector((state) => state.tokenReducer);
  console.log("hello " + tokenM);
  let i = 100;
  return (
    <div className="App">
      {/* {token} */}
      {/* <LoginCard /> */}
      {/* <PageCompanyDashboard /> */}
      <BrowserRouter>
        <NavBar />
        <Router>
          <Switch>
            <Route path="/" exact>
              {/* <PageLogin /> */}
              <PageCompanyDashboard />
            </Route>
            <Route path="/private">
              {tokenM !== "" ? <PageCompanyDashboard /> : <Redirect to="/" />}
            </Route>
          </Switch>
        </Router>
      </BrowserRouter>
    </div>
  );
}

export default App;
