import React from 'react'
import { useState } from 'react'
import Label from '../components/Label'
import MDEditor from '@uiw/react-md-editor'
import Dropdown from '../components/Dropdown'
import {
  Container,
  Divider,
  HeadBox,
  DropdownBox,
  DropdownWrap,
  TitleInput,
  SubmitBtnWrap,
  SubmitBtn
} from '../styles/PostUploadStyle'

// Test용 API
const tempAPI = (data) => {
  return new Promise((resolve,) => {
    setTimeout(() => {
      resolve({...data, isOK: true});
    }, 1000);
  });
}

const BoardSet = {
  name: "게시판",
  items: [
    {id: 0, category: 'NOTICE'},
    {id: 1, category: '커뮤니티'},
    {id: 2, category: 'Q&A'},
    {id: 3, category: '강의자료'},
    {id: 4, category: 'HOMEWORK'},
    {id: 5, category: 'STUDY'},
    {id: 6, category: 'TEAM BUILDING'},
  ]
}

const FieldSet = {
  name: "분야",
  items: [
    {id: 0, category: 'UX/UI'},
    {id: 1, category: 'FRONT-END'},
    {id: 2, category: 'BACK-END'},
  ]
}

const PostUpload = () => {

  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const [board, setBoard] = useState(null)
  const [filed, setField] = useState(null)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handelSubmit = async() => {
    setIsSubmitting(true)
    try {
      const data = {
        title,
        body,
        board,
        filed
      }
      console.log(data)
      const res = await tempAPI(data)
      setIsSubmitting(false)
      console.log(res)
    } catch(e) {
      console.error(e)
    }
  }

  const handleTitleChange = (e) => {
    setTitle(e.target.value)
  }

  return (
    <Container>
      <Label>글쓰기</Label>
      <Divider></Divider>
    
      <HeadBox>

        <DropdownBox>
          {/* Board */}
          <DropdownWrap>
            <Dropdown 
              set={BoardSet}
              value={board}
              valueSetter={setBoard}
            ></Dropdown>
          </DropdownWrap>
          {/* Filed */}
          <DropdownWrap>
            <Dropdown 
              set={FieldSet}
              value={filed}
              valueSetter={setField}
            ></Dropdown>
          </DropdownWrap>
        </DropdownBox>
        
        <TitleInput 
          value={title} 
          onChange={handleTitleChange}
          placeholder='제목을 입력해 주세요'
        ></TitleInput>

      </HeadBox>

      <MDEditor
        value={body}
        onChange={setBody}
        height={500}
      />
      <SubmitBtnWrap>
        <SubmitBtn 
          onClick={handelSubmit}
          disabled={isSubmitting || !board || !filed || !title || !body}>
          작성 완료
        </SubmitBtn>
      </SubmitBtnWrap>

    </Container>
  )
}

export default PostUpload

