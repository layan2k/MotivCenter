import React,{useState} from 'react'
import styled from 'styled-components'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const Container = styled.div`
  min-height: 100vh;
  padding: 0 30px;
  margin-top: 20px;
  display: flex;
  gap: 20px;
  padding-bottom: 100px;
`
const Content = styled.div`
  flex: 5;
  display: flex;
  flex-direction: column;
  gap: 20px;
  input {
    padding: 10px;
    border: 1px solid lightgray;
  }
`
const InpArea = styled.input``
const EditorContainer = styled.div`
  height: 400px;
  overflow: scroll;
  overflow-x: hidden;
  border: 1px solid lightgray;
  .editor{
    height: 100%;
    border: none;
  }
`
const WriteMenu = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  gap: 20px;
  .file{
    text-decoration: underline;
    cursor: pointer;
  }
`
const Item = styled.div`
  border: 1px solid lightgray;
  padding: 10px;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-size: 12px;
  color: #555;
`

const Publish = styled.h1`
  font-size: 20px;
`
const Status = styled.span``
const Visibility = styled.span``
const Buttons = styled.div `
  display: flex;
  justify-content: space-between;
  *{


  &:first-child{
    cursor: pointer;
    color: teal;
    background-color: white;
    border: 1px solid teal;
    padding: 3px 5px;
  }
  &:last-child{
    cursor: pointer;
    color: white;
    background-color: teal;
    border: 1px solid teal;
    padding: 3px 5px;
  }
}
`
const Category = styled.h1``
const CategoryContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 2px;
  color: teal;

`


const BlogWrite = () => {
  const [value, setValue] = useState('');
  return (
    <Container>
      <Content>
        <input placeholder='Title' />
        <EditorContainer>
          <ReactQuill className='editor' theme="snow" value={value} onChange={setValue} />
        </EditorContainer>
      </Content>
      <WriteMenu>
        <Item>
          <Publish>Publish</Publish>
          <Status>
            <b>Status:</b> Draft
          </Status>
          <Visibility>
            <b>Visibility:</b> Public
          </Visibility>
          <InpArea style={{display:"none"}} type="file" id="file" />
          <label className='file' htmlFor="file">Upload Image</label>
          <Buttons>
            <button>Save As Draft</button>
            <button>Update</button>
          </Buttons>
        </Item>
        <Item>
          <Category>Category</Category>
          <CategoryContainer>
          <InpArea type="radio" name="cat" value="selling" id="selling" />
          <label htmlFor="selling">Sales</label>
          </CategoryContainer>
          <CategoryContainer>

          <InpArea type="radio" name="cat" value="motivation" id="motivation" />
          <label htmlFor="motivation">Motivation</label>

          </CategoryContainer>
          <CategoryContainer>
          <InpArea type="radio" name="cat" value="leadership" id="leadership" />
          <label htmlFor="leadership">Leadership</label>
          </CategoryContainer>
          <CategoryContainer>
          <InpArea type="radio" name="cat" value="goals" id="goals" />
          <label htmlFor="goals">Goals</label>
          </CategoryContainer>
          <CategoryContainer>
          <InpArea type="radio" name="cat" value="speaking" id="speaking" />
          <label htmlFor="speaking">Speaking</label>
          </CategoryContainer>

        </Item>
      </WriteMenu>
    </Container>
  )
}

export default BlogWrite