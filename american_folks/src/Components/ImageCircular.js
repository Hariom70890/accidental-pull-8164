import { Image } from '@chakra-ui/react'
import React from 'react'

// const images = [
//     "https://images.pexels.com/photos/14250012/pexels-photo-14250012.jpeg?auto=compress&cs=tinysrgb&w=600","https://images.pexels.com/photos/14250226/pexels-photo-14250226.jpeg?auto=compress&cs=tinysrgb&w=600","https://images.pexels.com/photos/8272074/pexels-photo-8272074.jpeg?auto=compress&cs=tinysrgb&w=600","https://images.pexels.com/photos/8272074/pexels-photo-8272074.jpeg?auto=compress&cs=tinysrgb&w=600","https://images.pexels.com/photos/8272074/pexels-photo-8272074.jpeg?auto=compress&cs=tinysrgb&w=600","https://images.pexels.com/photos/8272074/pexels-photo-8272074.jpeg?auto=compress&cs=tinysrgb&w=600","https://images.pexels.com/photos/7841968/pexels-photo-7841968.jpeg?auto=compress&cs=tinysrgb&w=600"
// ]

const ImageCircular = ({image}) => {
  return (
    <div  >
        {/* {images.map((e,i)=>{
            return(
                <img src={i} alt="" />
            )
        })} */}
        <img style={{borderRadius:"50%",width:"200px" ,height:"150px",padding:"20px"}} src={image} alt="" />
    </div>
  )
}

export default ImageCircular