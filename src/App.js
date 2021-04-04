import logo from './logo.svg';
import './App.css';
import {Fragment} from "react";
import Title from "./Components/title/title";
import ToDo from "./Redux/containers/todo/todo";

function App() {
  return (
    <Fragment>

      <Title title="ToDo App" />
      <ToDo />
    </Fragment>


  );
}

export default App;
