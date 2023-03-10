import React from 'react'

function ErrorMessage (props) {
  return (
    <p style={{ color: '#f9293e', fontWeight: '500' }}>{props.children}</p>
  )
}
export default ErrorMessage
