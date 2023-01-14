import styled, { keyframes } from "styled-components";

export const ToggleButtonArea = styled.div`
  display: flex;
  justify-content: end;
  padding-right: 1rem;
  padding-top: 1rem;
`;
export const Tittle = styled.h1`
  text-align: center;
  margin-bottom: 1rem;
`;
export const AppArea = styled.div`
  max-width: 550px;
  margin: 0 auto;
  padding: 1rem;
`;
export const SearchArea = styled.div`
  background-color: #b22222;
  padding: 2rem;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
`;

export const SearchContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  input,
  button {
    padding: 0.6rem;
    border-radius: 3px;
    border: none;
    color: #2b3566;
  }

  button {
    background-color: #fa8072;
    cursor: pointer;
  }
`;
export const UserArea = styled.div`
  img {
    width: 140px;
    height: 140px;
    border: 4px solid #fa8072;
    border-radius: 50%;
  }
  a {
    text-align: center;
    background-color: #ff5733;
    padding: 1rem;
    border-radius: 5px;
    opacity: 0.8;
    transition: 0.3s;
    color: #fff;
  }
  &:hover {
    opacity: 1;
  }
  background-color: #b22222;
  padding: 2rem;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  grid-area: 1.2rem;
  gap: 1rem;
`;

export const Location = styled.p`
  svg {
    fill: #fa8072;
    font-size: 1.5rem;
  }
  span {
    color: #d79f92;
    font-weight: bold;
  }
  display: flex;
  align-items: center;
  gap: 1.5rem;
`;

export const Stats = styled.div`
  div {
    padding: 0 1rem;
    display: flex;
    flex-direction: column;
  }
  div:first-child {
    border-right: 1px solid #9da5d1;
  }
  display: flex;
`;
export const Number = styled.p`
  background-color: #fa8072;
  padding: 0.2rem 0.4rem;
  border-radius: 3px;
  gap: 0.4rem;
`;

const Rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;
export const Loader = styled.div`
  animation: ${Rotate} 2s linear infinite;
  position: absolute;
  left: 50%;
  margin-top: 40px;
  font-size: 50px;
  margin-left: -25px;
`;

export const ReposList = styled.div`
  h2 {
    font-size: 1.2rem;
    text-align: center;
    margin-bottom: 2rem;
  }
`;
export const ReposContainer = styled.div`
  background-color: #b22222;
  padding: 2rem;
  border-radius: 1rem;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 1.2rem;
`;

export const PaginationButton = styled.button`
  text-align: center;
  background-color: #b22222;
  padding: 1rem;
  border-radius: 5px;
  cursor: pointer;
  opacity: 0.8;
  transition: 0.3s;
  margin-top: 0.5rem;
  margin-left: 0.5rem;
  color: #fff;
  border: none;
  &:hover {
    opacity: 1;
  }
`;

export const RepoItem = styled.div`
  background-color: #ab3f28;
  padding: 2rem;
  border-radius: 10px;
  border: 2px solid #9da5d1;
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 1rem;
  flex: 1 0 50%;
`;

export const RepoStats = styled.div`
  display: flex;
  gap: 1rem;

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.4rem;
    border-radius: 3px;
    border: 1px solid #9da5d1;
    padding-right: 0.4rem;
  }
  svg {
    background-color: #fa8072;
    padding: 0.2rem 0.4rem;
    border-radius: 3px;
    font-size: 2rem;
  }
`;

export const RepoCode = styled.a`
  display: flex;
  align-items: center;
  padding: 0.5rem 1rem;
  color: #fff;
  background-color: #b22222;
  border-radius: 5px;
  gap: 0.5rem;
`;
export const BackPageButton = styled.button`
  position: absolute;
  top: 1rem;
  left: 1rem;
  color: #fff;
  padding: 0.5rem 1rem;
  color: #fff;
  background-color: #b22222;
  cursor: pointer;
  border: none;
  border-radius: 5px;
  opacity: 0.9;
  &:hover {
    opacity: 1;
  }
`;
