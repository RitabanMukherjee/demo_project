import React from 'react'

const Footer = () => {
    const value = 'Link To Source Code'
    const clickHandler = () => {
        window.open('https://github.com/RitabanMukherjee/demo_project')
    }


    return (
        <div className = "footer">
            <h3 onClick={clickHandler}>{value}</h3>
        </div>
    )
}

export default Footer
