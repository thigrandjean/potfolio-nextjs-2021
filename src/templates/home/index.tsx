import Bio from 'components/Bio'
import SiteFooter from 'components/SiteFooter'
import SiteHero from 'components/Hero'
import PostList, { PostProps } from 'components/PostList'
import React from 'react'

export default function HomeTemplate({ posts }: PostProps) {
  return (
    <>
      <SiteHero />
      <Bio />
      <PostList posts={posts} />
      <SiteFooter />
    </>
  )
}
