import React from 'react'

import { Search } from './index'

import { SearchProps } from './types'

const Preview: React.FC<SearchProps> = (props) => <Search {...props} />

export default {
  component: Search,
  title: 'Page/Search',
  args: {
    value: '',
  },
}

export { Preview }
