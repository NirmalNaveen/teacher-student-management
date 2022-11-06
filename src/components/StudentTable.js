import Table from 'react-bootstrap/Table';
import {Button} from 'react-bootstrap';

function StudentTable() {
  return (
    <Table>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Email</th>
          <th>Mobile</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Nirmal</td>
          <td>naveen@gmail</td>
          <td>98076554</td>
          <td><Button variant="primary" type="Edit">Edit</Button>  <Button variant="primary" type="Delete">Delete</Button></td>
        </tr>
        <tr>
          <td>2</td>
          <td>Vicky</td>
          <td>vicky@gmail</td>
          <td>97645778</td>
          <td><Button variant="primary" type="Edit">Edit</Button>  <Button variant="primary" type="Delete">Delete</Button></td>
        </tr>
        <tr>
          <td>3</td>
          <td>sekar</td>
          <td>sekar@gmail</td>
          <td>905846738</td>
          <td><Button variant="primary" type="Edit">Edit</Button>  <Button variant="primary" type="Delete">Delete</Button></td>
        </tr>
      </tbody>
    </Table>
  );
}

export default StudentTable;