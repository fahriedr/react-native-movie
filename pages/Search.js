import React, {Component} from 'react';
import {View, Text} from 'react-native';
import Header from '../components/Header';

export class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
    };
  }

  update(value) {
    return () => {
      this.setState({
        query: value,
      });
    };
  }

  render() {
    console.log(this.state.query);
    return (
      <View>
        <Header judul={null} data={this.update.bind(this)} />
      </View>
    );
  }
}

export default Search;
