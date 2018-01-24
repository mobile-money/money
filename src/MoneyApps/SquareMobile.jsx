import React, { Component } from 'react';

class SquareMobile extends Component {
  render() {
    return (
      <div className="card card-primary">
        <div className="card-header">
          <h3 className="card-title">Square Cash App</h3>
        </div>
        <div className="card-block">
          <h4>Use the <a href="https://cash.me/">Square Cash</a> app and send money to my $Cashtag: <a className="cashtag-link" href="https://cash.me/$garrettheath4"><code>$garrettheath4</code></a>. This is my preferred way to send and receive money.</h4>
          <a href="https://cash.me/app/KDCNDTC" className="btn appstore appstore-ios">Download iOS app</a>
          <a href="https://cash.me/app/KDCNDTC" className="btn appstore appstore-android">Download Android app</a>
          <h5>If you haven't signed up to use the Square Cash app before, you can use this referral code when you sign up and we'll both get $10: <a href="https://cash.me/app/KDCNDTC"><code>KDCNDTC</code></a></h5>
        </div>
      </div>
    );
  }
}

export default SquareMobile;
