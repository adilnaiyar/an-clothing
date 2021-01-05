import styled from 'styled-components';

export const SignInContainer = styled.div`
  width: 380px;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 800px) {
			width: 190px;
		}
`;

export const SignInTitle = styled.h2`
  margin: 10px 0;
`;

export const ButtonsBarContainer = styled.div`
  display: flex;
    
  @media screen and (max-width: 800px) {
    flex-direction: column;
    width: 240px;
		}
  `;

export const SignInError = styled.div`
  background-color: #fce4e4;
  border: 1px solid #fcc2c3;
  float: left;
  padding: 20px 30px;
  margin-top: 10px;
  text-align: center;
`