import styled from 'styled-components';

export const SignUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 380px;

  @media screen and (max-width: 800px) {
			width: 190px;
		}
`;

export const SignUpTitle = styled.h2`
  margin: 10px 0;
`;

export const SignUpError = styled.div`
  background-color: #fce4e4;
  border: 1px solid #fcc2c3;
  float: left;
  padding: 20px 30px;
  margin-top: 10px;
  text-align: center;
`