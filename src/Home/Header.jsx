import React from 'react';

export default function Header(props) {
  return (
    <header {...props}>
      <div className="header-content">
        <h1>
          <a>
            <span>Neuro Bangla</span>
          </a>
          <span>Innovating AI for Enterprises</span>
        </h1>
      </div>
    </header>
  );
}
