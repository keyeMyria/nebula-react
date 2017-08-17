import React from 'react'
import { shallow } from 'enzyme'

import { StatusCard } from '../'

describe('<StatusCard />', () => {
  it('renders a "div" by default', () => {
    const $ = shallow(<StatusCard>_</StatusCard>)
    expect($.type()).toBe('div')
  })

  it('renders a defined node type', () => {
    const $ = shallow(<StatusCard node="article">_</StatusCard>)
    expect($.type()).toBe('article')
  })

  it('renders with the correct default className', () => {
    const $ = shallow(<StatusCard>_</StatusCard>)
    expect($.hasClass('c-status-card')).toBe(true)
  })

  it('takes an additional className', () => {
    const $ = shallow(<StatusCard className="test-className">_</StatusCard>)
    expect($.hasClass('c-status-card test-className')).toBe(true)
  })

  describe('status styling', () => {
    it('renders with success', () => {
      const $ = shallow(<StatusCard status="success">_</StatusCard>)
      expect($.hasClass('c-status-card c-status-card--success')).toBe(true)
    })

    it('renders with info', () => {
      const $ = shallow(<StatusCard status="info">_</StatusCard>)
      expect($.hasClass('c-status-card c-status-card--info')).toBe(true)
    })

    it('renders with warning', () => {
      const $ = shallow(<StatusCard status="warning">_</StatusCard>)
      expect($.hasClass('c-status-card c-status-card--warning')).toBe(true)
    })

    it('renders with error', () => {
      const $ = shallow(<StatusCard status="error">_</StatusCard>)
      expect($.hasClass('c-status-card c-status-card--error')).toBe(true)
    })
  })

  it('renders children', () => {
    const $ = shallow(<StatusCard>test child</StatusCard>)
    expect($.contains('test child')).toBe(true)
  })

  it('renders with attributes', () => {
    const $ = shallow(
      <StatusCard style={{ position: 'relative' }} ariaHidden="true">
        _
      </StatusCard>
    )
    expect($.prop('style')).toEqual({
      position: 'relative'
    })
    expect($.prop('ariaHidden')).toBe('true')
  })
})
