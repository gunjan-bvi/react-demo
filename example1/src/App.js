import React from 'react';
import HeaderContainer from './header/header';
import FooterContainer from "./footer/footer";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <HeaderContainer/>
        <FooterContainer/>
      </div>
    );
  }
}

export default App;
