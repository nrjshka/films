import React from 'react'

import { Link } from 'react-router-dom'

import { Form, Input, Button, Row, Col } from 'antd'

const formLayout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 20,
  },
}
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 20,
  },
}

const Login = () => (
  <Row justify="center" align="middle" style={{ minHeight: '100vh' }}>
    <Form {...formLayout}>
      <Form.Item name="email" label="Email:" rules={[{ required: true }]}>
        <Input type="email" />
      </Form.Item>
      <Form.Item name="password" label="Password:" rules={[{ required: true }]}>
        <Input type="password" />
      </Form.Item>
      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>

      <Row justify="center">
        <Col xs={12}>
          <Link to="/admin/registration">Or sign up</Link>
        </Col>
      </Row>
    </Form>
  </Row>
)

export { Login }
