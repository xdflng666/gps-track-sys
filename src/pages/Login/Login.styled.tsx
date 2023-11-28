import styled from "styled-components"

export const RightSideContainer = styled.div`
  background-color:  #090E23;
  width: 50%;
  height: 100vh;
  float: right;
`

export const LoginText = styled.p`
  top: -60px;
  left: 1000px;
  position: absolute;
  font-family: "Inter", sans-serif;
  font-size: 152px;
  font-weight: 700;
  line-height: 183.95px;
  text-align: left;
  color: #FFFFFF;
`

export const PurpleLoginText = styled.span`
  color:#6366F1;
  white-space:wrap;
`
export const LeftSideContainer = styled.div`
  flex: 1 1 auto;
  -webkit-box-align: center;
  align-items: center;
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  width: 50%;
  height: 100vh;
  float: left;
`

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin:auto;
  width : 400px;
`

export const LoginHeader= styled.h4`
    margin: 0px 0px 20px 0px;
    font-family: "Plus Jakarta Sans", sans-serif;
    font-weight: 700;
    font-size: 2rem;
    line-height: 1.2;
`

export const LoginDiv = styled.div`
  max-width: 550px;
  padding: 100px 24px;
  width: 100%;
`

export const InputContainer = styled.div`
  margin: 0px 0px 20px 0px;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.4375em;
  font-family: "Inter", sans-serif;;
  color: rgb(17, 25, 39);
  box-sizing: border-box;
  cursor: text;
  display: inline-flex;
  width: 100%;
  position: relative;
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

export const LoginButton = styled.button`
  align-items: center;
  justify-content: center;
  position: relative;
  box-sizing: border-box;
  outline: 0px;
  border: 0px;
  margin: 0px 0px 0px;
  cursor: pointer;
  vertical-align: middle;
  appearance: none;
  text-decoration: none;
  font-weight: 600;
  font-family:"Inter", sans-serif;
  font-size: 0.9375rem;
  line-height: 1.75;
  min-width: 64px;
  color: rgb(255, 255, 255);
  background-color: rgb(99, 102, 241);
  box-shadow: rgba(0, 0, 0, 0.08) 0px 1px 5px;
  width: 100%;
  border-radius: 12px;
  text-transform: none;
  padding: 11px 24px;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  &:hover {
    background-color: rgb(43, 45, 168);
  }
`

export const LoginLabel = styled.label`
  color: rgb(108, 115, 127);
  line-height: 1.4375em;
  font-family: "Inter", sans-serif;
  padding: 0px;
  font-size: 14px;
  font-weight: 500;
  display: block;
  transform-origin: left top;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: calc(133% - 24px);
  position: absolute;
  transform: translate(12px, 7px) scale(0.75);
  pointer-events: auto;
  user-select: none;
`

export const LoginInput = styled.input`
  font-style: inherit;
  font-variant: inherit;
  font-stretch: inherit;
  font-family: inherit;
  font-optical-sizing: inherit;
  font-kerning: inherit;
  font-feature-settings: inherit;
  font-variation-settings: inherit;
  letter-spacing: inherit;
  color: currentcolor;
  border: 0px;
  box-sizing: content-box;
  background: none;
  height: 1.4375em;
  margin: 0px;
  -webkit-tap-highlight-color: transparent;
  display: block;
  min-width: 0px;
  width: 100%;
  animation-name: mui-auto-fill-cancel;
  animation-duration: 10ms;
  padding: 25px 12px 8px;
  font-size: 14px;
  font-weight: 500;
  line-height: 24px;
  &:focus {
    outline: 0px;
  }
`