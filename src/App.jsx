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
        skills: [],
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

  handleInputChange = (field, category, e) => {
    const { user } = this.state;
    const updatedUser = {
      ...user,
      [category]: {
        ...user[category],
        [field]: e.target.value,
      },
    };
    this.setState({ user: updatedUser });
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
