import { Heading, Flex } from '@chakra-ui/react';
import Link from 'next/link';

const Navbar = (): JSX.Element => (
  <Flex as="nav" align="center" justify="space-between" wrap="wrap" paddingY={4} paddingX={6} background="red.500" color="white">
    <Flex align="center" mr={5}>
      <Link href="/">
        <a>
          <Heading size="md">Movie - List</Heading>
        </a>
      </Link>
    </Flex>
  </Flex>
);

export default Navbar;
