import styled from "styled-components"

export const UserListPageContainer = styled.div`
  display: flex;
  flex-direction: row;
`

export const UserListContainer = styled.div`
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  height: 100vh;
`

export const UserListHeader = styled.h1`
  position: relative;
  width: 378px;
  height: 75px;
  top: 20px;
  left: 20px;
  font-family: "Inter", sans-serif;
  font-size: 47px;
  font-weight: 700;
  line-height: 57px;
`

export const UserSearchContainer = styled.div`
  position: relative;
  top: 20px;
  left: 20px;
  width: 35%;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.4375em;
  font-family: "Inter", sans-serif;
  color: rgb(17, 25, 39);
  box-sizing: border-box;
  cursor: text;
  display: flex;
  background-color: transparent;
  border-radius: 8px;
  border-style: solid;
  border-width: 1px;
  border-color: rgb(229, 231, 235);
  &:focus-within {
    background-color: transparent;
    box-shadow: rgb(99, 102, 241) 0px 0px 0px 2px;
  }
`

export const UserSearchInput = styled.input`
  font-family: inherit;
  border: 0px;
  background: none;
  height: 1em;
  min-width: 0px;
  width: 100%;
  animation-name: mui-auto-fill-cancel;
  animation-duration: 10ms;
  padding: 15px 15px 15px 15px;
  font-size: 14px;
  font-weight: 500;
  line-height: 24px;
  &:focus {
    outline: 0px;
  }
`

export const UserSearchLabel = styled.img`
  width: 20px;
  height: 20px;
  position: relative;
  top: 10px;
  left: 10px;
`