import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import axios from 'axios';

export default class CreateStationary extends Component {

  constructor(props) {
    super(props)

    // Setting up functions
    this.onChangeStationaryName = this.onChangeStationaryName.bind(this);
    this.onChangeStationaryImage = this.onChangeStationaryName.bind(this);
    this.onChangeStationaryDescription = this.onChangeStationaryDescription.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    // Setting up state
    this.state = {
      name: '',
      image: '',
      description: ''
    }
  }

  onChangeStationaryName(e) {
    this.setState({ name: e.target.value })
  }

  onChangeStationaryImage(e) {
    this.setState({ image: e.target.value })
  }

  onChangeStationaryDescription(e) {
    this.setState({ description: e.target.value })
  }

  onSubmit(e) {
    e.preventDefault()

    const stationaryObject = {
      name: this.state.name,
      image: this.state.image,
      description: this.state.description
    };

    axios.post('/stationary/create-item', stationaryObject)
      .then(res => console.log(res.data));

    this.setState({
      name: '',
      image: '',
      description: ''
    });
  }

  render() {
    return (<div className="form-wrapper">
      <Form onSubmit={this.onSubmit}>
        <Form.Group controlId="Name">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" value={this.state.name} onChange={this.onChangeStationaryName} />
        </Form.Group>

        <Form.Group controlId="Email">
          <Form.Label>Image</Form.Label>
          <Form.Control type="text" value={this.state.image} onChange={this.onChangeStationaryImage} />
        </Form.Group>

        <Form.Group controlId="Name">
          <Form.Label>Description</Form.Label>
          <Form.Control type="text" value={this.state.description} onChange={this.onChangeStationaryDescription} />
        </Form.Group>

        <Button variant="danger" size="lg" block="block" type="submit">
          Create Item
        </Button>
      </Form>
    </div>);
  }
}
