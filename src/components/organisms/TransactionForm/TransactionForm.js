import React from 'react';
import styled from 'styled-components';
import Input from 'components/atoms/Input/Input';
import Button from 'components/atoms/Button/Button';
import { Formik } from 'formik';
import { connect } from 'react-redux';
import { addItem as addItemAction } from 'actions';
import PropTypes from 'prop-types';

const StyledWrapper = styled.div`
  @keyframes appear {
    0% {
      opacity: 0;
      top: 35px;
    }
    100% {
      opacity: 1;
      top: 0;
    }
  }
  position: relative;
  animation: appear 0.6s ease-in-out;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    width: 100%;
    padding: 10px;
  }
`;

const StyledForm = styled.form`
  padding: 0;
  margin: 0;
  display: flex;
  align-items: center;
  flex-direction: column;
  flex-wrap: wrap;
  max-width: 700px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const StyledFields = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  input[type='number']::-webkit-inner-spin-button,
  input[type='number']::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const StyledHeader = styled.h1`
  text-align: center;
  margin: 30px;
`;

const TransactionForm = ({ addItem }) => (
  <StyledWrapper>
    <StyledHeader>Dodaj transakcję</StyledHeader>
    <Formik
      initialValues={{
        title: '',
        euro: '0',
      }}
      onSubmit={(values, actions) => {
        addItem(values);
        actions.setSubmitting(false);
        actions.resetForm();
      }}
    >
      {({ values, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
        <StyledForm onSubmit={handleSubmit}>
          <StyledFields>
            <Input
              type="text"
              name="title"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.title}
              label="Tytuł"
              long
              required
            />
            <Input
              type="number"
              name="euro"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.euro}
              label="Kwota w Euro"
              required
            />
          </StyledFields>
          <Button type="submit" disabled={isSubmitting}>
            Dodaj
          </Button>
        </StyledForm>
      )}
    </Formik>
  </StyledWrapper>
);

TransactionForm.propTypes = {
  addItem: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  addItem: values => dispatch(addItemAction(values)),
});

export default connect(
  null,
  mapDispatchToProps,
)(TransactionForm);