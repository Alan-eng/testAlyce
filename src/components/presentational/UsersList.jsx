import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledSection = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    padding-left: 15px;
    padding-right: 30px;
    margin-top: 0;

    h3 {
        width: 100%;
        color: #95a5a6;
        font-weight: 400;
        font-size: 1.575rem;
    }
`;
const StyledUl = styled.ul`
    width: 100%;
    margin: 0;
    padding: 0;
`;
const StyledUserLi = styled.li`
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
const StyledAppleLi = styled.li`
    list-style-type: circle;
`;
const StyledButton = styled.button`
    font-size: 0.8rem;
    padding: 0.25rem 0.5rem;
    color: #fff;
    border-radius: 3px;
    cursor: pointer;
    outline: none;
    `;
const StyledButtonRed = styled(StyledButton)`
    background: #e3342f;

    &:hover {
        background: #d0211c;
    }
`;

const StyledButtonGreen = styled(StyledButton)`
    font-size: 1.2rem;
    padding: 0.5rem 1rem;
    background: #38c172;
    border-radius: 5px;
    margin-top: 15px;
    
    &:hover {
        background: #2fa360;
    }
`;

const UsersList = ({
  users, fetchApple, resetApples,
}) => (
  <StyledSection>
    <h3>Users</h3>
    <StyledUl>
      {users.map((user) => (
        <StyledUserLi key={user.id}>
          <div>
            {user.name}
            <StyledButtonRed
              id={user.id}
              onClick={() => fetchApple(user.id)}
            >
                          Grab apple
            </StyledButtonRed>
          </div>
          <ul>
            {user.apples.map((apple) => (
              <StyledAppleLi key={apple.id}>{`Apple${apple.id}`}</StyledAppleLi>
            ))}
          </ul>
        </StyledUserLi>
      ))}
    </StyledUl>
    <StyledButtonGreen
      onClick={() => resetApples()}
    >
          Free apples
    </StyledButtonGreen>
  </StyledSection>
);

UsersList.propTypes = {
  users: PropTypes.arrayOf(PropTypes.object).isRequired,
  fetchApple: PropTypes.func.isRequired,
  resetApples: PropTypes.func.isRequired,
};


export default UsersList;
