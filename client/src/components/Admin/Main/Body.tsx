import React from 'react'
import { Form } from 'antd'
import { RouteComponentProps } from 'react-router'
import { useSelector } from 'react-redux'

import styled from 'styled-components'
import { getPopulatMovieByID } from '../../../redux'

const Container = styled.article`
  display: grid;

  justify-items: center;
  align-items: center;

  gap: 10px;

  width: 80%;
  max-width: 980px;

  margin: auto;
  padding: 50px 0;
`

const FormStyles = styled(Form)`
  display: flex;

  flex-direction: column;
`

const InputContainer = styled.div`
  display: grid;

  grid-template-columns: 100px 1fr;

  gap: 20px;

  margin-bottom: 10px;
`

const keyMap = [
  {
    label: 'Title:',
    name: 'title',
    required: true,
  },
  {
    label: 'Description:',
    name: 'description',
    required: true,
  },
  {
    label: 'Release date:',
    name: 'release_date',
    required: true,
  },
  {
    label: 'Vote average:',
    name: 'vote_average',
  },
  {
    label: 'Adult:',
    name: 'adult',
  },
  {
    label: 'Poster path:',
    name: 'poster_path',
  },
  {
    label: 'Backdrop path:',
    name: 'backdrop_path',
  },
]

const Body: React.FC<RouteComponentProps<{ command: 'edit' | 'create'; id?: string }>> = (props) => {
  const { command, id = 0 } = props.match.params

  const isEditMode = command === 'edit'

  const game = useSelector(getPopulatMovieByID(Number(id)))

  const onSubmit = (value: any) => {
    console.log(value)
  }

  const isValueAvailable = !!game && isEditMode

  return (
    <Container>
      <FormStyles onFinish={onSubmit}>
        {keyMap.map((key) => (
          <InputContainer id={key.name}>
            <label>{key.label}</label>
            <FormStyles.Item
              name={key.name}
              rules={[{ required: key?.required || false }]}
              // @ts-ignore
              initialValue={isValueAvailable ? game[key.name] : ''}
            >
              <input />
            </FormStyles.Item>
          </InputContainer>
        ))}
        <button type="submit">Submit</button>
      </FormStyles>
    </Container>
  )
}

export { Body }
