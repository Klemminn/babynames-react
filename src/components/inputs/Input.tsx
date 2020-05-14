import React from 'react'
import { Input as BootstrapInput } from 'reactstrap'

type InputProps = {
  onChange?: Function,
  onChangeDelay?: number,
  [rest:string]: any
}

let changeIndex = 0
const Input = ({ onChange, onChangeDelay, ...rest }: InputProps) => (
  <BootstrapInput
    onChange={(e) => {
      const value = e.target.value
      if (onChange) {
        if (!onChangeDelay) {
          onChange(value)
        } else {
          // Wait to apply changes, and only apply if value hasn't been changed
          changeIndex++
          const currentIndex = changeIndex
          setTimeout(() => {
            if (currentIndex === changeIndex) {
              onChange(value)
            }
          }, onChangeDelay)
        }
      }
    }}
    {...rest}
  />
)

export default Input
