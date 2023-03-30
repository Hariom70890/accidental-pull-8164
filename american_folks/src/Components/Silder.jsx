import { useState } from "react";
import { Box, Image, Button, Flex } from "@chakra-ui/react";

function ImageSlider({ images }) {
  const [index, setIndex] = useState(0);

  const handlePrevClick = () => {
    setIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNextClick = () => {
    setIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <Box>
      <Flex alignItems="center">
        <Button onClick={handlePrevClick}>Prev</Button>
        <Box flex="1" textAlign="center">
          <Image src={images[index]} alt={`Image ${index + 1}`} />
        </Box>
        <Button onClick={handleNextClick}>Next</Button>
      </Flex>
    </Box>
  );
}
export default ImageSlider