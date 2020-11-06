import React, {Component} from 'react';
import AsyncStorage from '@react-native-community/async-storage';

class AsyncStorageModel extends Component {
  constructor() {
    super();
    this.state = {
      id: null,
      poster: '',
      title: '',
    };
  }

  getData = async (id) => {
    const key = id + '';
    try {
      const data = await AsyncStorage.getItem(key);
      if (data !== null) {
        return true;
      } else {
        return false;
      }
    } catch (error) {
      return error;
    }
  };

  getAllData = async () => {
    let movies = [];
    try {
      movies = await AsyncStorage.getAllKeys();
      return movies;
    } catch (error) {
      return error;
    }
  };

  saveData = async (id, title, poster) => {
    const key = id + '';
    const data = {
      title: title,
      poster: poster,
    };

    try {
      await AsyncStorage.setItem(key, JSON.stringify(data));
    } catch (e) {
      return e;
    }
  };

  deleteData = async (id) => {
    const key = id + '';
    try {
      await AsyncStorage.removeItem(key);
    } catch (exception) {
      return exception;
    }
  };

  deleteAllData = async () => {
    try {
      this.getAllData().then((response) => {
        let keys = [];
        keys = response;
        AsyncStorage.multiRemove(keys);
      });
    } catch (error) {
      console.log(error);
    }
  };
}

const Asm = new AsyncStorageModel();

export default Asm;
