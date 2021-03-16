import styled from 'styled-components'
import { motion } from 'framer-motion'

export const PostContent = styled(motion.div)`
  width: 100%;
  height: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: var(--white);
`
export const Title = styled(motion.h2)`
  color: var(--color-sec);
  text-align: left;
  width: 100%;
  max-width: var(--content-width);
  font-weight: 400;
  font-size: 1.4rem;
  font-size: 1.4rem;
`
export const Tags = styled(motion.ul)`
  margin-top: 2rem;
  font-size: 1rem;
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  max-width: var(--content-width);
  li {
    margin: 0.5rem 1rem 0.5rem 0;
    background: lightgray;
    color: black;
    padding: 0.25rem 0.5rem;
    border-radius: var(--radius-sm);
  }
`
