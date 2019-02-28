import React from 'react'

const DetailsView = props => {
  return (
    <div className="title-input">
      <h2>Handbook Title:</h2>
      <input
        type="text"
        name="title"
        value={props.title}
        onChange={props.handleChange}
      />
      {props.hasClub ? (
        <button type="submit">Update Handbook</button>
      ) : (
        <button type="submit">Create Handbook</button>
      )}
    </div>
  )
}

export default DetailsView
