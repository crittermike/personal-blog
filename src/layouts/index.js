import React from 'react'
import Header from '../components/Header'
import PostHeader from '../components/PostHeader'
import Footer from '../components/Footer'
import PostFooter from '../components/PostFooter'

import './all.css'

require("prismjs/themes/prism-tomorrow.css");

class Template extends React.Component {
    render() {
        const { location, children } = this.props
        let header, footer;

        if (location.pathname === '/') {
            header = ( <Header/> )
            footer = ( <Footer/> )
        } else {
            header = ( <PostHeader/> );
            footer = ( <PostFooter/> );
        }
        return (
            <div className="container">
                {header}
                {children()}
                {footer}
            </div>
        )
    }
}

export default Template

