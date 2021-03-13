import React, { Component } from 'react';
import { StyleSheet, View, Image, TouchableHighlight, ViewPropTypes as RNViewPropTypes, Animated } from 'react-native';
import PropTypes from 'prop-types';
import { em } from 'view/common/const';

const ViewPropTypes = RNViewPropTypes || View.propTypes;

export default class CheckBox extends Component {
  static propTypes = {
    ...ViewPropTypes,
    onClick: PropTypes.func.isRequired,
    isChecked: PropTypes.bool.isRequired,
    disabled: PropTypes.bool,
    shape: PropTypes.string,
  };
  static defaultProps = {
    isChecked: false,
    shape: 'rectangle',
  };
  constructor(props) {
    super(props);
    this.state = {
      fadeAnim: new Animated.Value(1), // Initial value for opacity: 0
    };
    this.fadeOut = this.fadeOut.bind(this);
  }
  fadeOut() {
    this.setState({ fadeAnim: new Animated.Value(1) }, () => {
      Animated.timing(
        // Animate over time
        this.state.fadeAnim, // The animated value to drive
        {
          toValue: 0, // Animate to opacity: 1 (opaque)
          duration: 2000, // 2000ms
        }
      ).start();
    });
  }
  onClick() {
    this.props.onClick();
    this.fadeOut;
  }

  genShape() {
    let source;
    source = this.props.isChecked ? (
      <View style={styles.checkedShape}>
        <Image source={require('../../assets/images/ic_check.png')} style={styles.iconCheck} />
      </View>
    ) : (
      <View style={styles.unCheckShape} />
    );
    if (this.props.shape === 'oval') {
      source = this.props.isChecked ? (
        <View style={[styles.checkedShape, { borderRadius: 13 * em }]}>
          <Image source={require('../../assets/images/ic_check.png')} style={styles.iconCheck} />
        </View>
      ) : (
        <View style={[styles.unCheckShape, { borderRadius: 13 * em }]} />
      );
    }
    return source;
  }

  render() {
    let { fadeAnim } = this.state;

    return (
      <TouchableHighlight
        style={this.props.style}
        onPress={() => this.onClick()}
        underlayColor="transparent"
        disabled={this.props.disabled}>
        <View style={styles.container}>
          <Animated.View style={{ ...this.props.style, opacity: fadeAnim }}>{this.genShape()}</Animated.View>
        </View>
      </TouchableHighlight>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconCheck: {
    width: 20 * em,
    height: 18 * em,
    resizeMode: 'contain',
  },
  checkedShape: {
    width: 26 * em,
    height: 26 * em,
    backgroundColor: '#40CDDE',
    borderRadius: 8 * em,
    alignItems: 'center',
    justifyContent: 'center',
  },
  unCheckShape: {
    width: 26 * em,
    height: 26 * em,
    backgroundColor: 'transparent',
    borderRadius: 8 * em,
    borderColor: '#A0A4B7',
    borderWidth: 1 * em,
  },
});
