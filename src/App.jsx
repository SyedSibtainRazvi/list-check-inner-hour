import React, { Fragment }from 'react';
import { Form, FormGroup, Label, Col, Input, Button } from 'reactstrap';



const App = () => {
  return (
    <Fragment>
      <Form className='container mt-5'>
        <FormGroup row>
          <Label for="list1" sm={2}>
            List 1
          </Label>
          <Col sm={10}>
          <Input 
          value = ""
          name = "list1"
          id = "list1"
          placeholder = "Enter values seperated by comma"/>
          </Col>
        </FormGroup>

        <FormGroup row>
          <Label for="list2" sm={2}>
            List 2
          </Label>
          <Col sm={10}>
          <Input 
          value = ""
          name = "list2"
          id = "list2"
          placeholder = "Enter values seperated by comma"/>
          </Col>
        </FormGroup>
      </Form>
    </Fragment>
  )
}

export default App