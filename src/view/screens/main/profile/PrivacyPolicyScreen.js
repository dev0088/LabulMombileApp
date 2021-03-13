import React, { useState } from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import TitleText from 'view/components/TitleText';
import { em } from 'view/common/const';
import Accordion from 'react-native-collapsible/Accordion';
import CommentText from '../../../components/CommentText';
import FriendCommonHeader from '../../../components/CommentText';
import CommonHeader from '../../../components/CommonHeader';

const sections = [
  { title: 'Politique de confidentialité1', content: '' },
  {
    title: 'Politique de confidentialité2',
    content:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna.',
  },
  { title: 'Politique de confidentialité3', content: '' },
  { title: 'Politique de confidentialité4', content: '' },
  { title: 'Politique de confidentialité5', content: '' },
  { title: 'Politique de confidentialité', content: '' },
];

const PrivacyPolicyScreen = () => {
  const [activeSections, setActiveSections] = useState([]);
  const _renderHeader = (section,index,isActive) => {
    console.log(isActive)
    
    
    return (
      <View style={styles.header}>
        <Text style={styles.headerText}>{section.title}</Text>
        <Image style={styles.arrowDown} />
      </View>
    );
  };
  const _renderContent = (section) => {
    return (
      <View style={styles.content}>
        <CommentText style={styles.contentText} text={section.content} />
      </View>
    );
  };

  const _updateSections = (index) => {
    
    setActiveSections(index);
  };
  return (
    <ScrollView style={styles.container}>
      <CommonHeader dark={true} />
      <TitleText text="Politique de confidentialité" style={styles.title} />
      <View style={styles.line} />
      <Accordion
        sections={sections}
        activeSections={activeSections}
        renderHeader={(isActive) => _renderHeader(isActive)}
        renderContent={_renderContent}
        onChange={_updateSections}
        sectionContainerStyle={styles.sectionStyle}
      />
    </ScrollView>
  );
};

const styles = {
  container: {
    backgroundColor: '#FFFFFF',
  },
  title: {
    lineHeight: 38 * em,
    width: 231 * em,
    textAlign: 'left',
    marginLeft: 30 * em,
    paddingBottom: 35 * em,
  },
  line: {
    height: 10 * em,
    backgroundColor: '#F0F5F7',
  },
  sectionStyle: {
    paddingVertical: 10 * em,
    borderBottomWidth: 10 * em,
    borderBottomColor: '#F0F5F7',
    paddingHorizontal: 30 * em,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15 * em,
  },
  headerText: {
    width: 260 * em,

    fontSize: 24 * em,
    lineHeight: 29 * em,
    textAlign: 'left',
    color: '#1E2D60',
  },
  arrowDown: {
    backgroundColor: 'gray',
    width: 18 * em,
    height: 11 * em,
    marginTop: 8 * em,
  },
  contentText: {
    textAlign: 'left',
    lineHeight: 25 * em,
    marginBottom: 10 * em,
  },
};

export default PrivacyPolicyScreen;
