import React, { Component } from 'react'

import {
  LoadingIcon,
  SiteWrap,
  Section,
  Pagination,
  Button
} from 'nebula-react'

const tableData = {
  columns: [
    {
      title: 'Name',
      sortable: true,
    }, {
      title: 'Email',
      sortable: true,
      defaultSorted: true,
    },
    {
      title: 'Age',
      sortable: true,
    },
  ],
  rows: [
    [
      'Robert Smith',
      'robert.smith@checkd.media',
      32,
    ],
    [
      'Elliott Hesp',
      'elliott.hesp@checkd.media',
      26,
    ],
    [
      'Mike Diarmid',
      'mike.diarmid@checkd.media',
      34,
    ],
  ],
}
class App extends Component {
  render() {
    return (
      <div>
        <Section size="md">
          <SiteWrap padding>
            <Pagination.Wrapper>
              <Pagination.Item>
                <Pagination.Link aria-label="Disabled Page Link" to="/" previous disabled>Prev</Pagination.Link>
              </Pagination.Item>
              <Pagination.Item>
                <Pagination.Link ariaLabel="Page Link 1" to="/" >1</Pagination.Link>
              </Pagination.Item>
              <Pagination.Item>
                <Pagination.Link to="/" isActive>2</Pagination.Link>
              </Pagination.Item>
              <Pagination.Item>
                <Pagination.Link to="/">3</Pagination.Link>
              </Pagination.Item>
              <Pagination.Item>
                <Pagination.Link to="/" next>Next</Pagination.Link>
              </Pagination.Item>
            </Pagination.Wrapper>
            <Button size="md" theme="alpha">
              <LoadingIcon fill="white" iconPosition="left">
                Loading data
              </LoadingIcon>
            </Button>
          </SiteWrap>
        </Section>
      </div>
    )
  }
}

export default App
