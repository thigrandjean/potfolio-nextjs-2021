import styled from 'styled-components'

export const Form = styled.form`
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  width: 100%;
`
export const Label = styled.label`
  color: var(--white);
  margin: 1rem 0 0.25rem 0;
`
export const Input = styled.input`
  height: 2.5rem;
  width: 100%;
  font-size: 1.5rem;
  padding: 0.5rem 0.5rem;
  border: none;
  border-radius: var(--radius-sm);
`
export const TextArea = styled(Input)`
  min-height: 10rem;
  resize: vertical;
`
export const Button = styled.button`
  background: var(--color-sec);
  outline: none;
  border: none;
  border-radius: var(--radius-sm);
  margin: 2rem 0;
  height: 2.5rem;
  width: 15rem;
  align-self: flex-end;
  font-weight: 700;
  cursor: pointer;
  transition: background 0.3s ease-in-out;
  &:hover {
    background: var(--color-thi);
  }
`
