import React from 'react'

import { Form, Input, Button, Row } from 'antd'

import { FormProps } from './types'

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

function FormTemplate<FormValue>({
  children,
  onSubmit,
  isRegistration,
}: React.PropsWithChildren<FormProps<FormValue>>) {
  return (
    <Row justify="center" align="middle" style={{ minHeight: '100vh' }}>
      <Form {...formLayout} onFinish={onSubmit}>
        <Form.Item name="email" label="Email:" rules={[{ required: true }]}>
          <Input type="email" />
        </Form.Item>
        {isRegistration && (
          <Form.Item name="fullName" label="Full name:" rules={[{ required: true }]}>
            <Input type="text" />
          </Form.Item>
        )}
        <Form.Item name="password" label="Password:" rules={[{ required: true }]}>
          <Input type="password" />
        </Form.Item>
        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>

        {children}
      </Form>
    </Row>
  )
}

export { FormTemplate }
