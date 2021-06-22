import React from 'react'
import { useDispatch } from 'react-redux'

import { Row, Col } from 'antd'

import { Link } from 'react-router-dom'

import { Form } from '../../../ui'
import { checkLoginForm } from '../../../redux'

type FormType = { email: string; password: string }

const Login = () => {
  const dispatch = useDispatch()

  const onSubmit = async (value: FormType) => {
    await dispatch(checkLoginForm(value))
  }

  return (
    <Form<FormType> onSubmit={onSubmit}>
      <Row justify="center">
        <Col xs={12}>
          <Link to="/admin/registration">Or sign up</Link>
        </Col>
      </Row>
    </Form>
  )
}

export { Login }
