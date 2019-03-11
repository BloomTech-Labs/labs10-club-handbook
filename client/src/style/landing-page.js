import styled from 'styled-components'
import { Button } from '@material-ui/core'
import { size } from './breakpoints'

export const Heading = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 7.2rem;
  color: rgb(0, 153, 255);
  line-height: 1.1;
  letter-spacing: 1px;
  width: 100%;

  .heading-title {
    line-height: 1.3;
    letter-spacing: 1px;
    font-weight: bold;
    text-shadow: 0 1px 0 gray;
    width: 100%;
    text-align: center;
    margin-bottom: 10rem;

    h1 {
      font-size: 4.5rem;
    }
  }

  .action-div {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    background: url('../assets/images/background-blue-design-925708.jpg');

    h5 {
      font-size: 3rem;
      text-shadow: 0 1px 0 gray;
      margin-bottom: 2rem;
    }

    .for-members,
    .for-admins {
      height: 15rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 2rem;
      color: rgb(0, 153, 255);
      font-weight: bold;
    }

    .for-members {
      margin-right: 10rem;
    }
  }
`

export const ActionButton = styled(Button)`
  :hover {
    transform: translateY(-2px);
    box-shadow: -1px 1px 15px black;
    color: ${props => (props.members ? 'black' : 'white')};
  }

  :active {
    transform: translateY(0);
    box-shadow: 0 1px 5px black;
  }
`

export const ProcessContainer = styled.div`
  padding: 15rem 0;
  background: white;
  border-bottom: 0px solid gray;
  box-shadow: 0 0px 2px grey;
`

export const SubscriptionCard = styled.div`
  width: 20rem;
  height: 25rem;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  background: white;
  border: 1px solid gray;
  border-radius: 10px;
  box-shadow: 0 1px 5px black;
`
