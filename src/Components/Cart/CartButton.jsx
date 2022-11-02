import { Button,ButtonGroup,styled } from '@mui/material'
import React from 'react'

const Wrapper = styled(ButtonGroup)`
    margin-top:30px;
    `
    const Btn = styled(Button)`
    border-radius: 50%;
    `

const CartButton = () => {
  return (
    <>
    <Wrapper>
        <Btn>-</Btn>
        <Btn>1</Btn>
        <Btn>+</Btn>
    </Wrapper>
    </>
  )
}

export default CartButton