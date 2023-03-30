import React from 'react'
import { Button } from '@chakra-ui/react'
const Buttonc = ({text,bgcolr}) => {
  return (
    <Button style={{backgroundColor:bgcolr,borderRadius:"150px"}}>{text}</Button>
  )
}

export default Buttonc