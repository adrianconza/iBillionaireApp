import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.row}>
          <View style={styles.formGroup}>
            <Text>Username</Text>
            <TextInput
              style={styles.textInput}
              placeholder='email@email.com'
              underlineColorAndroid='#fff'
              keyboardType='email-address'
              // onChangeText={(text) => this.setState({text})}
              // value={this.state.text}
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
              // onChangeText={(text) => this.setState({text})}
              // value={this.state.text}
            />
          </View>
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
  row: {
    flexDirection: 'row'
  },
  formGroup: {
    flex: 1,
    justifyContent: 'flex-start',
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
