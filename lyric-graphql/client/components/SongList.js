import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import { Link } from 'react-router';
import query from '../queries/fetchSongs';

class SongList extends Component {
  renderSongs() {
    return this.props.data.songs.map(({ id, title }) => {
      return (
        <li key={id} className="collection-item">
          <Link to={`/songs/${id}`}>
            {title}
          </Link>
          <i
            className="material-icons"
            onClick={()}
          >

        </i>
      );
    });
  }

  render() {
    if ()

    return (
      <div>
        <ul className="collection">
          {this.renderSongs()}
        </ul>
    );
  }
}

export default graphql(
  graphql(query)(SongList)
);
