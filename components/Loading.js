import React from 'react'
import PropTypes from 'prop-types'
import {
  StyleSheet,
  ActivityIndicator,
  View
} from 'react-native';

const Loading = () => (
  <View style={styles.container}>
    <ActivityIndicator size='large'/>
  </View>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export default Loading
