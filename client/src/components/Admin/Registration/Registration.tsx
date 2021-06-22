import React, { memo } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

import { Row, Col } from 'antd'

import { Form as FormTemplate } from '../../../ui'
import { registration } from '../../../redux'

type FormType = {
  email: string
  password: string
  fullName: string
}

const Registration = memo(function Registration() {
  const dispatch = useDispatch()

  const onSubmit = async (value: FormType) => {
    await dispatch(registration(value))
  }

  return (
    <FormTemplate<FormType> isRegistration onSubmit={onSubmit}>
      <Row justify="center">
        <Col xs={12}>
          <Link to="/admin">Or sign in</Link>
        </Col>
      </Row>
    </FormTemplate>
  )
})

export { Registration }
