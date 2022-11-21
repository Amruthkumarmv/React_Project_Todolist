import React from 'react'

export const Footer = () => {
    let footerStyle = {
        position: "relative",
        top: "25vh",
        width: "100%",
        // border: "2px solid red"
    }
    return (
        <footer className='bg-dark text-light py-3 my-5 mb-0' style={footerStyle}>
            <p className='text-center'> Copyright &copy; My todoList.com </p>
        </footer>
    )
}
