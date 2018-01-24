import React, { Component } from 'react';

class SquareWeb extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-header">
          <h3 className="card-title">Cash Website</h3>
        </div>
        <div className="card-block">
          <h4>If you don't want to sign up for a cash app, use this webpage to send me money using your debit card. Payments are sent <a href="https://cash.me/security">securely</a> by Square Cash.</h4>
          <a href="https://cash.me/$garrettheath4" className="btn btn-secondary cashtag-link" role="button">
            <span className="dollars-unknown show">Send me money with the Square Cash website</span>
            <span className="dollars-known hide" hidden>Send me $<span className="dollars-known-amount"></span> with the Square Cash website</span>
          </a>
        </div>
      </div>
    );
  }
}

export default SquareWeb;
