import React, { Component } from 'react';
import { pdf } from '@react-pdf/renderer';
import { saveAs } from 'file-saver';
import FormWizard from './components/FormWizard';
import Preview from './components/Preview';
import ResumePDF from './components/ResumePDF';
import { getInitalObjectState, getSampleData } from './utils/data';
import styles from './styles/App.module.css';

class App extends Component {
  initialState = getInitalObjectState();
  constructor() {
    super();
    this.state = this.initialState;
  }

  updateObject = (field, category, inputValue) => {
    const { user } = this.state;
    return {
      ...user[category],
      [field]: inputValue,
    };
  };

  updateObjectInArray = (field, category, inputValue, id) => {
    const { user } = this.state;
    return user[category].map((item) => {
      if (item.id === id) {
        return {
          ...item,
          [field]: inputValue,
        };
      }
      return item;
    });
  };

  handleInputChange = (e, field, category, id) => {
    const inputValue = e.target.value;
    const { user } = this.state;
    let newValue = null;
    if (category === 'personalDetails') {
      newValue = this.updateObject(field, category, inputValue);
    } else {
      newValue = this.updateObjectInArray(field, category, inputValue, id);
    }
    this.setState({
      user: {
        ...user,
        [category]: newValue,
      },
    });
  };

  addItem = (category, newItem) => {
    const { user } = this.state;
    this.setState({
      user: {
        ...user,
        [category]: [...user[category], newItem],
      },
    });
  };

  deleteItem = (category, id) => {
    const { user } = this.state;
    if (user[category].length === 1) {
      return;
    }
    this.setState({
      user: {
        ...user,
        [category]: user[category].filter((item) => item.id !== id),
      },
    });
  };

  getFilename = ({ firstName, lastName }) =>
    lastName && firstName ? `${firstName}-${lastName}.pdf` : 'resume.pdf';

  generatePDF = async () => {
    try {
      const { personalDetails } = this.state.user;
      const blob = await pdf(<ResumePDF user={this.state.user} />).toBlob();
      const filename = this.getFilename(personalDetails);
      saveAs(blob, filename);
    } catch (error) {
      console.error(`Error generating PDF: ${error}`);
    }
  };

  loadSampleData = () => {
    const sampleData = getSampleData();
    this.setState({
      user: sampleData,
    });
  };

  reset = () => {
    this.setState(this.initialState);
  };

  render() {
    return (
      <div className={styles.app}>
        <header>
          <div className={styles.logo}>cv generator</div>
          <div className={styles.button_menu}>
            <button onClick={this.reset}>Reset</button>
            <button onClick={this.loadSampleData}>Sample</button>
            <button onClick={this.generatePDF}>Generate PDF</button>
          </div>
        </header>
        <main>
          <FormWizard
            user={this.state.user}
            handleInputChange={this.handleInputChange}
            addItem={this.addItem}
            deleteItem={this.deleteItem}
          />
          <div className={styles.preview_container}>
            <Preview user={this.state.user} />
          </div>
        </main>
      </div>
    );
  }
}

export default App;
