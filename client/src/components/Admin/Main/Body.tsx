import React from 'react'
import { Form, Select } from 'antd'
import { RouteComponentProps } from 'react-router'
import { useSelector, useDispatch } from 'react-redux'

import styled from 'styled-components'
import { getPopulatMovieByID, updateFilm, getCategories } from '../../../redux'

const { Option } = Select

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
  const dispatch = useDispatch()

  const isEditMode = command === 'edit'

  const game = useSelector(getPopulatMovieByID(Number(id)))
  const categories = useSelector(getCategories)

  const onSubmit = async (value: any) => {
    const nonNullValue = Object.keys(value)
      .filter((key) => !!value[key])
      .reduce((acc, v) => ({ ...acc, [v]: value[v] }), {})

    // @ts-ignore
    await dispatch(updateFilm({ type: command, id, data: nonNullValue }))
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

        <InputContainer>
          <label>Category: </label>
          <FormStyles.Item name="categories" initialValue={game?.categories.map(({ name }) => name)}>
            <Select mode="multiple">
              {categories.map((category) => (
                <Option key={category.category_id} value={String(category.category_id)}>
                  {category.name}
                </Option>
              ))}
            </Select>
          </FormStyles.Item>
        </InputContainer>
        <button type="submit">Submit</button>
      </FormStyles>
    </Container>
  )
}

export { Body }
