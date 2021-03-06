import React, { Component } from 'react';
import { Card, Button, Form, Alert } from 'react-bootstrap';
import {Col } from 'react-bootstrap';
import { getCountries, getCountryCallingCode } from 'react-phone-number-input/input'
import en from 'react-phone-number-input/locale/en.json'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';


class create extends Component {

  constructor(props)
  {
    super(props);
    this.state={
      errors:{},
      firstName:"",
      lastName:"",
      email:"",
      password:"",
      gender:"",
      type:"",
      msg:"",
      error:"",
      number: "",
      comment_text:"",
      country:"",
      countrycode:""

    }
   
  }

  createaccount=(e)=>
  {
    e.preventDefault()
    this.setState({msg:"",error:""}, { showPopup: false })
    const data={
      "firstName":this.state.firstName,
      "lastName":this.state.lastName,
      "password":this.state.password,
      "email":this.state.email,
      "type":this.state.type,
      "gender":this.state.gender,
      "number":this.state.number,
      "comment_text":this.state.comment_text,
      "country":this.state.country,
      "countrycode":this.state.countrycode

    }
  }
  togglePopup() {
    
    this.setState({
      showPopup: !this.state.showPopup
      
    });
  }
render() {
  return (
   

    <Card style={{ width: '45rem', marginTop: '5rem', textAlign: "center" }} h1 className="mx-auto">
        <Card.Body>
          <Card.Title>Company Information</Card.Title>
         
          <Alert variant="success" show={this.state.msg} style={{ marginTop: "10px" }}>
            {this.state.msg}
          </Alert>
          
          <Alert variant="danger" show={this.state.error} style={{ marginTop: "10px" }}>
            {this.state.error}
          </Alert>
          
          <Card.Text>
            <Form>
              <Form.Row>
                <Form.Group as={Col}>
                  <Form.Label></Form.Label>
                  <Form.Control
                   placeholder="First name"
                   value={this.state.firstName}
                   onChange={(e) => {this.setState({firstName: e.target.value})}}/>
                </Form.Group>

                <Form.Group as={Col}>
                  <Form.Label></Form.Label>
                  <Form.Control
                    name="lastName"
                    placeholder="Last name" 
                    value={this.state.lastName} 
                    onChange={(e) => {this.setState({lastName: e.target.value})}}/>
                    </Form.Group>
              </Form.Row>

              <Form.Group>
                <Form.Label></Form.Label>
                <Form.Control
                 type="email"
                 name="email"
                 placeholder="Work Email Address"
                 value={this.state.email} 
                 onChange={(e) => {this.setState({email: e.target.value})}}
                 isInvalid={this.state.errors.email}/>
                <Form.Control.Feedback type="invalid">
                  Incorrect email
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group>
                <Form.Label></Form.Label>
                
                <Form.Control
                 type="number"
                 name="number"
                 placeholder="Phone Number"
                 value={this.state.number} 
                 onChange={(e) => {this.setState({number: e.target.value})}}
                 isInvalid={this.state.errors.number}/>
                <Form.Control.Feedback type="invalid">
                  wrong number
                </Form.Control.Feedback>
              </Form.Group>


                
             

                <Form.Row>

                <Form.Group as={Col}>
                  <Form.Label></Form.Label>
                  <Form.Control 
                   as="select"
                   value={this.state.usertype}
                   onChange={(e) => {this.setState({type: e.target.value})}}>
                    <option>Operational Companies</option>
                    <option>Toyota</option>
                    <option>BMW</option>
                  </Form.Control>
                </Form.Group>
                <Popup trigger={<button> Info</button>} position="right ">
    <div>you could select/ add your company</div>
  
  </Popup>
  </Form.Row>
               <Form.Row>
                <Form.Group as={Col}>
                  <Form.Label></Form.Label>
                  <Form.Control 
                   as="select"
                   value={this.state.usertype}
                   onChange={(e) => {this.setState({type: e.target.value})}}>
                    <option>Company Name</option>
                    <option>Bavaria</option>
                    <option>Catcher</option>
                    
                  </Form.Control>
                </Form.Group>
                <Popup trigger={<button> popup</button>} position="right ">
    <div>you could select/ add your company</div>
    
  </Popup>
  </Form.Row>
            <Form.Group as={Col}>
                  <Form.Label></Form.Label>
                  <Form.Control
                   as="select"
                   vlaue={this.state.gender}
                   onChange={(e) => {this.setState({gender: e.target.value})}}>
                    <option>Objective</option>
                    <option>Suggestion</option>
                    <option>Complaint</option>
                  </Form.Control>
                </Form.Group>
          <Form.Group>
                <Form.Label></Form.Label>
                <Form.Control
                 as="textarea"
                 rows="3"
                 placeholder="More Details/Description"
                
                 onChange={(e) => {this.setState({comment_text: e.target.value})}}
                 />
              </Form.Group> 

              <Button variant="primary" type="create" onClick={this.togglePopup.bind(this)}>
                Request an appointment
                
              </Button>
             </Form>

          </Card.Text>
        </Card.Body>
      </Card>
      
    );
  }
}

export default create;
