// import logo from './logo.svg';
import './App.css';
// * with export --> import with {}
import { x as num1, y, moduleFunc } from './module'

// * with export default --> import without {}
// * not required to import (default) with same name
import exportDefault from './module';

function App() {
  return (
    <div className="App">
      {/* ied (name of the folder refers to Import - export - default) */}
      HELLO REACT
      <h2> X Value from Module File : "{num1}" </h2>
      <h2> Y Value from Module File : "{y}" </h2>
      <h2>Sum of X and Y = {num1 + y}</h2>
      {moduleFunc()}
      {exportDefault()}
    </div>
  );
}

export default App;
