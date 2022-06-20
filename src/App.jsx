import React, { Fragment, useState } from 'react';
import { Form, FormGroup, Label, Col, Input, Button } from 'reactstrap';



const App = () => {

  const [listA, setListA] = useState([]);
  const [listB, setListB] = useState([]);

  const [isCompute, setIsCompute] = useState(false);

  const handleInputChange = (event) => {
    if (event.target.id === "listA") {
      setListA(event.target.value.split(","));
    }
    if (event.target.id === "listB") {
      setListB(event.target.value.split(","));
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsCompute(!isCompute);
  }

  const handleClear = () => {
    window.location.reload();
  }


  return (
    <Fragment>
      <h1 className='container'> List Analyser </h1>
      <Form onSubmit={handleSubmit} className='container mt-5'>
        <FormGroup row>
          <Label for="listA" sm={2}>
            List A
          </Label>
          <Col sm={10}>
            <Input
              name="listA"
              id="listA"
              placeholder="Enter values seperated by comma"
              onChange={handleInputChange}
              required />
          </Col>
        </FormGroup>

        <FormGroup row>
          <Label for="listB" sm={2}>
            List B
          </Label>
          <Col sm={10}>
            <Input
              name="listB"
              id="listB"
              placeholder="Enter values seperated by comma"
              onChange={handleInputChange}
              required />
          </Col>
        </FormGroup>
        {!isCompute ? (
          <Button className='mt-2' color='primary'>Compute
          </Button>
        ) : <Button onClick={handleClear} color='info'>Clear</Button>}
      </Form>





      {isCompute ? (
        <main className='container'>
          <h1>Results</h1>
          <div className='container'>
            <div className='row'>
              <div className='col-sm'>
                <h3> Items present only in list A</h3>
                {listA.map((item, index) => (
                  <p key={index}> {item}</p>
                ))}
              </div>
              <div className='col-sm'>
                <h3>Items present only in list B</h3>
                {listB.map((item, index) => (
                  <p key={index}> {item}</p>
                ))}
              </div>
              <div className='row'>
                <div className='col-sm'>
                  <h3> Items present in both A and B</h3>
                  {[...listA, ...listB].map((item, index) => (
                    <p key={index}>{item}</p>
                  ))}
                </div>
                <div className='col-sm'>
                  <h3>Items combining both A and B</h3>
                  {[...new Set([...listA, ...listB])].map((item, index) => (
                    <p key={index}> {item}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </main>
      ) :
        null
      }
    </Fragment>
  )
}
export default App