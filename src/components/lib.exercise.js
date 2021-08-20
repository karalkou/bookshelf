import styled from '@emotion/styled/macro'
import { Dialog as ReachDialog } from '@reach/dialog'
import * as colors from 'styles/colors'
import * as mq from 'styles/media-queries'
import { keyframes } from '@emotion/core'
import { FaSpinner } from 'react-icons/fa'

const spin = keyframes({
  '0%': {transform: 'rotate(0deg)'},
  '100%': {transform: 'rotate(360deg)'},
})

const Spinner = styled(FaSpinner)({
  animation: `${spin} 1s linear infinite`,
})
Spinner.defaultProps = {
  'aria-label': 'loading',
}

const Button = styled.button(({ variant }) => {
    let mainStyles = {
      padding: '10px 15px',
      border: '0',
      lineHeight: '1',
      borderRadius: '3px',
    }
    if (variant === 'primary') {
      mainStyles = {
        ...mainStyles,
        background: colors.indigo,
        color: colors.base,
      }
    }
    if (variant === 'secondary') {
      mainStyles = {
        ...mainStyles,
        background: colors.gray,
        color: colors.text,
      }
    }
    return mainStyles
  },
)

const Input = styled.input({
  borderRadius: '3px',
  border: `1px solid ${colors.gray10}`,
  background: colors.gray,
  padding: '8px 12px',
})

const FormGroup = styled.div({
  display: 'flex',
  flexDirection: 'column',
})

// 💰 I'm giving a few of these to you:
const CircleButton = styled.button({
  borderRadius: '30px',
  padding: '0',
  width: '40px',
  height: '40px',
  lineHeight: '1',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: colors.base,
  color: colors.text,
  border: `1px solid ${colors.gray10}`,
  cursor: 'pointer',
})

const Dialog = styled(ReachDialog)({
  maxWidth: '450px',
  borderRadius: '3px',
  paddingBottom: '3.5em',
  boxShadow: '0 10px 30px -5px rgba(0, 0, 0, 0.2)',
  margin: '20vh auto',
  [mq.small]: {
    width: '100%',
    margin: '10vh auto',
  },
})

export { Button, Input, CircleButton, Dialog, FormGroup, Spinner }
