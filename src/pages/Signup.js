import { useForm,  Controller } from "react-hook-form";
import {
  SignupContainer,
  SignupImg,
  InputBox,
  SignupInput,
  GenderBox,
  GenderItem,
  GenderRadioBtn,
  ErrorBox,
  ErrorMsg,
  SignupBtn
} from "../styles/SignupStyle"

// Gender
const MALE = "male"
const FEMALE = "female"
const OTHER = "other"

// User Type
// const MANAGER = "manager"
// const GENERAL = "general"


const tempAPI = (data) => {
  return new Promise((resolve,) => {
    setTimeout(() => {
      resolve({...data, isOK: true});
    }, 1000);
  });
}

const Signup = () => {

  const { 
    register, 
    handleSubmit,
    control,
    watch,
    formState: {isSubmitting, errors, isValid},
  } = useForm({ 
    mode: 'onChange',
    defaultValues: {
      gender: OTHER,
      // usertype: GENERAL
    }
  })

  const onSubmit = async(data) => {
    console.log("data : ",data)
    try {
      const res = await tempAPI(data)
      console.log(res)
    } catch(e) {
      console.error(e)
    }
  }

  // 날짜 유효성 검사
  const isValidDate = (dateString) => {
    const year = dateString.substring(0, 4);
    const month = dateString.substring(4, 6);
    const day = dateString.substring(6, 8);
  
    const date = new Date(year, month - 1, day);
    
    if (date && (date.getMonth() + 1) === Number(month) && date.getDate() === Number(day)) {
      return true;
    } else {
      return '유효하지 않은 날짜입니다.';
    }
  }


  const handlePhoneNumberChange = (value) => {
    value = value.replace(/\D/g, "");
    if(value.length < 4) {
      return value;
    } else if (value.length < 8) {
      return value.slice(0,3) + "-" + value.slice(3)
    } else {
      return value.slice(0,3) + "-" + value.slice(3,7) + "-" + value.slice(7)
    }
  }
  return (
    <SignupContainer>
      <form
        noValidate
        onSubmit={handleSubmit(onSubmit)}
      >
      <InputBox>
        <SignupImg src="signup-image.png"></SignupImg>

        {/* Email */}
        <SignupInput $loc="top"
          id="email"
          type="email"
          placeholder="이메일"
          {...register("email", {
            required: "이메일을 입력해 주세요.",
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              message: "이메일 : 이메일 형식에 맞지 않습니다.",
            },
          })}
          disabled={isSubmitting}
        ></SignupInput>

        {/* Password */}
        <SignupInput $loc="bottom"
          id="password"
          type="password"
          placeholder="비밀번호(8~16자, 영문 대/소문자, 숫자, 특수문자 포함)"
          {...register("password", {
            required: "비밀번호를 입력해 주세요.",
            pattern: {
              value: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).{8,16}$/,
              message: "비밀번호: 8~16자의 영문 대/소문자, 숫자, 특수문자를 사용해 주세요.",
            },
          })}
          disabled={isSubmitting}
        ></SignupInput>

        {/* Email & Password Error Msg */}
        <ErrorBox>
          {errors.email && <ErrorMsg>
            {errors.email.message}
          </ErrorMsg>}
          {errors.password && <ErrorMsg>
            {errors.password.message}
          </ErrorMsg>}
        </ErrorBox>

        {/* Name */}
        <SignupInput $loc="top"
          id="name"
          type="text"
          placeholder="이름"
          {...register("name", {
            required: "이름 : 이름을 입력해 주세요.",
          })}
          disabled={isSubmitting}
        ></SignupInput>

        {/* Birth */}
        <SignupInput $loc="mid"
          id="birthDate"
          type="number"
          placeholder="생년월일 8자리(YYYYMMDD)"
          {...register("birthDate", {
            required: "생년월일을 입력해 주세요.",
            pattern: {
              value: /^\d{8}$/,
              message: '생년월일 : YYYYMMDD 형식으로 작성해 주세요'
            },
            validate: isValidDate
          })}
          disabled={isSubmitting}
        ></SignupInput>

        {/* Gender */}
        <GenderBox>
          <GenderItem $isSelect={watch("gender") === MALE} $loc={"left"}>
            <GenderRadioBtn value={MALE}   {...register("gender")}></GenderRadioBtn>
            남자
          </GenderItem>
          <GenderItem $isSelect={watch("gender") === FEMALE} $loc={"mid"}>
            <GenderRadioBtn value={FEMALE} {...register("gender")}></GenderRadioBtn>
            여자
          </GenderItem>
          <GenderItem $isSelect={watch("gender") === OTHER} $loc={"right"}>
            <GenderRadioBtn value={OTHER} {...register("gender")}></GenderRadioBtn>
            기타
          </GenderItem>
        </GenderBox>

        {/* User type */}
        {/* <GenderBox>
          <GenderItem $isSelect={watch("usertype") === MANAGER} $loc={"left"}>
            <GenderRadioBtn value={MANAGER}   {...register("usertype")}></GenderRadioBtn>
              메니저
            </GenderItem>
          <GenderItem $isSelect={watch("usertype") === GENERAL} $loc={"right"}>
            <GenderRadioBtn value={GENERAL} {...register("usertype")}></GenderRadioBtn>
              아기사자
            </GenderItem>
        </GenderBox> */}

        {/* Phone number */}
        <Controller
          control={control}
          name="phoneNumber"
          defaultValue=""
          rules={{
            required: "휴대전화번호를 입력해 주세요.",
            pattern: {
              value: /^\d{3}-\d{4}-\d{4}$/,
              message: '휴대전화번호 : 휴대전화번호 형식에 맞지 않습니다.'
            },
          }}
          render={({ field }) => (
            <SignupInput $loc="bottom"
              id="phoneNumber"
              type="tel"
              placeholder="휴대전화번호"
              value={field.value}
              onChange={e => field.onChange(handlePhoneNumberChange(e.target.value))}
              disabled={isSubmitting}
            />
          )}
        />
        <ErrorBox>
          {errors.name && <ErrorMsg>
            {errors.name.message}
          </ErrorMsg>}
          {errors.birthDate && <ErrorMsg>
            {errors.birthDate.message}
          </ErrorMsg>}
          {errors.phoneNumber && <ErrorMsg>
            {errors.phoneNumber.message}
          </ErrorMsg>}
        </ErrorBox>


        {/* Student ID */}
        <SignupInput $loc="top"
          id="stdId"
          type="number"
          placeholder="학번"
          {...register("stdId", {
            required: "학번을 입력해 주세요.",
            pattern: {
              value: /^\d{8}$/,
              message: '학번 : 학번 형식에 맞지 않습니다.'
            },
          })}
          disabled={isSubmitting}
        ></SignupInput>

        {/* Github ID */}
        <SignupInput $loc="bottom"
          id="github"
          type="text"
          placeholder="Github 주소"
          {...register("github", {
            required: "Github 주소를 입력해 주세요.",
          })}
        ></SignupInput>
        <ErrorBox>
          {errors.stdId && <ErrorMsg>
            {errors.stdId.message}
          </ErrorMsg>}
          {errors.github && <ErrorMsg>
            {errors.github.message}
          </ErrorMsg>}
        </ErrorBox>
      </InputBox>

      <SignupBtn type="submit" disabled={isSubmitting || !isValid}>
        가입하기
      </SignupBtn>

      </form>
    </SignupContainer>
  );
};

export default Signup;