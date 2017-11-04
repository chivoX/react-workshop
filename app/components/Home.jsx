import React from 'react'
import PropTypes from 'prop-types'

export default class Home extends React.Component {

  static propTypes = {
    title: PropTypes.string.isRequired,
    onTranslateTitle: PropTypes.func.isRequired
  }

  render() {
    const {title, onTranslateTitle } = this.props;
    return(
      <div>
      <a href="http://brunch.io"><img src="http://brunch.io/images/logo.png" alt="Brunch"/></a>
      <p>{title}</p>
      <div id="content">
      <h5>Time to <a href="https://facebook.github.io/react/">React</a>.</h5>
      <button onClick={onTranslateTitle}>Translate</button>
      </div>
      </div>
    )
  }
}


