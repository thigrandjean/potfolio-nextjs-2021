import styled from 'styled-components'

export const PostWrapper = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  &:after {
    content: '';
    width: 100%;
    height: 0.5rem;
    background: var(--color-sec);
  }
`
export const PostCover = styled.div`
  position: relative;
  background: grey;
  height: 50%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  img {
    width: 100%;
    object-fit: cover;
  }
`
export const PostContent = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: var(--white);
`
export const Tags = styled.ul`
  margin-top: 2rem;
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  max-width: var(--content-width);
  li {
    margin: 0.5rem;
    background: lightgray;
    color: black;
    padding: 0.25rem 0.5rem;
    border-radius: var(--radius-sm);
  }
`
export const IndexNum = styled.div`
  color: var(--white);
  font-size: 12rem;
  position: absolute;
  bottom: -2.7rem;
  right: 0;
  opacity: 0.1;
  font-weight: 700;
`
