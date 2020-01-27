import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import UsersList from '../presentational/UsersList.jsx';
import Basket from '../presentational/Basket.jsx';
import {
  fetchUsers,
  fetchBasket,
  fetchApple,
  resetApples,
} from '../../actions/actions';


// const DeleteDiv = styled.div`
//   opacity: 50%;
// `

const StyledNav = styled.nav`
  background-color: #3498db;
  position: relative;
  min-height: 50px;
  margin-bottom: 20px;
  border: 1px solid transparent;
  padding: 0.5rem 1rem;
`;

const StyledDivErrContainer = styled.div`
  display: flex;
  max-width: 1140px;
  min-height: 70px;
  margin-right: auto;
  margin-left: auto;
  padding-right: 15px;
  padding-left: 15px;
`;
const StyledDivErr = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  height: 50%;
  color: #761b18;
  background-color: #f9d6d5;
  border-color: #f7c6c5;
  padding: 0.75rem 1.25rem;
`;
const StyledArticle = styled.article`
  display: flex;
  flex-direction: row;
  justify-content: center;
  max-width: 1140px;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;


const mapStateToProps = (state) => ({
  users: state.users,
  basket: state.basket,
  errMessage: state.error,
});

const mapDispatchToProps = (dispatch) => ({
  fetchUsers: () => dispatch(fetchUsers()),
  fetchBasket: () => dispatch(fetchBasket()),
  fetchApple: (id, apple) => dispatch(fetchApple(id, apple)),
  resetApples: () => dispatch(resetApples()),
});

class AppContainer extends Component {
  componentDidMount() {
    const {
      fetchUsers, fetchBasket,
    } = this.props;
    fetchUsers();
    fetchBasket();
  }

  render() {
    const {
      errMessage, users, basket, fetchApple, resetApples,
    } = this.props;
    return (
      <>
        <StyledNav>Alyce - Test Task</StyledNav>
        <StyledDivErrContainer>
          {errMessage
            ? (
              <StyledDivErr>
                {errMessage}
              </StyledDivErr>
            ) : null}
        </StyledDivErrContainer>
        <StyledArticle>
          <UsersList
            users={users}
            fetchApple={fetchApple}
            resetApples={resetApples}
          />
          <Basket basket={basket} />
        </StyledArticle>
      </>
    );
  }
}

AppContainer.defaultProps = {
  errMessage: null,
};

AppContainer.propTypes = {
  users: PropTypes.arrayOf(PropTypes.object).isRequired,
  basket: PropTypes.arrayOf(PropTypes.string).isRequired,
  errMessage: PropTypes.string,
  fetchUsers: PropTypes.func.isRequired,
  fetchBasket: PropTypes.func.isRequired,
  fetchApple: PropTypes.func.isRequired,
  resetApples: PropTypes.func.isRequired,
};


const App = connect(mapStateToProps, mapDispatchToProps)(AppContainer);
export default App;
