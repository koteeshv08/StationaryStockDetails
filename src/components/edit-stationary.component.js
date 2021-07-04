import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import axios from 'axios';

export default class EditStationary extends Component {

  constructor(props) {
    super(props)

    this.onChangeStationaryName = this.onChangeStationaryName.bind(this);
    this.onChangeStationaryImage = this.onChangeStationaryImage.bind(this);
    this.onChangeStationaryDescription = this.onChangeStationaryDescription.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    // State
    this.state = {
      name: '',
      image: '',
      description: ''
    }
  }

  componentDidMount() {
    axios.get('/stationary/edit-item/' + this.props.match.params.id)
      .then(res => {
        this.setState({
          name: res.data.name,
          image: res.data.image,
          description: res.data.description
        });
      })
      .catch((error) => {
        console.log(error);
      })
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

    axios.put('http://localhost:4000/stationary/update-item/' + this.props.match.params.id, stationaryObject)
      .then((res) => {
        console.log(res.data)
        console.log('Item successfully updated')
      }).catch((error) => {
        console.log(error)
      })

    // Redirect to Itemt List 
    this.props.history.push('/stationary-list')
  }


  render() {
    return (<div className="form-wrapper">
      <Form onSubmit={this.onSubmit}>
        <Form.Group controlId="Name">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" value={this.state.name} onChange={this.onChangeStationaryName} />
        </Form.Group>

        <Form.Group controlId="Image">
          <Form.Label>Image</Form.Label>
          <Form.Control type="text" value={this.state.image} onChange={this.onChangeStationaryImage} />
        </Form.Group>

        <Form.Group controlId="Description">
          <Form.Label>Description</Form.Label>
          <Form.Control type="text" value={this.state.description} onChange={this.onChangeStationaryDescription} />
        </Form.Group>

        <Button variant="danger" size="lg" block="block" type="submit">
          Update Item
        </Button>
      </Form>
    </div>);
  }
}
