import React, { Component } from 'react';
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
        education: [{ degree: '', university: '', startDate: '', endDate: '' }],
        skills: [''],
        experience: [
          {
            role: '',
            company: '',
            startDate: '',
            endDate: '',
            description: '',
          },
        ],
        projects: [{ name: '', technologies: '', description: '' }],
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

  updateObjectInArray = (field, category, inputValue, currentIndex) => {
    const { user } = this.state;
    return user[category].map((item, index) => {
      if (currentIndex === index) {
        return {
          ...item,
          [field]: inputValue,
        };
      }
      return item;
    });
  };

  updateArray = (category, inputValue, currentIndex) => {
    const { user } = this.state;
    return user[category].map((item, index) =>
      index === currentIndex ? (item = inputValue) : item
    );
  };

  handleInputChange = (e, field, category, index) => {
    const inputValue = e.target.value;
    const { user } = this.state;
    let newValue = null;
    if (category === 'personalDetails') {
      newValue = this.updateObject(field, category, inputValue);
    } else if (category === 'skills') {
      newValue = this.updateArray(category, inputValue, index);
    } else {
      newValue = this.updateObjectInArray(field, category, inputValue, index);
    }
    this.setState({
      user: {
        ...user,
        [category]: newValue,
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
