import { createElement as E } from 'react'
import T from 'prop-types'

import { NAMESPACE, GRID_FRACTIONS, BLOCK_TAGS } from '../../constants'
import { classNames, buildClassName, buildBreakpointValues } from '../../utils/'

const GridItem = ({
  tag,
  width,
  push,
  pull,
  className,
  children,
  ...rest
}) =>
  E(
    tag || 'div',
    {
      className: classNames(
        `${NAMESPACE}o-grid__item`,
        width
          ? buildClassName(`${NAMESPACE}u-`, width)
          : null,
        push
          ? buildClassName(`${NAMESPACE}u-push-`, push)
          : null,
        pull
          ? buildClassName(`${NAMESPACE}u-pull-`, pull)
          : null,
        className
      ),
      ...rest
    },
    children
  )

const fractions = buildBreakpointValues(GRID_FRACTIONS)

const propTypeFraction = T.oneOfType([
  T.oneOf(fractions),
  T.arrayOf(T.oneOf(fractions))
])

GridItem.propTypes = {
  tag: T.oneOf(BLOCK_TAGS),
  width: propTypeFraction,
  push: propTypeFraction,
  pull: propTypeFraction,
  className: T.string,
  children: T.node
}

export default GridItem
