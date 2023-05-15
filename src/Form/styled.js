import styled from "styled-components";

const StyledContainer = styled.div`
  max-width: 450px;
  height: auto;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

const StyledForm = styled.form`
  margin: auto 0px;
`;

const StyledLegend = styled.legend`
  position: absolute;
  transform: translate(-50%, 50%);
  top: 0;
  left: 50%;
  background-color: rgb(93, 162, 61);
  color: black;
  border: 1px black;
  padding: 10px;
  letter-spacing: 2px;
  border-radius: 5px;
`;

const StyledInput = styled.input`
  background-color: #000;
  border: 1px solid red;
  border-radius: 5px;
  box-shadow: 6px 7px 5px 0 gray;
  color: #7fffd4;
  font-size: 30px;
  font-weight: 200;
  padding: 10px 10px 15px;
  text-align: center;
  width: 200px;
`;

const StyledOutput = styled.div`
  margin-top: 20px;
`;

const Select = styled.select`
  cursor: pointer;
  border: none;
  background: none;
  padding: 0;
`;

const StyledButton = styled.button`
  border: 1px solid #ccc;
  border-color: rgb(48, 177, 39);
  padding: 10px;
  width: 100%;
  max-width: 260px;
  border-radius: 5px;
  margin-left: auto;
`;

const Information = styled.div`
  font-size: 17px;
  font-style: italic;
  text-align: center;
  margin: 0;
`;

const Loading = styled.div`
  padding: 20px;
  border: 2px dashed;
  font-size: 15px;
`;

const Error = styled(Loading)`
  color: crimson;
  border: crimson 2px dashed;
`;

export {
  StyledContainer,
  StyledForm,
  StyledLegend,
  StyledInput,
  StyledOutput,
  Select,
  StyledButton,
  Information,
  Error,
  Loading,
};
