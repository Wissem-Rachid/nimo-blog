import Home from './Home';
import Create from './Create';
import Navbar from './Navbar';
import NotFound from './NotFound';
import BlogDetails from './BlogDetails';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  /*const title = 'Welcome to the new blog';
  const likes = 50;
  const person = { name: 'eren', age: 25};
*/
  return (
    <Router>
    <div className="App">
      <Navbar />
     <div className="content">
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/create">
          <Create />
        </Route>
        <Route path="/blogs/:id">
          <BlogDetails  />
        </Route>
        <Route path="*">
          <NotFound  />
        </Route>
      </Switch>
      
     </div>
    </div>
    </Router>
  );
}

export default App;
