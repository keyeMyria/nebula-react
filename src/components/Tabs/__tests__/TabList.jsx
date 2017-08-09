import React from 'react'
import { shallow } from 'enzyme'

import { Tabs } from '../'

describe('<Tabs.TabList />', () => {
  it('renders the list-wrapper and the list', () => {
    const $ = shallow(<Tabs.TabList />)
    expect($.find('.c-tabs__list-wrapper')).toHaveLength(1)
    expect($.find('.c-tabs__list')).toHaveLength(1)
  })

  it('renders with appropriate classNames', () => {
    const $ = shallow(<Tabs.TabList className="test">Test</Tabs.TabList>)
    expect($.hasClass('c-tabs__list-wrapper test')).toBe(true)
    expect($.children().hasClass('c-tabs__list')).toBe(true)
  })

  it('renders with attributes', () => {
    const $ = shallow(
      <Tabs.TabList style={{ position: 'relative' }} ariaHidden="true">
        _
      </Tabs.TabList>
    )
    expect($.prop('style')).toEqual({
      position: 'relative'
    })
    expect($.prop('ariaHidden')).toBe('true')
  })

  it('renders a defined node type', () => {
    const $ = shallow(<Tabs.TabList node="article">_</Tabs.TabList>)
    expect($.type()).toBe('article')
  })

  it('renders a div by default', () => {
    const $ = shallow(<Tabs.TabList>-</Tabs.TabList>)
    expect($.type()).toBe('div')
  })

  it('renders tabs passing the index and callback', () => {
    const activateTab = jest.fn()
    const $ = shallow(
      <Tabs.TabList activateTab={activateTab} >
        <Tabs.Tab />
        <Tabs.Tab />
      </Tabs.TabList>
    )
    expect($.find(Tabs.Tab).at(0).prop('index')).toBe(0)
    expect($.find(Tabs.Tab).at(0).prop('activateTab')).toBe(activateTab)
    expect($.find(Tabs.Tab).at(1).prop('index')).toBe(1)
    expect($.find(Tabs.Tab).at(1).prop('activateTab')).toBe(activateTab)
  })

  it('sets the active tab', () => {
    const activeIndex = 1
    const $ = shallow(
      <Tabs.TabList activeIndex={activeIndex} >
        <Tabs.Tab />
        <Tabs.Tab />
      </Tabs.TabList>
    )
    expect($.find(Tabs.Tab).at(0).prop('isActive')).toBe(false)
    expect($.find(Tabs.Tab).at(1).prop('isActive')).toBe(true)
  })
})
