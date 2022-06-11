import { GraphViewer } from './components/GraphViewer';
import { Visx } from './components/Visx';
import './styles/App.css';
import './styles/index.css';

function App() {
  return (
    <div className="App">
      {/* <Visx width={650} height={650} /> */}
      <GraphViewer />
    </div>
  );
}

export default App;
