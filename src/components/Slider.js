import styled from 'styled-components';

const Slider = styled.input.attrs({ type: 'range' })`
  -webkit-appearance: none;
  -moz-appearance: none;
  outline: 0;
  margin: 40px 0;
  height: 12px;
  border-radius: 40px;
  width: 100%;
  background: ${(props) =>
    `linear-gradient(to right, #a2f3ec 0%, #a2f3ec 
      ${(props.value * 100) / 32}%, #ecf3fd 
      ${(props.value * 100) / 32}%, #ecf3fd 100%);`};
`;

export default Slider;
