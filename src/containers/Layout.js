import React from 'react';

const Layout = (props) => (
  <div>
    <header>
      <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
        <span className='navbar-brand'>{props.header}</span>
      </nav>
    </header>
    <div className='ui container mt-5 p-0'>{props.children}</div>
  </div>
);

export default Layout;
