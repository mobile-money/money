import React, { Component } from 'react';
import MoneyApp from './MoneyApp';
import AppleButton from './AppStore/AppleButton';
import AndroidButton from './AppStore/AndroidButton';

class FbMessenger extends Component {
  render() {
    return (
      <MoneyApp title="Facebook Messenger" priority="low">
        <div>Facebook Messenger now has secure payments built in. To send me money, <a href="http://fb.com/msg/garrettheath4">start a conversation with me</a> in Messenger and click the <code>$ Payments</code> button. You might have to click the <code>… Show More</code> button first to find the <code>$ Payments</code> button.</div>
        <div>
          <a href="https://www.messenger.com/" className="btn btn-secondary" role="button">Messenger Web App</a>
        </div>
        <div>
          <AppleButton href="https://itunes.apple.com/us/app/messenger/id454638411?mt=8"/>
          <AndroidButton href="https://play.google.com/store/apps/details?id=com.facebook.orca&amp;hl=en"/>
        </div>
      </MoneyApp>
    );
  }
}

export default FbMessenger;