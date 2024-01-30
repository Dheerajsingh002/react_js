import React from 'react'
import { useParams } from 'react-router-dom'

function Dynamic() {
  return (
    <div>{JSON.stringify(useParams().id)}</div>
  )
}

export default Dynamic