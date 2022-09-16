import React from 'react';
import screen1 from './screen1.svg';
import logo from './logo.png';

import { IconButton } from '@chakra-ui/react';
import {ArrowForwardIcon } from '@chakra-ui/icons';
export default function Screen1() {
  return (
    <div>
        <img src={screen1} alt="screen1" />
        <img src={logo} alt="logo" />
        <h3>Optimisim . Positivity . Inspire</h3>
        <IconButton aria-label='Next' colorScheme='blue' size='lg' icon={<ArrowForwardIcon />} />
        

    </div>
  )
}
