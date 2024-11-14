import React from 'react'

import Calculator from './Calculator'

const Main = () => {
  return (
    <>
       <main className="main-container">
        <div className="sub-container"> 
            <div className="header-container">
                <h1 className="header">Calculator</h1>
            </div>
           <Calculator />
        </div>
    </main>
    <footer className="footer-name">
        &copy;2024 WSA all Rights Reserved.
    </footer>
    
    </>
  )
}

export default Main