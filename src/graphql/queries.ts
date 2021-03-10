import { gql } from 'graphql-request'

export const GET_POSTS = gql`
  query getPosts {
    posts {
      id
      title
      slug
      content
      coverImage {
        url
        width
        height
      }
      tags
    }
  }
`
