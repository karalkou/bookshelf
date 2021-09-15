/** @jsx jsx */
import {jsx} from '@emotion/core'

import React from 'react'
import VisuallyHidden from '@reach/visually-hidden'
import {Dialog, CircleButton} from './lib'

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

function ModalContentsBase(props) {
  const [isOpen, setIsOpen] = React.useContext(ModalContext)
  return (
    <Dialog isOpen={isOpen} onDismiss={() => setIsOpen(false)} {...props} />
  )
}

function ModalContents({title, children, ...props}) {
  return (
    <ModalContentsBase {...props}>
      <div css={{display: 'flex', justifyContent: 'flex-end'}}>
        <ModalDismissButton>
          <CircleButton>
            <VisuallyHidden>Close</VisuallyHidden>
            <span aria-hidden>×</span>
          </CircleButton>
        </ModalDismissButton>
      </div>
      <h3 css={{textAlign: 'center', fontSize: '2em'}}>{title}</h3>
      {children}
    </ModalContentsBase>
  )
}

export {Modal, ModalDismissButton, ModalOpenButton, ModalContents}
