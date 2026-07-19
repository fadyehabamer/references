// * Component --> UpperCase
import Child1 from './components/child1'
import './App.css';

// * Arrow Function
const Arrowfunction = () => {
  return (
    <h3> HI FROM ARROW FUNCTION </h3>
  )
}

function App() {
  return (
    <div className="App" >
      <Child1 />
      <Arrowfunction />
    </div>
  );
}

export default App;
