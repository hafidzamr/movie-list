import React from 'react'
import Head from 'next/head'
import Navbar from './Navbar'
import { Container } from '@chakra-ui/react'

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Head>
        <title>Movie - List</title>
      </Head>
      <Navbar />
      <Container maxW="container.xl" marginY={50}>
        {children}
      </Container>
    </>
  )
}

export default Layout
