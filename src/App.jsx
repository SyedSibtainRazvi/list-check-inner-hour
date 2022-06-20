import React, { Fragment } from 'react';
import { Form, FormGroup, Label, Col, Input, Button } from 'reactstrap';



const App = () => {
  return (
    <Fragment>
      <h1> List-Check </h1>
      <Form className='container mt-5'>
        <FormGroup row>
          <Label for="list1" sm={2}>
            List 1
          </Label>
          <Col sm={10}>
            <Input
              value=""
              name="list1"
              id="list1"
              placeholder="Enter values seperated by comma" />
          </Col>
        </FormGroup>

        <FormGroup row>
          <Label for="list2" sm={2}>
            List 2
          </Label>
          <Col sm={10}>
            <Input
              value=""
              name="list2"
              id="list2"
              placeholder="Enter values seperated by comma" />
          </Col>
        </FormGroup>
      </Form>

      <Button color='primary'>Compute

      </Button>

      <main>
        <h1>Results</h1>
        <div className='container'>
          <div className='row'>
            <div className='col-sm'>
              <h3> Items present only in list A</h3>
            </div>
            <div className='col-sm'>
              <h3>Items present only in list B</h3>
            </div>
            <div className='row'>
              <div className='col-sm'>
                <h3> Items present in both A and B</h3>
              </div>
              <div className='col-sm'>
                <h3>Items combining both A and B</h3>
              </div>
            </div>


          </div>
        </div>
      </main>
    </Fragment>
  )
}

export default App