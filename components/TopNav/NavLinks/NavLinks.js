import React, {Component} from 'react';
import NavLink from './NavLink/NavLink';

const navLinkCategories = ['Resume', 'Story', 'Skills', 'Contact', 'Hire']



class NavLinks extends Component {   
    render() {
        let allLinks = navLinkCategories.map(el => <NavLink color="dark" linkTitle={el} />);
        return (
            <div>
            {allLinks}
            </div>
        )
    }
}

export default NavLinks;