import React from 'react'
import Link from 'gatsby-link'


const Header = (props) => (
    <div>
        <h1><Link to={'/'}>Mike Crittenden</Link></h1>
        <p>You should hire me for <a href="http://littlebluelabs.com">Drupal consulting</a> or <a href="http://drupalcheck.com">Drupal site audits</a>!</p><br /><br /><br />
    </div>
)

export default Header
