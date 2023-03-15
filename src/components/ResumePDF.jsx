import React from 'react';
import { Page, Document, StyleSheet } from '@react-pdf/renderer';
import PersonalDetails from './PDFViews/PersonalDetails';
import PDFSection from './PDFSection';

const PdfDocument = ({ user }) => {
  const { personalDetails, education, skills, experience, projects } = user;
  const styles = StyleSheet.create({
    page: {
      fontSize: 12,
      paddingVertical: 30,
      paddingHorizontal: 40,
      display: 'grid',
      gap: 10,
    },
  });

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <PersonalDetails personalDetails={personalDetails} />
        <PDFSection sectionTitle="EDUCATION" sectionContent={education} />
        <PDFSection sectionTitle="SKILLS" sectionContent={skills} />
        <PDFSection sectionTitle="EXPERIENCE" sectionContent={experience} />
        <PDFSection sectionTitle="PROJECTS" sectionContent={projects} />
      </Page>
    </Document>
  );
};

export default PdfDocument;
