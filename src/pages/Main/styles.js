import styled, { css } from 'styled-components';

export const TagList = styled.ul`
  display: flex;
  flex-direction: row;

  li {
    text-decoration: none;
  }
`;

export const AddForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;

  h1 {
    font-size: 20px;
    padding: 10px 0;
  }
  label {
    margin-top: 10px;
  }

  div {
    width: 290px !important;
    padding: 5px 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 10px 0 0 auto;
  }

  div button {
    min-width: 120px;
    flex: 2;
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px 0;
  margin-bottom: 10px;

  strong {
    font-family: 'Bebas Neue' cursive;
  }
  div {
    display: flex;
    flex-direction: column;

    h1 {
      display: flex;
      flex-direction: row;
      text-align: end;
    }
  }

  img {
    height: 80px;
    margin-left: auto;
    margin-right: 10px;
  }
`;

export const PopupContainer = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  padding: 100px;
  z-index: 1;
  width: 100%;
  height: 101%;
  background: rgba(3, 3, 3, 0.3);

  div {
    width: 350px;
  }

  ${props =>
    props.show &&
    css`
      visibility: ${props.show};
    `}
`;

export const SearchForm = styled.form`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 10px 0;

  input[type='checkbox'] {
    margin: 0 5px;
    background: #fff !important;
  }

  button {
    margin-left: auto;
    margin-right: 5px;
  }
`;

export const List = styled.ul`
  li {
    padding: 15px 10px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    border: 1px solid #333;
    border-radius: 5px;
    text-align: justify;

    & + li {
      margin-top: 10px;
    }

    div {
    }

    a {
      text-decoration: none;
      font-weight: bold;
      color: rgb(53, 51, 51);

      font-family: 'Open Sans' sans-serif;
    }

    p {
      font-family: 'Questrial' sans-serif;
      text-align: justify;
      padding: 10px 0;
    }

    button {
      border: none;
      background: rgb(225, 224, 224);
      svg {
        color: #333;
      }
    }
  }
`;
