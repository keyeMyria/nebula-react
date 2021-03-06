import React from 'react'
import { shallow } from 'enzyme'

import { Pagination } from '../'

describe('<Pagination.Wrapper />', () => {
  it('renders with an optional className', () => {
    const $ = shallow(<Pagination.Wrapper className="test">_</Pagination.Wrapper>)
    expect($.hasClass('test')).toBe(true)
  })

  it('renders with attributes', () => {
    const $ = shallow(
      <Pagination.Wrapper style={{ position: 'relative' }}>
        _
      </Pagination.Wrapper>
    )
    expect($.prop('style')).toEqual({
      position: 'relative'
    })
  })

  it('renders a defined tag type', () => {
    const $ = shallow(<Pagination.Wrapper tag="article">_</Pagination.Wrapper>)
    expect($.type()).toBe('article')
  })

  it('renders a nav by default', () => {
    const $ = shallow(<Pagination.Wrapper>_</Pagination.Wrapper>)
    expect($.type()).toBe('nav')
  })

  it('renders children', () => {
    const $ = shallow(
      <Pagination.Wrapper>
        Test
      </Pagination.Wrapper>
    )
    expect($.contains('Test')).toBe(true)
  })
})
