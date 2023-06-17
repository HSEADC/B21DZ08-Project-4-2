import React from 'react';
import './A_Input.scss'
import classnames from 'classnames'

export default class A_Input extends React.Component {

    constructor(props) {
        super(props)
        this.input = React.createRef()
      }
    
      handleInput = () => {
        const { value } = this.input.current
        const { handleInput } = this.props
        handleInput(value)
      }

    render() {

        const { value, placeholder, handleSubmit, onChange } = this.props

        return (
         <input
          className="A_Input"
          ref={this.input}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          onInput={this.handleInput}
          onKeyDown={(e) => e.key === 'Enter' && handleSubmit()}
         />
    )
    }
  }