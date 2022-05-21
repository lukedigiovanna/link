import styled from "styled-components";
import theme from "../../constants/theme";

const FormInputContainer = styled.div`
    margin-bottom: 10px;

    p {
        margin-bottom: 0;
    }
`

const SubmitButton = styled.button`
    background-color: ${theme.colors.primaryColor};
    border: none;
    color: white;
    padding: 8px 15px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    border-radius: 4px;
    transition: 0.6s;

    &:disabled {
        background-color: lightgray;
    }

    &:hover:enabled {
        background-color: ${theme.colors.primaryColorLight10};
    }
`

const TextArea = styled.textarea`
    width: 100%;
    height: 100px;
    border: 1px solid #ccc;
    border-radius: 4px;
    resize: none;
    padding: 10px;
    font-size: 16px;
    font-family: 'Roboto', sans-serif;
`

const ErrorMessage = styled.p`
    color: ${theme.colors.errorColor};
    margin: 0;
    text-align: center;
`

export { FormInputContainer, SubmitButton, TextArea, ErrorMessage };