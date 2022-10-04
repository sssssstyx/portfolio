import React from 'react'

import Home from './pages/Home'
import Experience from './pages/Experience/Experience'
import Contact from './pages/Contact/Contact'
import StyledApp from './assets/StyledApp'

function App () {
    return (
        <>
            <StyledApp>
                <Home />
                <Experience />
                {/*<Projects />*/}
                <Contact />
            </StyledApp>
        </>
    )
}

export default App