import React, { Component } from 'react'
import axios from 'axios'
import TextEditor from './TextEditor'
import { Button } from '@material-ui/core'
import { connect } from 'react-redux'
import {
  addSection,
  updateSection,
  startLoading,
} from '../../store/actions/clubActions'

import {
  FormContainer,
  Row,
  Label,
  SectionInput,
  ImageInput,
} from '../../style/section-form'

class SectionForm extends Component {
  state = {
    clubId: null,
    title: '',
    body: '',
    imgPlacement: 4,
    selectedFile: null,
    image: '',
    orderPosition: this.props.sections ? this.props.sections.length + 1 : 1,
    contactName: '',
    contactInfo: '',
    titleColor: 'black',
    bgColor: 'none',
    font: 'roboto',
  }

  componentDidMount() {
    const { club_id } = this.props.currentUser

    if (this.props.update === true) {
      const currentSection = this.props.sections.find(
        section => section.id === this.props.sectionId
      )
      this.setState({
        clubId: club_id,
        title: currentSection.title,
        body: currentSection.body,
        imgPlacement: currentSection.img_placement,
        image: currentSection.img_url,
        orderPosition: currentSection.order,
        contactName: currentSection.contact_name,
        contactInfo: currentSection.contact_info,
        titleColor: currentSection.title_color,
        bgColor: currentSection.bg_color,
        font: currentSection.font,
      })
    } else {
      this.setState({ clubId: club_id })
    }
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

  uploadImg = async () => {
    console.log(`upload img`)

    const fd = new FormData()
    fd.append('image', this.state.selectedFile)

    try {
      let res = await axios.post(
        'https://club-handbook.herokuapp.com/api/images/upload',
        fd
      )

      this.setState({ image: res.data.image })
    } catch (err) {
      console.log(err)
    }
  }

  addSection = async ev => {
    ev.preventDefault()
    if (this.state.selectedFile) {
      this.props.startLoading()
      await this.uploadImg()
    }
    let sectionInfo = {
      club_id: this.state.clubId,
      title: this.state.title,
      body: this.state.body,
      img_url: this.state.image,
      img_placement: this.state.imgPlacement,
      contact_name: this.state.contactName,
      contact_info: this.state.contactInfo,
      order: this.state.orderPosition,
      title_color: this.state.titleColor,
      bg_color: this.state.bgColor,
      font: this.state.font,
    }
    this.props.addSection(this.state.clubId, sectionInfo)
    this.props.cancel(ev)
  }

  updateSection = async ev => {
    console.log('update section')
    ev.preventDefault()
    if (this.state.selectedFile) {
      this.props.startLoading()
      await this.uploadImg()
    }
    let sectionInfo = {
      club_id: this.state.clubId,
      title: this.state.title,
      body: this.state.body,
      img_url: this.state.image,
      img_placement: this.state.imgPlacement,
      contact_name: this.state.contactName,
      contact_info: this.state.contactInfo,
      order: this.state.orderPosition,
      title_color: this.state.titleColor,
      bg_color: this.state.bgColor,
      font: this.state.font,
    }
    this.props.updateSection(
      this.state.clubId,
      this.props.sectionId,
      sectionInfo
    )
    this.props.cancel(ev)
  }

  cancel = e => {
    this.props.cancel(e)
  }

  render() {
    const { clubId } = this.state
    const { fonts, colors } = this.props

    if (!clubId) {
      return <h1>Loading...</h1>
    }

    return (
      <FormContainer>
        <form
          method="/POST"
          encType="multipart/form-data"
          onSubmit={this.props.update ? this.updateSection : this.addSection}
        >
          <div className="form-group">
            <Row>
              <Button
                variant="contained"
                color="secondary"
                onClick={this.cancel}
              >
                Cancel
              </Button>

              {this.props.update ? (
                <h2>Update Section</h2>
              ) : (
                <h2>Create Section</h2>
              )}

              <Button
                onClick={
                  this.props.update ? this.updateSection : this.addSection
                }
                variant="contained"
                color="primary"
              >
                Save Section
              </Button>
            </Row>

            <Row>
              <Label htmlFor="title">Section Title</Label>
              <SectionInput
                id="title"
                name="title"
                onChange={this.changeHandler}
                required
                value={this.state.title}
              />
            </Row>

            <Label htmlFor="body" marginBottom>
              Section Body
            </Label>
            <TextEditor
              bodyChangeHandler={this.bodyChangeHandler}
              body={this.state.body}
            />

            <Row marginTop>
              <Label htmlFor="contact-name">Contact Name</Label>
              <SectionInput
                id="contact-name"
                name="contactName"
                onChange={this.changeHandler}
                value={this.state.contactName}
              />
            </Row>

            <Row>
              <Label htmlFor="contact-info">Contact Info</Label>
              <SectionInput
                id="contact-info"
                name="contactInfo"
                onChange={this.changeHandler}
                value={this.state.contactInfo}
              />
            </Row>

            <Row wrap>
              <ImageInput
                label="Upload Image"
                onChange={this.fileHandler}
                type="file"
                id="image"
                name="image"
                accept="image/*"
              />
            </Row>

            <Row wrap>
              <div>
                <Label htmlFor="imgPlacement">Image Placement</Label>
                <select
                  name="imgPlacement"
                  id="imgPlacement"
                  onChange={this.changeHandler}
                  value={this.state.imgPlacement}
                >
                  <option value="4">No Image</option>
                  <option value="1">Image Background</option>
                  <option value="2">Image Left</option>
                  <option value="3">Image Right</option>
                </select>
              </div>

              <div>
                <Label htmlFor="font">Font</Label>
                <select
                  name="font"
                  id="font"
                  onChange={this.changeHandler}
                  value={this.state.font}
                >
                  <option value="Roboto">Roboto</option>
                  {fonts.map(font => {
                    if (font.font.toLowerCase() !== 'roboto') {
                      return <option value={font.font}>{font.font}</option>
                    }
                  })}
                </select>
              </div>
            </Row>

            <Row wrap>
              <div>
                <Label htmlFor="bgColor">Background Color</Label>
                <select
                  name="bgColor"
                  id="bgColor"
                  onChange={this.changeHandler}
                  value={this.state.bgColor}
                >
                  <option value="none">none</option>
                  <option value="white">white</option>
                  {colors.map(color => {
                    return <option value={color.color}>{color.color}</option>
                  })}
                </select>
              </div>

              <div>
                <Label htmlFor="titleColor">Title Color</Label>
                <select
                  name="titleColor"
                  id="titleColor"
                  onChange={this.changeHandler}
                  value={this.state.titleColor}
                >
                  <option value="black">black</option>
                  <option value="white">white</option>
                  {colors.map(color => {
                    if (color.color.toLowerCase() !== 'black') {
                      return <option value={color.color}>{color.color}</option>
                    }
                  })}
                </select>
              </div>
            </Row>

            <Row>
              <Button
                variant="contained"
                color="secondary"
                onClick={this.cancel}
              >
                Cancel
              </Button>
              <Button
                onClick={
                  this.props.update ? this.updateSection : this.addSection
                }
                variant="contained"
                color="primary"
              >
                Save Section
              </Button>
            </Row>
          </div>
        </form>
      </FormContainer>
    )
  }
}

const mapStateToProps = state => {
  return {
    currentUser: state.auth.currentUser,
    sections: state.clubs.sections,
    fonts: state.format.fonts,
    colors: state.format.colors,
  }
}

export default connect(
  mapStateToProps,
  { addSection, updateSection, startLoading }
)(SectionForm)
