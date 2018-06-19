import React from 'react'
import PropTypes from 'prop-types'
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

const ListItem = ({
  id,
  image,
  name,
  description
}) => (
  <View style={styles.container}>
    <Image style={styles.image} source={{uri: image}}/>
    <View style={styles.info}>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.description}>{description}</Text>
    </View>
  </View>
)

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: 10,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 10
  },
  info: {
    flex: 1,
    flexDirection: 'column',
    paddingLeft: 5
  },
  name: {
    color: '#333',
    fontSize: 20,
    marginTop: 5,
    marginBottom: 5,
    textAlign: 'center'
  }
});

ListItem.propTypes = {
  id: PropTypes.number,
  image: PropTypes.string,
  name: PropTypes.string,
  description: PropTypes.string,
}

export default ListItem
