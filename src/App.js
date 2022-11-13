import React from 'react'
import Home from './pages/Home'
import StyledApp from './assets/StyledApp'
import Experience from './pages/Experience/Experience'
import Contact from './pages/Contact/Contact'
// const Contact = React.lazy(() => import('./pages/Contact/Contact'))
// const Experience = React.lazy(() => import('./pages/Experience/Experience'))

function App () {
    return (
        <React.Fragment>
            <StyledApp>
                <Home/>
                {/*<Projects />*/}
                <Experience/>
                <Contact/>
            </StyledApp>
        </React.Fragment>
    )
}

export default App