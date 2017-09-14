import { Component, createElement as E } from 'react'
import T from 'prop-types'

import { classNames } from '../../utils/'

class ModalOverlay extends Component {
  componentDidMount() {
    this.context.handleModalOverlayMount(this.props.clickToClose)
  }

  render() {
    const {
      clickToClose,
      className, tag, ...rest
    } = this.props
    return E(
      tag || 'button',
      {
        className: classNames('c-modal__overlay', className),
        'aria-hidden': true,
        onClick: this.props.clickToClose && this.context.closeModal,
        tabIndex: -1,
        ...rest
      }
    )
  }
}

ModalOverlay.propTypes = {
  className: T.string,
  clickToClose: T.bool,
  tag: T.string
}

ModalOverlay.contextTypes = {
  closeModal: T.func.isRequired,
  handleModalOverlayMount: T.func.isRequired
}

export default ModalOverlay