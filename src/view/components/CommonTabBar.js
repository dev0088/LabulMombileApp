/* eslint-disable react-native/no-inline-styles */
import React, { Component, useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Animated, ScrollView } from 'react-native';
import PropTypes from 'prop-types';
import { em } from 'view/common/const';
import { TabActions, NavigationContainer } from '@react-navigation/native';
import CommentText from './CommentText';
import { cos } from 'react-native-reanimated';

export default class CommonTabBar extends Component {
  static propTypes = {
    onValueChange: PropTypes.func,
    tabTexts: PropTypes.arrayOf(PropTypes.string),
  };

  static defaultProps = {
    onValueChange: () => null,
  };

  constructor(props) {
    super(props);

    this.state = {
      pos: new Animated.Value(10 * em),
      btnWidth: 0,
      btnHeight: 0,
    };
    this.tabs = React.createRef();
    this.tabContainer = React.createRef();
    this.tabs.current = [];
    this._switchThump = this._switchThump.bind(this);
  }

  _switchThump(index) {
    this.tabs.current[index + 1].measureLayout(this.tabContainer, (fx, fy, width, height) => {
      this.setState({ btnWidth: width, btnHeight: height });
      this.tabContainer.scrollTo({ x: fx, y: fy, animated: true });
      Animated.timing(this.state.pos, {
        toValue: fx,
        duration: this.props.switchSpeedChange || 200,
        useNativeDriver: true,
      }).start();
    });
  }

  render() {
    const { state, descriptors, navigation, position } = this.props;
    return (
      <View style={{marginBottom:25*em,paddingLeft:30*em}}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} ref={(view) => (this.tabContainer = view)}>
          <View style={{ flexDirection: 'row' }}>
            <Animated.View style={{ transform: [{ translateX: this.state.pos }] }}>
              <View
                style={{
                  width: this.state.btnWidth,
                  height: this.state.btnHeight,
                  borderRadius: this.state.btnHeight / 2,
                  backgroundColor: descriptors[state.routes[state.index].key].options.tabColor,
                  top: 0,
                  left: 0,
                  position: 'absolute',
                }}
              />
            </Animated.View>
            {state.routes.map((route, index) => {
              const { options } = descriptors[route.key];
              const label =
                options.tabBarLabel !== undefined
                  ? options.tabBarLabel
                  : options.title !== undefined
                  ? options.title
                  : route.name;
              const isFocused = state.index === index;
              const onPress = () => {
                const event = navigation.emit({
                  type: 'tabPress',
                  target: route.key,
                });

                if (!isFocused && !event.defaultPrevented) {
                  navigation.navigate(route.name, { sort: route.name });
                  this._switchThump(index);
                }
              };
              return (
                <TouchableOpacity
                  accessibilityRole="button"
                  accessibilityState={isFocused ? { selected: true } : {}}
                  accessibilityLabel={options.tabBarAccessibilityLabel}
                  testID={options.tabBarTestID}
                  onPress={onPress}
                  activeOpacity={1}
                  ref={(view) => (this.tabs.current[index + 1] = view)}
                  onLayout={(e) => {
                    if (isFocused) {
                      this.setState({
                        btnWidth: e.nativeEvent.layout.width,
                        btnHeight: e.nativeEvent.layout.height,
                      });
                    }
                  }}
                  style={[
                    switchStyles.textPos,
                    {
                      paddingHorizontal: 14 * em,
                      paddingVertical: 7 * em,
                      marginLeft: 10 * em,
                    },
                  ]}
                  key={route.key}>
                  <CommentText color={!isFocused ? '#6A8596' : '#FFFFFF'} text={label} />
                </TouchableOpacity>
              );
            })}
          </View>
        </ScrollView>
        {this.props.children}
      </View>
    );
  }
}

const switchStyles = StyleSheet.create({
  textPos: {
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 16 * em,
  },
  rtl: {
    flexDirection: 'row-reverse',
  },
  ltr: {
    flexDirection: 'row',
  },
});
