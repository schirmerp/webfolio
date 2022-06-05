import styled from 'styled-components';

export const LeftSection = styled.div`
  width: 100%;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 80%;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    width: 100%;
    display: flex;
    flex-direction: column;   
    margin: 0 auto;
  }
`;
export const Img = styled.img`
  position: fixed;
  width: 25%;
  height: 55%;
  top: 19%;
  right: 77%;
  opacity: 0.5;
  border-radius: 50%;
`
export const Imge = styled.img`
  position: fixed;
  width: 25%;
  height: 55%;
  top: 19%;
  right: 5%;
  border-radius: 50%;
  opacity: 0.5;
`