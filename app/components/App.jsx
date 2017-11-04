import React from 'react';
import Home from './Home';

export default class App extends React.Component {

  // constructor(props) {
  //   super(props);
  //   this.handleTranslateTitle = this.handleTranslateTitle.bind(this);
  // }

  state = {
    title: 'Bon Appetit'
  }

  handleTranslateTitle = () => {
    this.setState({title: 'Buen Provecho'});
  }

  render() {
    const { title } = this.state;

    return (<Home
      title={title}
      onTranslateTitle={this.handleTranslateTitle}
      />);
  }
}
