import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Login from "./Components/Login";
import { UserStorage } from "./Contexts/UserContext";

import GlobalStyle from "./StyledComponents/GlobalStyle";
import Reset from "./StyledComponents/Reset";

function App() {
  return (
    <>
      <Reset />
      <GlobalStyle />
      <Router>
        <UserStorage>
          <Header />
          <Switch>
            <Route path="/login" component={Login} />

            <Route exact path="/" component={Home} />
          </Switch>
          <Footer />
        </UserStorage>
      </Router>
    </>
  );
}

export default App;
