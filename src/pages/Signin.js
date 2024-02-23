import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { FaRegCheckCircle, FaCheckCircle } from "react-icons/fa";
import { useState } from "react";
import {
  SigninContainer,
  SigninImg,
  InputWrap,
  SigninInput,
  ErrorMsg,
  KeepSigninBox,
  Span,
  SpanWrap,
  IconBtnWrap,
  SignInBtn,
  SignupBox,
  SignupBtn,
} from "../styles/SigninStyle"
import signin from "../auth/signin";

const Signin = () => {

  const { 
    register, 
    handleSubmit,
    formState: {isSubmitting, errors},
  } = useForm()
  const [keepSignin, setKeepSignin] = useState(false)

  const handleKeepSignin = (e) => {
    e.preventDefault()
    setKeepSignin(!keepSignin)
  }

  const onSubmit = async(data) => {
    // FIXME
    // 실패 이유가 어떤 이유인지 서버측에서 알려주기 않음(존재하지 않은 / 비밀번호 오류)
    // + 서버측에서 굳이 email 형식을 검사할 필요는 없을 것 같음(현재 이메일 형식이 아닌 경우 500에러 발생)
    try {
      await signin(data)
      window.location.replace('/')
    } catch (e) {
      console.error(e)
      alert("로그인 오류")
    }
  }

  return (
    <SigninContainer>
      <form
        noValidate 
        onSubmit={handleSubmit(onSubmit)}
      >

        <SigninImg src="./signin-image.png"></SigninImg>
        
        {/* Email */}
        <InputWrap>
          <SigninInput 
            id="email"
            type="email"
            placeholder="이메일"
            {...register("email", {
              required: "이메일을 입력해 주세요.",
            })}
            disabled={isSubmitting}
          ></SigninInput>
          {errors.email && <ErrorMsg>
            {errors.email.message}
          </ErrorMsg>}
        </InputWrap>
        

        {/* Password */}
        <InputWrap>
          <SigninInput 
            id="password"
            type="password"
            placeholder="비밀번호"
            {...register("password", {
              required: "비밀번호를 입력해 주세요."
            })}
            disabled={isSubmitting}
          ></SigninInput>
          {errors.password && <ErrorMsg>
            {errors.password.message}
          </ErrorMsg>}
        </InputWrap>
        

        {/* Keep Sign in */}
        <KeepSigninBox>
          <IconBtnWrap 
            type="button" 
            $isCheck={keepSignin} 
            onClick={handleKeepSignin}
          >
            {keepSignin ? <FaCheckCircle /> : <FaRegCheckCircle />}
          </IconBtnWrap>
          <Span>
            로그인 상태 유지
          </Span>
        </KeepSigninBox>

        {/* Sign in Button */}
        <SignInBtn type="submit" disabled={isSubmitting}>
          로그인
        </SignInBtn>

        {/* Find Password */}
        <SpanWrap>
          <Link to={"/signup"} >
            <Span>
              비밀번호를 잊으셨나요?
            </Span>
          </Link>
        </SpanWrap>


        {/* Sign up */}
        <SignupBox>
          <Span>
            계정이 없으신가요?
          </Span>
          <Link to={"/signup"} >
            <SignupBtn>회원가입</SignupBtn>
          </Link>
        </SignupBox>


      </form>
    </SigninContainer>
  );
};

export default Signin;

