import './styles/app.css';
import FormWizard from './components/FormWizard';

function App() {
  return (
    <div className="app">
      <header>
        <div className="logo">cv generator</div>
      </header>
      <main>
        <FormWizard />
        <div className="preview">
          <h1>Preview</h1>
        </div>
      </main>
    </div>
  );
}

export default App;
