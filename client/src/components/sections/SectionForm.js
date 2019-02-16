import React, { Component } from 'react'
import axios from 'axios'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import renderHtml from 'react-render-html'
import {
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  OutlinedInput,
  MenuItem,
} from '@material-ui/core'

class SectionForm extends Component {
  state = {
    title: '',
    isSubSection: false,
    body: '',
    imgUrl: '',
    imgPosition: null,
    orderPosition: null,
    clubId: null,
    contactName: '',
    contactEmail: '',
    contactPhone: null,
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

  render() {
    return (
      <div className="section-form">
        <form method="/POST" encType="multipart/form-data">
          <div className="form-group">
            <TextField
              label="Section Title"
              id="title"
              name="title"
              onChange={this.changeHandler}
              margin="normal"
              variant="outlined"
              style={{ width: 500 }}
              required
            />

            <div className="text-editor" style={{ width: '80%' }}>
              <label htmlFor="body">Section Body Text</label>
              <ReactQuill
                label="Section Body"
                modules={SectionForm.modules}
                formats={SectionForm.formats}
                id="body"
                name="body"
                onChange={this.bodyChangeHandler}
                value={this.state.body}
              />
            </div>

            <FormControl variant="outlined">
              <InputLabel htmlFor="img-position">Image Position</InputLabel>
              <Select
                value={this.state.imgPosition}
                onChange={this.changeHandler}
                input={
                  <OutlinedInput
                    name="img-position"
                    id="img-position"
                    labelWidth={0}
                    style={{ width: 100 }}
                  />
                }
              >
                <MenuItem value="background">Background</MenuItem>
                <MenuItem value="top">Top</MenuItem>
                <MenuItem value="right">Right</MenuItem>
                <MenuItem value="bottom">Bottom</MenuItem>
                <MenuItem value="left">Left</MenuItem>
              </Select>
            </FormControl>

            <TextField
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
          </div>

          <Button variant="contained" color="primary">
            Submit
          </Button>
        </form>
      </div>
    )
  }
}

SectionForm.modules = {
  toolbar: [
    [{ header: '1' }, { header: '2' }, { font: [] }],
    [{ size: [] }],
    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
    [{ color: [] }, { background: [] }],
    [{ align: [] }],
    [
      { list: 'ordered' },
      { list: 'bullet' },
      { indent: '-1' },
      { indent: '+1' },
    ],
    ['link', 'image'],
    ['clean'],
  ],
}

SectionForm.formats = [
  'header',
  'font',
  'size',
  'bold',
  'italic',
  'underline',
  'strike',
  'blockquote',
  'list',
  'bullet',
  'indent',
  'link',
  'image',
  'color',
  'background',
  'align',
]

export default SectionForm
