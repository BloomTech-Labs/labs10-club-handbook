import React from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'

import { RichEditor } from '../../style/section-form'

const TextEditor = props => {
  return (
    <RichEditor
      label="Section Body"
      modules={TextEditor.modules}
      formats={TextEditor.formats}
      id="body"
      name="body"
      onChange={props.bodyChangeHandler}
      value={props.body}
    />
  )
}

TextEditor.modules = {
  toolbar: [
    [{ header: '1' }, { header: '2' }],
    [{ size: [] }],
    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
    [{ color: [] }],
    [{ list: 'ordered' }, { list: 'bullet' }],
  ],
}

TextEditor.formats = [
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
  'color',
]

export default TextEditor
