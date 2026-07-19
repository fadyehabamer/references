import Col from './components/Col';
import './App.css';

function App() {
  return (
    <div className="App">
      <table>
        <tbody>
          <tr>
            {/* Want here to load a component act as a table column */}
            <Col />
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;
