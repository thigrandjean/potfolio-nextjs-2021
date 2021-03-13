import Bio from 'components/Bio'
import SiteFooter from 'components/SiteFooter'
import SiteHero from 'components/Hero'
import PostList, { PostProps } from 'components/PostList'
import React from 'react'
import { relative } from 'node:path'

export default function HomeTemplate({ posts }: PostProps) {
  return (
    <div style={{ position: 'relative' }}>
      <SiteHero />
      <Bio />
      <PostList posts={posts} />
      <SiteFooter />
    </div>
  )
}
