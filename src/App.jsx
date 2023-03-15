import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { pdf } from '@react-pdf/renderer';
import { saveAs } from 'file-saver';
import FormWizard from './components/FormWizard';
import Preview from './components/Preview';
import ResumePDF from './components/ResumePDF';
import styles from './styles/App.module.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: {
        personalDetails: {
          firstName: '',
          lastName: '',
          email: '',
          phoneNumber: '',
          linkedin: '',
          github: '',
          website: '',
        },
        education: [
          {
            id: uuidv4(),
            degree: '',
            university: '',
            startDate: '',
            endDate: '',
          },
        ],
        skills: [{ id: uuidv4(), skillValue: '' }],
        experience: [
          {
            id: uuidv4(),
            role: '',
            company: '',
            startDate: '',
            endDate: '',
            description: '',
          },
        ],
        projects: [
          { id: uuidv4(), name: '', technologiesUsed: '', description: '' },
        ],
      },
    };
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

  render() {
    return (
      <div className={styles.app}>
        <header>
          <div className={styles.logo}>cv generator</div>
          <button onClick={this.generatePDF}>Generate PDF</button>
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
