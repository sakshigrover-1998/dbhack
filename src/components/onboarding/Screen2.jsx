import React from 'react'
import screen2 from './screen2.svg';

import { IconButton } from '@chakra-ui/react';
import {ArrowForwardIcon } from '@chakra-ui/icons';
export default function Screen2() {
  return (
    <div>
        <img src={screen2} alt="screen2" />
        
        <h3>Changing unhealthy habit <br/> of thoughts</h3>
        <IconButton aria-label='Next' colorScheme='blue' size='lg' icon={<ArrowForwardIcon />} />
        

    </div>
  )
}
