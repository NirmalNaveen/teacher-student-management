import React from 'react';
import {Button} from 'react-bootstrap';
import {Form} from 'react-bootstrap'


function StudentCreate() {
    return (
        <div>
      {<Form>
        <Form.Group>
          <Form.Label>Name</Form.Label>
          <Form.Control type="name" placeholder="Enter email" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
  
        <Form.Group>
          <Form.Label>Mobile</Form.Label>
          <Form.Control type="number" placeholder="Number" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>}
      </div>
    );
  }
  
  export default StudentCreate;