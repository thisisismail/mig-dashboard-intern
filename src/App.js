import "./App.css";
// import { useSelector } from "react-redux";
// import LoginCard from "./component/LoginCard/index";
// import NavBar from "./component/NavBar/index.js";
// import CompanyCardProfile from "./component/CompanyCardProfile";
import PageCompanyDashboard from "./pages/PageCompanyDashboard/index.js";

function App() {
  //take the state from redux
  // const token = useSelector((state) => state.tokenReducer);

  return (
    <div className="App">
      {/* {token} */}
      {/* <LoginCard /> */}
      <PageCompanyDashboard />
    </div>
  );
}

export default App;
