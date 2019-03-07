import React from 'react'
import styled from 'styled-components'

const Title = styled.h3`
  text-align: center;
  margin-top: -2rem;
  margin-bottom: 4rem;
  letter-spacing: 1px;
  line-height: 1.1;
  text-shadow: 0 1px 10px black;
`

const InputField = styled.input`
  width: 100%;
  padding: 0.5rem 1rem;
  border: 1px solid lightgray;
  border-radius: 5px;
  box-shadow: 0 1px 1px black;
  margin-bottom: 2rem;
  font-size: 1.2rem;
`

const Button = styled.button`
  width: 100%;
  margin: 0 auto;
  padding: 1rem 2rem;
  border: 0px solid black;
  border-radius: 5px;
  box-shadow: 0 1px 5px black;
  background: cornflowerblue;
  color: white;
  font-size: 1.4rem;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: 1px;
  cursor: pointer;
  text-shadow: 0 1px 5px black;

  :hover {
    transform: translateY(-2px);
    box-shadow: -1px 1px 25px black;
  }

  :active {
    transform: translateY(0);
    box-shadow: 0 1px 5px black;
  }
`

const DetailsView = props => {
  return (
    <>
      <Title>{props.club.name}</Title>
      <InputField
        type="text"
        name="title"
        value={props.title}
        placeholder="...handbook name"
        onChange={props.handleChange}
      />
      {props.club.name || props.club.name == '' ? (
        <Button onClick={props.updateClub}>Update</Button>
      ) : (
        <Button onClick={props.createClub}>Create Handbook</Button>
      )}
    </>
  )
}

export default DetailsView
