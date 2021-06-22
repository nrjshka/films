import React, { memo } from 'react'

import { Form as FormTemplate } from '../../../ui'

const Registration = memo(function Registration() {
  const onSubmit = () => {}

  return <FormTemplate isRegistration onSubmit={onSubmit} />
})

export { Registration }
