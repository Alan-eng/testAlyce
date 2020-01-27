import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledSection = styled.section`
  width: 100%;
  padding-left: 15px;
  padding-right: 30px;
  margin-top: 0;

  h3 {
    color: #95a5a6;
    font-weight: 400;
    font-size: 1.575rem;
  }
`;

const StyledUl = styled.ul`
  margin: 0;
  padding: 0;
`;

const StyledBasketLi = styled.li`
  background: #fff;
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 3px;
  padding: 12px 30px;
  margin-bottom: -1px;
  
  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 0 15px;
  }
`;

const Basket = ({ basket }) => (
  <StyledSection>
    <h3>Basket</h3>
    <StyledUl>
      {basket.map((apple, index) => (
        <StyledBasketLi key={index}>{apple}</StyledBasketLi>
      ))}
    </StyledUl>
  </StyledSection>
);

Basket.propTypes = {
  basket: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Basket;
