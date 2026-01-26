import React from 'react'
import './Alert.css'

function Alert(props) {
  return (
    <div className={`alert alert-${props.type}`}>
        Trang thai alert: {props.type}
    </div>
  )
}

export default Alert