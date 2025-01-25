import logo from './logo.svg';
import './App.css';
import Application from './Tests/RTL/RTL Queries/Application.js';
import Counter from './Tests/RTL/Interactions/Counter.js';
import Users from './Tests/RTL/Mocking HTTP Request/Users.js';
function App() {
  return (<>
    <div className="App">
      {/* <Application /> */}
      {/* <Counter/> */}
      <Users />
    </div>
  </>
  );
}

export default App;
