import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { Link } from 'react-router';
import fetchSong from '../queries/fetchSong';

class SongDetail extends Component {
  render() {
    const { song } = this.props.data;

    if (!song) { return <div>Loading...</div>; }
    return ();
  }
}

export default graphql(fetchSong, {
  options: (props) => { return { variables: { id: props.params.id } } }
})(SongDetail);
