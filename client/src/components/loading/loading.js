import React from 'react'
import { LoadingWindow } from '../../style/loading'
import ReactLoading from 'react-loading'

export default function LoadingPage() {
  return (
    <LoadingWindow>
      <ReactLoading type={'spokes'} color={'rgb(65,82,179)'} />
    </LoadingWindow>
  )
}
