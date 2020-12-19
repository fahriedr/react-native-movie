import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {TextInput} from 'react-native-paper';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faSearch} from '@fortawesome/free-solid-svg-icons';

export class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
    };
  }

  handlerChange = (e) => {
    this.setState({
      query: e.target.value,
    });
    this.props.data(this.state.query);
  };

  render() {
    const judul = this.props.judul;
    // console.log(this.state.query);

    return (
      <View style={style.header}>
        <View style={style.headerContent}>
          <Text style={style.headerText}>{judul}</Text>
        </View>
      </View>
    );
  }
}

const style = StyleSheet.create({
  header: {
    width: '100%',
    height: 60,
    backgroundColor: '#0a0a19',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
  headerContent: {
    margin: 10,
  },
  headerText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 5,
    fontFamily: 'Montserrat-Regular',
  },
});

export default Header;
