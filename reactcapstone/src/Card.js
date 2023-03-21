import {ReactComponent as Basket} from './assets/Basket.svg';
import { Link } from "react-router-dom"
import React from "react"

// const Card = ({ title, description, imageSrc }) => {
//   return (
//   <Box roundedTop="20" roundedBottom="20" backgroundColor="#ffffff" >
//   <Image borderRadius="20px" src={imageSrc} alt="cardimage" />
//   <Stack px={4} py={4}>
//   <Heading py={2} px={2} fontFamily="helvetica" color="#2a2a2a" as='h4' size='md'>{title}</Heading>
//   <Text px={2} fontSize="20px" color="#64748b" fontFamily="Calibri">{description}</Text>;
//   <HStack py={2} px={2} color="black"><a href="https://www.youtube.com/watch?v=s0akG-V_Y30">See more</a> <FontAwesomeIcon icon={faArrowRight} size="1x" /></HStack>
//   </Stack>
//   </Box>
// )};

const Card = ({ title, price, description, imageSrc }) => {
    return(
        <div class="cardContainer">
            <img src={imageSrc} />
            <text>{title}</text>
            <text>{price}</text>
            <text>{description}</text>
            <button><Link to={"/"}>
                Online Menu <Basket />
            </Link></button>
        </div>
    );
}

export default Card;