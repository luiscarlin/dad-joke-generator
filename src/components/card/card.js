import React from 'react'
import styled from 'styled-components'
import colors from '../../colors'
import useDad from '../../hooks/useDad'

const Card = styled.div`
  display: flex;
  width: 100%;
  margin: 0 auto;
  background: ${colors.surface};
  box-shadow: 0 32px 44px 0 rgba(64, 68, 90, 0.2);
  border-radius: 30px;
  flex-direction: column;
  padding: 80px 50px;
  min-height: 600px;
  max-width: 1000px;

  @media only screen and (max-width: 900px) {
    padding: 80px 40px;
    min-height: 400px;
  }

  @media only screen and (max-width: 600px) {
    padding: 50px 30px;
    min-height: 300px;
  }
`

const Joke = styled.div`
  margin-bottom: 20px;
`

const Gif = styled.img`
  width: 100%;
  height: auto;
`

export default () => {
  const [joke, gif] = useDad()

  return (
    <Card>
      <Joke>
        <p>{joke}</p>
      </Joke>
      <Gif src={gif} />
    </Card>
  )
}
