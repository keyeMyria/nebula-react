import { createElement as E } from 'react'
import T from 'prop-types'

import { classNames } from '../../utils/'

const initial = 'c-modal'

const Wrapper = ({ node, className, isOpen, children, ...rest }) =>
  E(
    node || 'div',
    {
      className: classNames(initial, { 'is-open': isOpen }, className),
      ...rest
    },
    children
  )

Wrapper.propTypes = {
  node: T.string,
  className: T.string,
  isOpen: T.bool,
  children: T.node.isRequired
}

export default Wrapper
