import Login from "./components/Login/Login";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import User from "./components/User/User";

import "./App.css";
import { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Invoice from "./components/Invoices/Invoice";

function App() {
  const [user, setUser] = useState({});
  const [isLogged, setIsLogged] = useState(false);

  return (
    <Router>
      <div className="App">
        {isLogged ? (
          <div>
            <Navbar />
            <p>User is Logged. Hi {user.name}</p>
          </div>
        ) : (
          <Login setIsLogged={setIsLogged} setUser={setUser} />
        )}

        <Switch>
          {isLogged && (
            <>
              <Route path="/user">
                <User user={user} />
              </Route>
              <Route path="/invoice">
                <Invoice />
              </Route>
            </>
          )}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
