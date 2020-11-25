import React from "react";

type InputPropsType = {
    type: string
    placeholder: string
}

export const Input = (props: InputPropsType) => {
    return (
        <input placeholder={props.placeholder} type={props.type}/>
    )
}
