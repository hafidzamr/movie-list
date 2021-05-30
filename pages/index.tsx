import React, { useState } from 'react'
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import { Flex, Wrap, WrapItem, InputGroup, Input, Box, Center, Button } from '@chakra-ui/react'
import { formatDate } from '../utils/functions'
import Layout from '../components/Layout'
import Card from '../components/UI/Card'
import { DatePickerProps } from 'react-rainbow-components/components/DatePicker/'
/**
 * This Module not yet support SSR
 * i think still on Discuss for supporting SSR https://github.com/nexxtway/react-rainbow/projects/1
 */
const DatePicker = dynamic<DatePickerProps>(() => import('react-rainbow-components').then((module) => module.DatePicker), {
  ssr: false,
  loading: () => <p>Loading...</p>
})

export interface IMovie {
  id: string
  release_date: Date
  title: string
  image: string
  like: number
}

export interface IMovieDetail {
  movies: Array<IMovie>
}

export const getServerSideProps: GetServerSideProps<IMovieDetail> = async () => {
  const response = await fetch('https://hafidzamr.tech/api/movie')
  const errorCode = response.ok ? false : response.status

  const movies: Array<IMovie> = await response.json()

  return {
    props: { errorCode, movies }
  }
}

/**
 * Make Props  automatically infer the types besad on getServerSideProps
 * https://nextjs.org/docs/basic-features/data-fetching
 */

type Props = InferGetServerSidePropsType<typeof getServerSideProps>

const Home = ({ movies }: Props) => {
  const [dateFilter, setDateFilter] = useState<Date>(new Date())
  const [movieList, setMovieList] = useState(movies)

  const handleDateFilter = (newDate: Date) => {
    setDateFilter(newDate)
    const filterMovieByDate = movies.filter(
      (movie) => formatDate(movie.release_date, 'dd MMM, yyyy') === formatDate(newDate, 'dd MMM, yyyy')
    )
    setMovieList(filterMovieByDate)
  }

  const handleFilterMovie = (event: React.ChangeEvent<HTMLInputElement>) => {
    const keyowrd = event.target.value.toLocaleLowerCase()
    const filterResult = movies.filter((movie) => movie.title.toLowerCase().includes(keyowrd))
    setMovieList(filterResult)
  }

  const handleResetFilterDate = () => {
    setDateFilter(new Date())
    setMovieList(movies)
  }

  return (
    <Layout>
      <Flex marginBottom={20} justify="space-between" wrap="wrap">
        <Box>
          <InputGroup size="md">
            <Input pr="4.5rem" placeholder="Seach Movie..." onChange={handleFilterMovie} />
          </InputGroup>
        </Box>

        <Flex wrap="wrap">
          <Box marginX={3}>
            <DatePicker value={dateFilter} onChange={(date) => handleDateFilter(date)} formatStyle="large" />
          </Box>

          <Button onClick={handleResetFilterDate}>Reset Filter</Button>
        </Flex>
      </Flex>
      {!movieList.length ? (
        <Center>Tidak Ada Movie</Center>
      ) : (
        <Wrap justify="center">
          {movieList.map((movie) => (
            <WrapItem paddingBottom={3} paddingX={1} key={movie.id}>
              <Link href={`/detail/${movie.id}`}>
                <a>
                  <Card title={movie.title} image={movie.image} like={movie.like} release_date={movie.release_date} cursor="pointer" />
                </a>
              </Link>
            </WrapItem>
          ))}
        </Wrap>
      )}
    </Layout>
  )
}

export default Home
