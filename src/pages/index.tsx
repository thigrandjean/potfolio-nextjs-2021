import HomeTemplate from 'templates/home'
import { PostProps } from 'components/PostList'
import client from 'graphql/client'
import { GetPostsQuery } from 'graphql/generated/graphql'
import { GET_POSTS } from 'graphql/queries'

export default function Home({ posts }: PostProps) {
  return <HomeTemplate posts={posts} />
}

export const getStaticProps = async () => {
  const { posts } = await client.request<GetPostsQuery>(GET_POSTS)
  return {
    revalidate: 60,
    props: {
      posts,
    },
  }
}
