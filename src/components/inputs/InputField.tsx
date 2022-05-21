import { useState } from "react";
import styled from "styled-components";
import theme from "../../constants/theme";

const InputFieldContainer = styled.div`
    width: 80%;
    margin-left: 10px;
`

const InputFieldInput = styled.input`
    width: 100%;
    background-color: white;
    height: 30px;
    outline: none;
    border: none;
    padding: 5px;
    font-size: 16px;
    font-family: ${theme.fonts.primary};
    border-radius: 3px;
`

const InputFieldUnderbars = styled.div`
    * {
        transition: 0.5s;
        border-radius: 3px;
        margin-inline: auto;
        height: 3px;
    }
`

const InputFieldUnderbarRegular = styled.div`
    background-color: #ccc;
    width: 100%;
`

const InputFieldUnderbarHighlight = styled.div<{highlighted: boolean}>`
    background-color: ${theme.colors.primaryColor};
    width: ${(props: {highlighted: boolean}) => props.highlighted ? '100%' : '0'};
    margin-top: -3px;
`

function InputField(props: {type?: string, placeholder: string, onChange: (e: string) => void}) {
    const [highlight, setHighlight] = useState(false);    

    return (
        <InputFieldContainer>
            <InputFieldInput 
                placeholder={props.placeholder}
                type={props.type}
                onFocus={() => setHighlight(true)}
                onBlur={() => setHighlight(false)}
                onChange={(e) => {props.onChange(e.currentTarget.value)}}
            />
            <InputFieldUnderbars>
                <InputFieldUnderbarRegular />
                <InputFieldUnderbarHighlight highlighted={highlight} />
            </InputFieldUnderbars>
        </InputFieldContainer>
    )
}

export { InputField };