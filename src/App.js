import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from './components/login';
import Register from './components/register';
import ProductListing from './components/productListing';


function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/" exact component={ProductListing} />
          {/* <Route path="/product/:productId" component={ProductDetails} /> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
