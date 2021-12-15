import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import TodoList from "./components/TodoList";
import StaticTodoList from "./components/StaticTodoList";

function App() {
  return (
      <Router>
          <div className="App">
              <nav>
                  <Link to="/">Home</Link>
                  <Link to="/done">Done</Link>
                  <Link to="/undone">Undone</Link>
              </nav>

              <Switch>
                  <Route exact path="/done">
                      <StaticTodoList isDone={true}/>
                  </Route>
                  <Route exact path="/undone">
                      <StaticTodoList isDone={false}/>
                  </Route>
                  <Route exact path="/">
                      <TodoList />
                  </Route>
              </Switch>
          </div>
      </Router>
  );
}

export default App;
