import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

class Title extends PureComponent {
  static propTypes = {
    content: PropTypes.string.isRequired,
  }

  render() {
    return(
      <h1 className={this.classNames()}>
        { this.props.content }
      </h1>
    )
  }
}

export default Title
