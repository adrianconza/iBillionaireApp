import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Actions } from 'react-native-router-flux'
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Alert
} from 'react-native';

import * as actions from './actionsReducer/loginActions'

class Login extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      username: 'testus7@gmail.com',
      password: 'Test1234'
    }

    this.login = this.login.bind(this)
  }

  async login() {
    await this.props.actions.login(this.state.username, this.state.password)

    console.log(this.props.token)
    console.log(this.props.message)

    if(this.props.message) {
      Alert.alert('Error', this.props.message)
      this.setState({
        username: 'testus7@gmail.com',
        password: 'Test1234'
      })
    }
    else Actions.list()
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>iBillionarie</Text>
        <View style={styles.row}>
          <View style={styles.formGroup}>
            <Text>Username</Text>
            <TextInput
              style={styles.textInput}
              placeholder='email@email.com'
              underlineColorAndroid='#fff'
              keyboardType='email-address'
              onChangeText={value => this.setState({ username : value })}
              value={this.state.username}
            />
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.formGroup}>
            <Text>Password</Text>
            <TextInput
              style={styles.textInput}
              placeholder='********'
              underlineColorAndroid='#fff'
              secureTextEntry={true}
              onChangeText={value => this.setState({ password : value })}
              value={this.state.password}
            />
          </View>
        </View>
        <View style={styles.row}>
          <TouchableOpacity
            style={styles.button}
            onPress={this.login}
          >
            <Text> Login </Text>
          </TouchableOpacity>
        </View>
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

Login.defaultProps = {
  token: '',
  message: ''
}

Login.propTypes = {
  token: PropTypes.string,
  message: PropTypes.string,
  actions: PropTypes.objectOf(PropTypes.func).isRequired,
}

function mapStateToProps (state) {
  return {
    token: state.login.token,
    message: state.login.message
  }
}

function mapDispatchProps (dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchProps)(Login)
