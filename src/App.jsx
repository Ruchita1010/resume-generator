import React, { useState } from 'react';
import { pdf } from '@react-pdf/renderer';
import { saveAs } from 'file-saver';
import FormWizard from './components/FormWizard';
import Preview from './components/Preview';
import ResumePDF from './components/ResumePDF';
import { getInitalObjectState, getSampleData } from './utils/data';
import styles from './styles/App.module.css';

const App = () => {
  const initialState = getInitalObjectState();
  const [user, setUser] = useState(() => initialState);

  const handleInputChange = (e, field, category, id) => {
    const inputValue = e.target.value;
    let newValue =
      category === 'personalDetails'
        ? { ...user[category], [field]: inputValue }
        : user[category].map((item) =>
            item.id === id ? { ...item, [field]: inputValue } : item
          );
    setUser({
      ...user,
      [category]: newValue,
    });
  };

  const addItem = (category, newItem) => {
    setUser({
      ...user,
      [category]: [...user[category], newItem],
    });
  };

  const deleteItem = (category, id) => {
    if (user[category].length === 1) {
      return;
    }
    setUser({
      ...user,
      [category]: user[category].filter((item) => item.id !== id),
    });
  };

  const getFilename = ({ firstName, lastName }) =>
    lastName && firstName ? `${firstName}-${lastName}.pdf` : 'resume.pdf';

  const generatePDF = async () => {
    try {
      const { personalDetails } = user;
      const blob = await pdf(<ResumePDF user={user} />).toBlob();
      const filename = getFilename(personalDetails);
      saveAs(blob, filename);
    } catch (error) {
      console.error(`Error generating PDF: ${error}`);
    }
  };

  const loadSampleData = () => {
    const sampleData = getSampleData();
    setUser(sampleData);
  };

  const reset = () => {
    setUser(initialState);
  };

  return (
    <div className={styles.app}>
      <header>
        <img
          src="https://img.icons8.com/carbon-copy/40/1f1f1f/resume.png"
          alt="A document with a person profile along with some text representing resume"
        />
        <div className={styles.button_menu}>
          <button onClick={reset}>Reset</button>
          <button onClick={loadSampleData}>Sample</button>
          <button onClick={generatePDF}>Generate PDF</button>
        </div>
      </header>
      <main>
        <FormWizard
          user={user}
          handleInputChange={handleInputChange}
          addItem={addItem}
          deleteItem={deleteItem}
        />
        <div className={styles.preview_container}>
          <Preview user={user} />
        </div>
      </main>
    </div>
  );
};

export default App;
