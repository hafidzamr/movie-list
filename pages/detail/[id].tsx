import React from 'react';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import Image from 'next/image';
import Layout from '../../components/Layout';
import { Box, Stack, Heading, Text, HStack } from '@chakra-ui/react';
import { formatDate, formatNumber } from '../../utils/functions';

export interface IMovie {
  id: string;
  release_date: Date;
  title: string;
  image: string;
  like: number;
  overview: string;
}

export interface IMovieDetail {
  movieDetail: IMovie;
}

export const getServerSideProps: GetServerSideProps<IMovieDetail> = async (context) => {
  const movieID = context.query.id;
  const response = await fetch(`https://hafidzamr.tech/api/movie/${movieID}`);
  const movieDetail: IMovie = await response.json();
  return {
    props: { movieDetail },
  };
};

/**
 * Make Props  automatically infer the types besad on getServerSideProps
 * https://nextjs.org/docs/basic-features/data-fetching
 */

type Props = InferGetServerSidePropsType<typeof getServerSideProps>;

const DetailMovie = ({ movieDetail }: Props) => {
  return (
    <Layout>
      <HStack wrap="wrap" justify="center">
        <Box justify="center">
          <Image src={movieDetail.image} width={300} height={350} />
        </Box>

        <Box maxW={500}>
          <Stack>
            <Heading fontSize={'2xl'} fontFamily={'body'}>
              {movieDetail.title}
            </Heading>
            <Text as="p" fontSize="sm" textAlign="justify">
              {movieDetail.overview}
            </Text>
            <Text color={'gray.500'}>Release Date: {formatDate(movieDetail.release_date, 'dd MMM, yyyy')}</Text>
            <Text color={'gray.500'}>Like: {formatNumber(movieDetail.like)}</Text>
          </Stack>
        </Box>
      </HStack>
    </Layout>
  );
};

export default DetailMovie;
