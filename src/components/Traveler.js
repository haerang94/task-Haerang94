import React from "react";
import styled from "styled-components";
import { Alert } from "components/SharedComponents";

const TraverlerWrapper = styled.section`
  width: 100%;
  min-height: 300px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border-bottom: 2px solid ${(props) => props.theme.color.lightGray};
  & > * {
    margin-bottom: 15px;
  }
`;

const TravelerNumber = styled.header`
  font-size: ${(props) => props.theme.size.md};
  display: flex;
  font-weight: bold;
  margin-bottom: 8px;
  & div:nth-child(2) {
    color: ${(props) => props.theme.color.blue};
  }
`;

const Notice = styled.div`
  font-size: ${(props) => props.theme.size.smd};
  color: ${(props) => props.theme.color.gray};
  padding-left: 2px;
`;

const FlexContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

const TwoInputs = styled.div`
  width: 49%;
  & header {
    font-weight: bold;
    font-size: ${(props) => props.theme.size.mmd};
    margin-bottom: 8px;
    padding-left: 2px;
  }
  & input {
    padding: 10px;
    height: 30px;
    width: 100%;
    border: 1px solid ${(props) => props.theme.color.lightGray};
    border-radius: 5px;
  }
`;

const OneInput = styled(TwoInputs)`
  width: 100%;
`;

const ButtonContainer = styled.div`
  display: flex;
  width: 100%;

  & input[type="radio"] {
    display: none;
  }
  & label {
    width: 50%;
    font-size: ${(props) => props.theme.size.mmd};
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    border: 1px solid ${(props) => props.theme.color.lightGray};
    border-radius: 5px;
    height: 30px;
  }
  & label:nth-child(4) {
    border-radius: 0 5px 5px 0;
  }
  & label:nth-child(2) {
    border-radius: 5px 0 0 5px;
  }
  & input[type="radio"] + label:hover {
    cursor: pointer;
  }
  & input[type="radio"]:checked + label {
    border: 1px solid ${(props) => props.theme.color.blue};
    color: ${(props) => props.theme.color.blue};
    background: ${(props) => props.theme.color.lightBlue};
    & span {
      font-weight: bold;
    }
  }
`;

const Traveler = ({ values, errors, onChange, reset, idx }) => {
  return (
    <TraverlerWrapper>
      <TravelerNumber>
        <div>여행자</div>
        <div>{idx}</div>
      </TravelerNumber>
      <Notice>
        예약하시는 모든 분의 정보를 여권 상과 동일하게 기입해 주시게 바랍니다.
      </Notice>
      <FlexContainer>
        <TwoInputs>
          <header>영문 이름</header>
          <input
            type="text"
            placeholder="Gil Dong"
            name="firstName"
            value={values.firstName || ""}
            onChange={onChange}
          />
          {errors.firstName && <Alert>{errors.firstName}</Alert>}
        </TwoInputs>
        <TwoInputs>
          <header>영문 성</header>
          <input
            type="text"
            placeholder="Hong"
            name="lastName"
            value={values.lastName || ""}
            onChange={onChange}
          />
          {errors.lastName && <Alert>{errors.lastName}</Alert>}
        </TwoInputs>
      </FlexContainer>
      <OneInput>
        <header>한글 이름</header>
        <input
          type="text"
          placeholder="홍길동"
          name="koreanName"
          value={values.koreanName || ""}
          onChange={onChange}
        />
        {errors.koreanName && <Alert>{errors.koreanName}</Alert>}
      </OneInput>
      <OneInput>
        <header>성별</header>
        <ButtonContainer>
          <input
            type="radio"
            name="gender"
            id={`male-${idx}`}
            value={values.gender || ""}
            onChange={onChange}
          />
          <label htmlFor={`male-${idx}`}>남</label>
          <input
            type="radio"
            name="gender"
            id={`female-${idx}`}
            value={values.gender || ""}
            onChange={onChange}
          />
          <label htmlFor={`female-${idx}`}>여</label>
        </ButtonContainer>
        {errors.gender && <Alert>{errors.gender}</Alert>}
      </OneInput>
      <OneInput>
        <header>생년월일</header>
        <input type="text" placeholder="YYMMDD" />
        <Alert>숫자로 6자를 입력해 주세요.</Alert>
      </OneInput>
    </TraverlerWrapper>
  );
};

export default Traveler;
