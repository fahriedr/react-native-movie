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

  getAllData = async () => {
    let movies = [];
    try {
      await AsyncStorage.getAllKeys().then(async (keys) => {
        await AsyncStorage.multiGet(keys).then((key) => {
          key.forEach((data) => {
            movies.push(data);
          });
        });
      });
      return movies;
    } catch (error) {
      return error;
    }
  };

  saveData = async (id, title, poster) => {
    const idData = id.toString();
    const data = {
      id: id,
      title: title,
      poster: poster,
    };

    await AsyncStorage.setItem(idData, JSON.stringify(data));
  };

  deleteData = async (id) => {
    const idData = id.toString();
    try {
      await AsyncStorage.removeItem(idData);
      return 'Movie has been deleted';
    } catch (exception) {
      return exception;
    }
  };

  checkData = async (id) => {
    try {
      const data = await AsyncStorage.getItem(id + '');
      if (data) {
        return true;
      } else {
        return false;
      }
    } catch (error) {
      return error;
    }
  };
}

const Asm = new AsyncStorageModel();

export default Asm;
