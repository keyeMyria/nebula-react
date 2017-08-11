import React from 'react'
import T from 'prop-types'

import CheckboxWrapper from './CheckboxWrapper'
import CheckboxLabel from './CheckboxLabel'
import CheckboxInput from './CheckboxInput'

const Checkbox = ({ id, checked, disabled, value, children }) => (
  <CheckboxWrapper>
    <CheckboxInput
      id={id}
      checked={checked}
      disabled={disabled}
      value={value}
    />
    <CheckboxLabel htmlFor={id}>
      {children}
    </CheckboxLabel>
  </CheckboxWrapper>
)

Checkbox.propTypes = {
  checked: T.bool,
  disabled: T.bool,
  // eslint-disable-next-line react/forbid-prop-types
  value: T.any,
  children: T.node.isRequired,
  id: T.string.isRequired
}

export default Checkbox