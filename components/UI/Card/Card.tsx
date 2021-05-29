import React from 'react'
import Image from 'next/image'
import { Box, Heading, Text, Stack, useColorModeValue } from '@chakra-ui/react'
import { formatDate, formatNumber } from '../../../utils/functions'

export interface ICard {
  release_date: Date
  title: string
  image: string
  like: number
  cursor?: 'pointer' | 'none'
}

const Card: React.FC<ICard> = ({ release_date, title, image, like, cursor }) => {
  return (
    <Box
      maxW={250}
      w={250}
      bg={useColorModeValue('white', 'gray.900')}
      boxShadow={'2xl'}
      rounded={'md'}
      p={6}
      overflow={'hidden'}
      cursor={cursor}
    >
      <Box maxH={250} h={250} bg={'gray.100'} mt={-6} mx={-6} mb={6} pos={'relative'}>
        <Image src={image} layout={'fill'} />
      </Box>
      <Stack>
        <Heading color={useColorModeValue('gray.700', 'white')} fontSize={'medium'} fontFamily={'body'} isTruncated>
          {title}
        </Heading>
      </Stack>
      <Stack mt={6} direction={'row'} spacing={4} align={'center'}>
        <Stack direction={'column'} spacing={0} fontSize={'sm'}>
          <Text fontWeight={600}>Release Date: {formatDate(release_date, 'dd MMM, yyyy')}</Text>
          <Text color={'gray.500'}>Like: {formatNumber(like)}</Text>
        </Stack>
      </Stack>
    </Box>
  )
}

export default Card
