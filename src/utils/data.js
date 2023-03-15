import { v4 as uuidv4 } from 'uuid';

const getInitalObjectState = () => {
  return {
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
};

const getSampleData = () => {
  return {
    personalDetails: {
      firstName: 'Charlie',
      lastName: 'Kelmeckis',
      email: 'wallflower24@gmail.com',
      phoneNumber: '000-123-4567',
      linkedin: 'charlie-kelmeckis',
      github: 'wallflower24',
      website: 'wallflower.me',
    },
    education: [
      {
        id: uuidv4(),
        degree: 'B.S. in Computer Science',
        university: 'Penn State University',
        startDate: 'Sept 2012',
        endDate: 'May 2016',
      },
    ],
    skills: [
      { id: uuidv4(), skillValue: 'C' },
      { id: uuidv4(), skillValue: 'C++' },
      { id: uuidv4(), skillValue: 'JavaScript' },
      { id: uuidv4(), skillValue: 'Python' },
      { id: uuidv4(), skillValue: 'HTML' },
      { id: uuidv4(), skillValue: 'CSS' },
      { id: uuidv4(), skillValue: 'React' },
    ],
    experience: [
      {
        id: uuidv4(),
        role: 'Software Engineer',
        company: 'Petflix',
        startDate: 'May 2020',
        endDate: 'Present',
        description:
          'Designed RESTful APIs for data retrieval and processing\nImplemented CI/CD pipelines ensuring seamless integration and deployment of code changes across multiple environments\nWorked closely with product and design teams to ensure seamless integration of new features',
      },
      {
        id: uuidv4(),
        role: 'Software Engineering Intern',
        company: 'Fake Data Coorp',
        startDate: 'May 2016',
        endDate: 'Aug 2016',
        description:
          'Designed and implemented new features to improve user experience, resulting in a 20% increase in user engagement\nWorked on database migration project, ensuring smooth transition to new database management system',
      },
    ],
    projects: [
      {
        id: uuidv4(),
        name: 'E-commerce Website',
        technologiesUsed: 'React, Firebase, Git',
        description:
          'Implemented a secure payment gateway using Stripe API\nIntegrated Firebase for user authentication',
      },
      {
        id: uuidv4(),
        name: 'Personal Finance Tracker',
        technologiesUsed: 'Python, Firebase,Git',
        description:
          'Created data visualizations to help users understand their spending habits\nImplemented user authentication and authorization',
      },
    ],
  };
};

export { getInitalObjectState, getSampleData };
