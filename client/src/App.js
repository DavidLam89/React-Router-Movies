import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      savedList: []
    };
  }

  containsObject = (obj, list) => {
    var i;
    for (i = 0; i < list.length; i++) {
        if (JSON.stringify(list[i]) === JSON.stringify(obj)) {
            return true;
        }
    }
    return false;
  };

  addToSavedList = movie => {
    const savedList = this.state.savedList;
    if (!this.containsObject(movie,savedList)) savedList.push(movie);
    this.setState({ savedList });
  };

  render() {
    return (
      <div>
        <SavedList list={this.state.savedList} />
        <Route path="/" exact component={MovieList} />
        <Route path="/movies/:id" render={(props) => <Movie {...props} addToSavedList={this.addToSavedList} />} />
      </div>
    );
  }
}
