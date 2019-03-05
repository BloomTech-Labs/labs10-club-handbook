import React from 'react'
import { HandbookButton } from '../../../style/handbook-page/handbook'

const DetailsView = props => {
  return (
    <>
      <h3>Handbook Title: {props.club.name}</h3>
      <input
        type="text"
        name="title"
        value={props.title}
        onChange={props.handleChange}
      />
      {props.club.name || props.club.name == '' ? (
        <button onClick={props.updateClub}>Update Handbook</button>
      ) : (
        <button onClick={props.createClub}>Create Handbook</button>
      )}

      <HandbookButton onClick={props.displayHandbook}>
        View Handbook
      </HandbookButton>
    </>
  )
}

export default DetailsView
