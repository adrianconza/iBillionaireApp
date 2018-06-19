import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Alert
} from 'react-native';

import * as actions from './actionsReducer/loginActions'

class List extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>HOLA</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 30
  },
  row: {
    flexDirection: 'row'
  },
  formGroup: {
    flex: 1,
    justifyContent: 'flex-start',
    margin: 10
  },
  button: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    borderRadius: 5,
    margin: 10
  },
  textInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    padding: 5
  }
});

// Login.defaultProps = {
//   token: '',
//   message: ''
// }
//
// Login.propTypes = {
//   token: PropTypes.string,
//   message: PropTypes.string,
//   actions: PropTypes.objectOf(PropTypes.func).isRequired,
// }
//
// function mapStateToProps (state) {
//   return {
//     token: state.login.token,
//     message: state.login.message
//   }
// }
//
// function mapDispatchProps (dispatch) {
//   return {
//     actions: bindActionCreators(actions, dispatch)
//   }
// }

// export default connect(mapStateToProps, mapDispatchProps)(Login)
export default List
