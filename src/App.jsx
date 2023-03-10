import FormWizard from './components/FormWizard';
import styles from './styles/App.module.css';

function App() {
  return (
    <div className={styles.app}>
      <header>
        <div className={styles.logo}>cv generator</div>
      </header>
      <main>
        <FormWizard />
        <div className={styles.preview}>
          <h1>Preview</h1>
        </div>
      </main>
    </div>
  );
}

export default App;
