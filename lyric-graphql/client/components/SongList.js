import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import { Link } from 'react-router';
import query from '../queries/fetchSongs';

class SongList extends Component {
  renderSongs() {

    return (
      <Link>
        {title}
      </Link>
    )
  }
}

export default graphql(
  graphql(query)(SongList)
);
