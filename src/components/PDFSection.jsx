import React from 'react';
import { Text, View, StyleSheet } from '@react-pdf/renderer';
import Education from './PDFViews/Education';
import Experience from './PDFViews/Experience';
import Projects from './PDFViews/Projects';
import Skills from './PDFViews/Skills';

const styles = StyleSheet.create({
  section_title: {
    fontSize: 13,
    borderBottomWidth: 1,
    borderBottomStyle: 'solid',
    borderBottomColor: '#1f1f1f',
  },

  section_content: {
    paddingTop: 6,
    display: 'grid',
    gap: 10,
  },

  skills_preview: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    gap: 10,
    flexWrap: 'wrap',
  },
});

const PDFSection = ({ sectionTitle, sectionContent }) => {
  const getSection = () => {
    switch (sectionTitle) {
      case 'EDUCATION':
        return <Education education={sectionContent} />;
      case 'SKILLS':
        return <Skills skills={sectionContent} />;
      case 'EXPERIENCE':
        return <Experience experience={sectionContent} />;
      case 'PROJECTS':
        return <Projects projects={sectionContent} />;
      default:
        return null;
    }
  };

  return (
    <View>
      <Text style={styles.section_title}>{sectionTitle}</Text>
      {sectionTitle === 'SKILLS' ? (
        <View style={[styles.section_content, styles.skills_preview]}>
          {getSection()}
        </View>
      ) : (
        <View style={styles.section_content}>{getSection()}</View>
      )}
    </View>
  );
};

export default PDFSection;
