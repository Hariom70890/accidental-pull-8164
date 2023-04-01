import React from 'react'
import { Button } from '@chakra-ui/react'
const Buttonc = ({text,bgcolr,handleClick}) => {
  return (
    <Button style={{backgroundColor:bgcolr,borderRadius:"150px"}} onClick={()=>{
      handleClick()
    }}>{text}</Button>
  )
}

export default Buttonc