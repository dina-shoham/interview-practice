import './App.css';
import Folder from './components/Folder'

function App() {

  const data = require('./data/data.json').folder;
  console.log(data);

  return (
    <div className="App">
      <h1>Folder Hierarchy UI</h1>
      <div>
        <Folder fileTree={data}/>
      </div>
    </div>
  );
}

export default App;
