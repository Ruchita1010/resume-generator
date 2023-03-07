import Stepper from './components/Stepper';
import './styles/app.css';

function App() {
  return (
    <div className="app">
      <header>
        <div className="logo">cv generator</div>
      </header>
      <main>
        <div className="progressive-form-container">
          <Stepper />
          <h1>Form</h1>
        </div>
        <div className="preview">
          <h1>Preview</h1>
        </div>
      </main>
    </div>
  );
}

export default App;
