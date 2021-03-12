import TxtBar from 'components/TxtBar'
import Image from 'next/image'
// import Link from 'next/link'
import * as S from './styles'

type ImageProps = {
  url: string
  width: number
  height: number
}

type Post = {
  id: string
  title: string
  slug: string
  content: string
  coverImage: ImageProps[]
  tags: string[]
}

export type PostProps = {
  posts: Post[]
}

export default function PostList({ posts }: PostProps) {
  return (
    <>
      {posts.map(({ title, slug, content, tags, coverImage }, index) => {
        const isEven = index % 2 != 0 ? true : false
        return (
          <S.PostWrapper key={slug}>
            <S.PostCover isRight={isEven}>
              <Image
                src={coverImage[0].url}
                alt={title}
                layout="fill"
                objectFit="cover"
              />
            </S.PostCover>
            <S.PostContent>
              <S.Title>{title}</S.Title>
              <TxtBar>{content}</TxtBar>
              <S.Tags>
                {tags.map((tag) => {
                  return <li key={tag}>{tag}</li>
                })}
              </S.Tags>
            </S.PostContent>
            <S.IndexNum isLeft={isEven}>
              {index < 8 ? `0${index + 1}` : index + 1}
            </S.IndexNum>
          </S.PostWrapper>
        )
      })}
    </>
  )
}
