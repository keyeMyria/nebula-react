import { Component, createElement as E } from 'react'
import T from 'prop-types'
import { classNames } from '../../utils/'

class NavbarDropdownContent extends Component {
  state = {
    isOpen: false
  }

  componentDidMount() {
    this.animateOpening()
  }

  animateOpening = () => {
    setTimeout(() => {
      this.setState({
        isOpen: true
      })
    }, 0)
  }

  render() {
    const { tag, southWest, children, className, ...rest } = this.props
    return E(
      tag || 'ul',
      {
        className: classNames(
          'c-navbar__dropdown',
          { 'is-open': this.state.isOpen },
          { 'c-navbar__dropdown--south-west': southWest },
          className
        ),
        ...rest
      },
      children
    )
  }
}

NavbarDropdownContent.propTypes = {
  className: T.string,
  southWest: T.bool,
  tag: T.string,
  children: T.node.isRequired
}

export default NavbarDropdownContent
