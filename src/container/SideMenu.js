import React from 'react';

export default class SideMenu extends React.Component {
  render() {
    return (
      <aside>
        <h3>Browse</h3>
        <nav class="browse">
          <ul class="main">
            <li>
              <a class="heavy" href="#">
                Heavy Rotation
              </a>
            </li>
            <li>
              <a class="recent" href="#">
                Recent Activity
              </a>
            </li>
            <li>
              <a class="top" href="#">
                Top Charts
              </a>
            </li>
            <li>
              <a class="new" href="#">
                New Releases
              </a>
            </li>
          </ul>
        </nav>
        <h3>Your music</h3>
        <nav class="music">
          <ul class="main">
            <li>
              <a class="collection" href="#">
                Collection
              </a>
            </li>
            <li>
              <a class="history" href="#">
                History
              </a>
            </li>
          </ul>
        </nav>
      </aside>
    );
  }
}
