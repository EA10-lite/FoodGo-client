import React from "react";

const Error = ({ error, visible }) => {
    if(!visible || !error) return null;
    return (
        <p className="text-sm text-error"> { error } </p>
    )
}

export default Error;