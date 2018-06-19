import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {
  StyleSheet,
  ListView,
  View
} from 'react-native';

import Loading from './components/Loading'
import ListItem from './components/ListItem'

import * as actions from './actionsReducer/listActions'

class List extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      dataSource: new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
    }
  }

  async componentWillMount () {
    await this.props.actions.list(this.props.token)
    this.setState({
       dataSource: this.state.dataSource.cloneWithRows(this.props.list)
     })
  }

  render() {
    return (
      <View style={styles.container}>
        { this.props.loading && <Loading /> }
        <ListView
          dataSource={this.state.dataSource}
          renderRow={item => <ListItem
            key={item.id}
            id={item.id}
            name={item.name}
            description={item.description}
            image={item.thumbnail_150}
          />}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
});

List.defaultProps = {
  list: [],
}

List.propTypes = {
  token: PropTypes.string,
  list: PropTypes.arrayOf(PropTypes.object),
  message: PropTypes.string,
  loading: PropTypes.bool.isRequired,
  actions: PropTypes.objectOf(PropTypes.func).isRequired,
}

function mapStateToProps (state) {
  return {
    token: state.login.token,
    list: state.list.list,
    message: state.list.message,
    loading: state.list.loading
  }
}

function mapDispatchProps (dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchProps)(List)
