import React from 'react'

import { Header } from './index'

const Preview: React.FC = (props) => <Header {...props} />

export default {
  component: Header,
  title: 'Page/Header',
}

export { Preview }
