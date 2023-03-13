import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import FormWizard from './components/FormWizard';
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

  render() {
    return (
      <div className={styles.app}>
        <header>
          <div className={styles.logo}>cv generator</div>
        </header>
        <main>
          <FormWizard
            user={this.state.user}
            handleInputChange={this.handleInputChange}
            addItem={this.addItem}
            deleteItem={this.deleteItem}
          />
          <div className={styles.preview}>
            <h1>Preview</h1>
          </div>
        </main>
      </div>
    );
  }
}

export default App;
