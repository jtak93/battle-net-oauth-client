import React, { PropTypes } from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react'

const LoginForm = (props) => {
  return (
    <Form>
      <Form.Field>
        <label>Email</label>
        <input placeholder='Email' />
      </Form.Field>
      <Form.Field>
        <label>Password</label>
        <input placeholder='Password' type='password'/>
      </Form.Field>
      <Button type='submit'>Login</Button>
    </Form>
  );
}

export default LoginForm;
