import React from 'react';
import { Box, CircularProgress, CircularProgressLabel, Flex } from '@chakra-ui/react'

const Loading = () => {
  return (
    <Flex justifyContent="center" alignItems="center">
      <CircularProgress isIndeterminate color='orange.300' size="xs" />
    </Flex>
  )
}

export default Loading