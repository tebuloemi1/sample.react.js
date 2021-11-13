import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { NavigationBar } from './components/NavigationBar';

function App() {
  return (
    <React.Fragment>
  <Router>
    <Navibar />
  </Router>
</React.Fragment>
  );
}

export default App;
