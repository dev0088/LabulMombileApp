import React, { Component } from 'react';
import { StyleSheet, View, Image, TouchableHighlight, ViewPropTypes as RNViewPropTypes, Animated } from 'react-native';
import PropTypes from 'prop-types';
import { em } from 'view/common/const';
import { SelectionOn, SelectionOff, CheckBlue, CheckOff, CheckRed } from 'assets/svg/icons';
const ViewPropTypes = RNViewPropTypes || View.propTypes;

const checkShapeSize = { width: 26 * em, height: 26 * em };
export default class CheckBox extends Component {
  static propTypes = {
    ...ViewPropTypes,
    onClick: PropTypes.func.isRequired,
    isChecked: PropTypes.bool.isRequired,
    disabled: PropTypes.bool,
    shape: PropTypes.string,
    color: PropTypes.string,
  };
  static defaultProps = {
    isChecked: false,
    shape: 'rectangle',
  };
  constructor(props) {
    super(props);
    this.state = {
      fadeAnim: new Animated.Value(1), // Initial value for opacity: 0
      isChecked: false,
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
    // this.setState({ isChecked: !this.state.isChecked });
    this.fadeOut;
  }

  genShape() {
    const CheckTrue = this.props.oval ? CheckOff(checkShapeSize) : SelectionOff(checkShapeSize);
    const CheckFalse = this.props.oval
      ? this.props.red
        ? CheckRed(checkShapeSize)
        : CheckBlue(checkShapeSize)
      : SelectionOn(checkShapeSize);
    return this.props.isChecked ? CheckTrue : CheckFalse;
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
