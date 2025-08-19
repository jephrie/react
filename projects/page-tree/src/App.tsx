import './App.css';
import { Navigator } from './navigation/Navigator';
import { ContentPane } from './pane/ContentPane';
import { StoreProvider } from './store/Store';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        Page Tree
      </header>
      <div className='App-body'>
        <StoreProvider>
          <Navigator />
          <ContentPane />
        </StoreProvider>
      </div>
    </div>
  );
}

export default App;
