import './App.css';
import { AddPageButton } from './page/AddPageButton';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Page Tree
      </header>
      <div>
        <div>
          <div className='placeholder-content'>
            <p>Create a page to get started by clicking the button below.</p>
            <AddPageButton label='Create a page' />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
