import React from 'react'
import { shallow } from 'enzyme'

import { ButtonDropdown } from '../'

const defaultContext = {
  isButtonDropdownOpen: true
}

describe('<ButtonDropdown.Content />', () => {
  it('renders children', () => {
    const context = {
      ...defaultContext,
      isButtonDropdownOpen: true
    }
    const child = <div />
    const $ = shallow(
      <ButtonDropdown.Content>
        <child />
      </ButtonDropdown.Content>
    , { context })
    expect($.contains(<child />)).toBe(true)
  })

  it('renders with appropriate classNames', () => {
    const $ = shallow(<ButtonDropdown.Content className="test">_</ButtonDropdown.Content>, { context: defaultContext })
    expect($.hasClass('c-btn-dropdown__content test')).toBe(true)
  })

  it('renders a defined node type', () => {
    const $ = shallow(<ButtonDropdown.Content node="article">_</ButtonDropdown.Content>, { context: defaultContext })
    expect($.type()).toBe('article')
  })

  it('renders a div by default', () => {
    const $ = shallow(
      <ButtonDropdown.Content>_</ButtonDropdown.Content>,
      { context: defaultContext })
    expect($.type()).toBe('div')
  })

  it('renders with attributes', () => {
    const $ = shallow(
      <ButtonDropdown.Content style={{ position: 'relative' }} ariaHidden="true">
        _
      </ButtonDropdown.Content>
    , { context: defaultContext })
    expect($.prop('style')).toEqual({
      position: 'relative'
    })
    expect($.prop('ariaHidden')).toBe('true')
  })

  it('returns "null" when the buttonDropdown is closed', () => {
    const context = { isButtonDropdownOpen: false }
    const $ = shallow(<ButtonDropdown.Content>_</ButtonDropdown.Content>, { context })
    expect($.type()).toBeNull()
  })
})
