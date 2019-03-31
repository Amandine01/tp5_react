import React, { Component } from 'react';

export default class Album extends Component {
  render() {
    return (
      <article>
        <figure>
          <img src={this.props.image} alt="album" />
          <figcaption>{this.props.nom}</figcaption>
        </figure>
        <div class="artist">{this.props.artist}</div>
        <div class="count">{this.props.song} songs</div>
      </article>
    );
  }
}
