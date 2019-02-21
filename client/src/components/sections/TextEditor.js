import React from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'

const TextEditor = props => {
  return (
    <div className="text-editor" style={{ width: '80%' }}>
      <label htmlFor="body">Section Body</label>
      <ReactQuill
        label="Section Body"
        modules={TextEditor.modules}
        formats={TextEditor.formats}
        id="body"
        name="body"
        onChange={props.bodyChangeHandler}
        value={props.body}
      />
    </div>
  )
}

TextEditor.modules = {
  toolbar: [
    [{ header: '1' }, { header: '2' }],
    [{ size: [] }],
    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
    [{ color: [] }],
    [{ align: [] }],
    [
      { list: 'ordered' },
      { list: 'bullet' },
      { indent: '-1' },
      { indent: '+1' },
    ],
    ['clean'],
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
  'indent',
  'color',
  'align',
]

export default TextEditor
