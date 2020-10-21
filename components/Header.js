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

    if (judul === null) {
      return (
        <View style={style.header}>
          <View style={style.searchSection}>
            <FontAwesomeIcon icon={faSearch} style={style.icon} size={22} />
            <TextInput
              style={style.input}
              underlineColorAndroid={'rgba(0,0,0,0)'}
              placeholder={'Search here'}
              autoCorrect={false}
              onChange={this.handlerChange}
              onChangeText={(text) => this.setState({query: text})}
            />
          </View>
        </View>
      );
    } else {
      return (
        <View style={style.header}>
          <View style={style.headerContent}>
            <Text style={style.headerText}>{judul}</Text>
          </View>
        </View>
      );
    }
  }
}

const style = StyleSheet.create({
  header: {
    width: '100%',
    height: 60,
    backgroundColor: '#100e2a',
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
  searchSection: {
    alignSelf: 'center',
    marginHorizontal: 28,
    marginVertical: 8,
    height: 40,
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 4,
    paddingRight: 4,
  },
  icon: {
    // backgroundColor: 'blue',
    height: '100%',
    marginLeft: 6,
  },
  input: {
    width: '100%',
    backgroundColor: '#fff',
    padding: 2,
    height: 30,
  },
});

export default Header;
