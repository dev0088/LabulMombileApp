import React, { useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import TitleText from 'view/components/text/TitleText';
import { em, hm } from 'view/common/const';
import Accordion from 'react-native-collapsible/Accordion';
import CommentText from 'view/components/text/CommentText';
import CommonHeader from 'view/components/header/CommonHeader';
import { RightArrow, LeftArrow } from 'assets/svg/icons';
const sections = [
  { title: 'Politique\nde confidentialité', content: '' },
  {
    title: 'Politique\nde confidentialité',
    content:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna.',
  },
  { title: 'Politique\nde confidentialité', content: '' },
  { title: 'Politique\nde confidentialité', content: '' },
  { title: 'Politique\nde confidentialité', content: '' },
  { title: 'Politique\nde confidentialité', content: '' },
];

const PrivacyPolicyScreen = () => {
  const [activeSections, setActiveSections] = useState([]);
  const _renderHeader = (section, index, isActive) => {
    const Arrow = !isActive ? (
      <View style={{ transform: [{ rotate: '-90deg' }] }}>
        <LeftArrow width={11 * em} height={18 * em} />
      </View>
    ) : (
      <View style={{ transform: [{ rotate: '-90deg' }] }}>
        <RightArrow width={11 * em} height={18 * em} />
      </View>
    );
    return (
      <View style={styles.header}>
        <Text style={styles.headerText}>{section.title}</Text>
        {Arrow}
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
      <CommonHeader dark style={{ marginTop: 27 * hm, marginBottom: 10 * hm }} />
      <TitleText text={'Politique\nde confidentialité'} style={styles.title} />
      <View style={styles.line} />
      <Accordion
        sections={sections}
        activeSections={activeSections}
        renderHeader={_renderHeader}
        renderContent={_renderContent}
        onChange={_updateSections}
        sectionContainerStyle={styles.sectionStyle}
      />
    </ScrollView>
  );
};

const styles = {
  container: { backgroundColor: '#FFFFFF' },
  title: {
    lineHeight: 38 * em,
    textAlign: 'left',
    marginLeft: 30 * em,
    paddingBottom: 35 * hm,
  },
  line: { height: 10 * em, backgroundColor: '#F0F5F7' },
  sectionStyle: {
    paddingVertical: 10 * hm,
    borderBottomWidth: 10 * em,
    borderBottomColor: '#F0F5F7',
    paddingHorizontal: 30 * em,
  },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start' },
  headerText: { width: 260 * em, fontSize: 24 * em, lineHeight: 29 * em, textAlign: 'left', color: '#1E2D60' },
  contentText: { textAlign: 'left', lineHeight: 25 * em, marginBottom: 10 * hm },
};

export default PrivacyPolicyScreen;
