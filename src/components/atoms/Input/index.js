import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledWrapper = styled.div`
  max-width: 100px;
  margin: 24px 0;
  position: relative;
`;

const StyledBar = styled.div`
  width: 100%;
  height: 2px;
  background: ${({ theme }) => theme.grey200};
  transition: 0.1s all;
`;

const StyledLabel = styled.label`
  color: #7d7d7d;
  position: absolute;
  top: 3px;
  left: 0;
  transition: 0.2s ease-out all;
  font-size: ${({ theme }) => theme.fontSize.xs};
`;

const StyledInput = styled.input`
  color: #000;
  font-size: ${({ theme }) => theme.fontSize.xs};
  border: none;
  line-height: 22px;
  max-width: 100%;
  background: none;
  margin: 10px;

  :focus {
    outline: none;
    color: $grey400;
  }

  :focus + label {
    top: -22px;
    font-size: 13px;
  }

  :not(:placeholder-shown) + label {
    top: -22px;
    ${({ theme }) => theme.fontSize.xxs};
  }

  :focus ~ div {
    background: ${({ theme }) => theme.mainBlue};
  }
`;

const Input = ({ type, name, label, ...props }) => (
  <StyledWrapper>
    <StyledInput type={type} name={name} id={name} required placeholder=" " {...props} />
    <StyledLabel htmlFor={name}>{label}</StyledLabel>
    <StyledBar />
  </StyledWrapper>
);

Input.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default Input;