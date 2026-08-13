interface valueReceived {
    text : string
}

const HeaderOne = ({text}: valueReceived) => {
    return (
        <h1>
            {text}
        </h1>        
    )
}

export default HeaderOne