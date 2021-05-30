import React from 'react';
import Head from 'next/head';
import { Container } from '@chakra-ui/react';
import Navbar from './Navbar';

const Layout: React.FC = ({ children }): JSX.Element => (
  <>
    <Head>
      <title>Movie - List</title>
    </Head>
    <Navbar />
    <Container maxW="container.xl" marginY={50}>
      {children}
    </Container>
  </>
);

export default Layout;
