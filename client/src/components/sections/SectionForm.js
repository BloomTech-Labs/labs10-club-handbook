import React, { Component } from 'react'
import axios from 'axios'
import TextEditor from './TextEditor'
import { Button } from '@material-ui/core'
import { connect } from 'react-redux'
import { addSection } from '../../store/actions/clubActions'

class SectionForm extends Component {
  state = {
    clubId: null,
    title: '',
    body: '',
    imgPlacement: 4,
    selectedFile: null,
    image: '',
    orderPosition: null,
    contactName: '',
    contactInfo: '',
    color: null,
    font: null,
  }

  componentDidMount() {
    const { club_id } = this.props.currentUser
    this.setState({ clubId: club_id }) // { clubId: clubId }
  }

  changeHandler = e => {
    e.preventDefault()
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  bodyChangeHandler = e => {
    this.setState({ body: e })
  }

  fileHandler = e => {
    this.setState({ selectedFile: e.target.files[0] })
  }

  uploadImg = e => {
    e.preventDefault()

    const fd = new FormData()
    fd.append('image', this.state.selectedFile)

    axios
      .post('https://club-handbook.herokuapp.com/api/images/upload', fd)
      .then(res => {
        this.setState({ image: res.data.image })
      })
      .catch(err => console.log(err))
  }

  addSection = ev => {
    ev.preventDefault()
    let sectionInfo = {
      title: this.state.title,
      body: this.state.body,
      img_url: this.state.image,
    }
    this.props.addSection(this.state.clubId, sectionInfo)
  }

  cancel = () => {
    this.props.history.push('/')
  }

  render() {
    const { clubId } = this.state

    if (!clubId) {
      return <h1>Loading...</h1>
    }

    return (
      <div className="section-form">
        <form
          method="/POST"
          encType="multipart/form-data"
          onSubmit={addSection(clubId, this.state)}
        >
          <div className="form-group">
            <div className="action-btns">
              <Button
                variant="contained"
                color="secondary"
                onClick={this.cancel}
              >
                Cancel
              </Button>

              <h2>Create Section</h2>

              <Button
                onClick={this.addSection}
                variant="contained"
                color="primary"
              >
                Save Section
              </Button>
            </div>

            <label htmlFor="title">Section Title</label>
            <input
              id="title"
              name="title"
              onChange={this.changeHandler}
              style={{ width: '500px' }}
              required
              value={this.state.title}
            />

            <TextEditor
              bodyChangeHandler={this.bodyChangeHandler}
              body={this.state.body}
            />

            <label htmlFor="contact-name">Contact Name</label>
            <input
              id="contact-name"
              name="contactName"
              onChange={this.changeHandler}
              style={{ width: '500px' }}
              required
              value={this.state.contactName}
            />

            <label htmlFor="contact-info">Contact Info</label>
            <input
              id="contact-info"
              name="contactInfo"
              onChange={this.changeHandler}
              style={{ width: '500px' }}
              required
              value={this.state.contactInfo}
            />

            <input
              label="Upload Image"
              onChange={this.fileHandler}
              type="file"
              id="image"
              name="image"
              accept="image/*"
            />
            <Button
              variant="contained"
              color="primary"
              onClick={this.uploadImg}
            >
              Upload
            </Button>

            <label htmlFor="section-type">Section Type</label>
            <select name="section-type" id="section-type">
              <option value="1">Image Background</option>
              <option value="2">Image Left</option>
              <option value="3">Image Right</option>
              <option value="4">No Image</option>
            </select>

            <label htmlFor="background">Background Color</label>
            <select name="background" id="background">
              <option value="white">white</option>
              <option value="black">black</option>
              <option value="blue">blue</option>
              <option value="yellow">yellow</option>
              <option value="red">red</option>
              <option value="orange">orange</option>
            </select>

            <label htmlFor="title-font">Title Font</label>
            <select name="title-font" id="title-font">
              <option value="Helvetica Neue">Helvetica Neue</option>
              <option value="Sans Serif">Sans Serif</option>
              <option value="Roboto">Roboto</option>
            </select>

            <div className="action-btns">
              <Button
                variant="contained"
                color="secondary"
                onClick={this.cancel}
              >
                Cancel
              </Button>
              <Button
                onClick={this.addSection}
                variant="contained"
                color="primary"
              >
                Save Section
              </Button>
            </div>
          </div>
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    currentUser: state.auth.currentUser,
  }
}

export default connect(
  mapStateToProps,
  { addSection }
)(SectionForm)
