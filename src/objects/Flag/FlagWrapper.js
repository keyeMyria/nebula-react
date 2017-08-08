import { createElement as E } from 'react'
import T from 'prop-types'

import { classNames } from '../../utils/'

const FlagWrapper = ({
 node,
 breakpoint,
 gutter,
 reverse,
 align,
 children,
 className,
  ...rest
}) =>
  E(
    node || 'div',
    {
      className: classNames(
        breakpoint ? `o-flag@${breakpoint}` : 'o-flag',
        gutter ? `o-flag--gutter-${gutter}` : null,
        align ? `o-flag--${align}` : null,
        { 'o-flag--reverse': reverse },
        className
      ),
      ...rest
    },
    children
  )

FlagWrapper.propTypes = {
  node: T.string,
  breakpoint: T.string,
  gutter: T.string,
  reverse: T.bool,
  align: T.string,
  children: T.node,
  className: T.string
}

export default FlagWrapper
