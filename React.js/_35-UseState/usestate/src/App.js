import './App.css';
import ClassBased from './components/ClassBased';
import Hook from './components/Hook';

function App() {

  return (
    <div className="App">
      <ClassBased type="CLASS BASED COMPONENT" order='1'/>
      <Hook type="FUNCTIONAL COMPONENT"  order='2'/>
    </div>
  );
}

export default App;
