/** @jsx jsx */
import {jsx} from '@emotion/core'

import React from 'react'
import {Dialog} from './lib'

const callAll =
  (...fns) =>
  (...args) =>
    fns.forEach(fn => fn && fn(...args))

const ModalContext = React.createContext()

const Modal = props => {
  const [isOpen, setIsOpen] = React.useState(false)

  return <ModalContext.Provider value={{isOpen, setIsOpen}} {...props} />
}

const ModalDismissButton = ({children: child}) => {
  const {setIsOpen} = React.useContext(ModalContext)
  const onClickHandler = callAll(() => setIsOpen(false), child.props.onClick)

  return React.cloneElement(child, {onClick: onClickHandler})
}

const ModalOpenButton = ({children: child}) => {
  const {setIsOpen} = React.useContext(ModalContext)
  const onClickHandler = callAll(() => setIsOpen(true), child.props.onClick)

  return React.cloneElement(child, {onClick: onClickHandler})
}

const ModalContents = props => {
  const {isOpen, setIsOpen} = React.useContext(ModalContext)

  return (
    <Dialog isOpen={isOpen} onDismiss={() => setIsOpen(false)} {...props} />
  )
}

export {Modal, ModalDismissButton, ModalOpenButton, ModalContents}
