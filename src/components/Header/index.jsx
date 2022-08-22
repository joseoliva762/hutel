import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@components/Button';
import './styles.scss';
import { BiMenu } from 'react-icons/bi';

export const Header = () => {
  return (
    <header className='header'>
      <div className='brand'>
        <Link to='/'>
          <h1>Hutel</h1>
        </Link>
      </div>
      <nav className='navigation'>
        <ul className='menu'>
          <li className='menu-item'>
            <Link to='/'>Home</Link>
          </li>
          <li className='menu-item'>
            <Link to='/hotels'>Hotels</Link>
          </li>
        </ul>
        <div className='menu'>
          <Button type="secondary">Register</Button>
          <Button type="primary">Sing in</Button>
        </div>
      </nav>
      <div className="hamburger">
        <Button type="tertiary">
          <BiMenu color='#1a4091' height="24" width="24" />
          <p>Menu</p>
        </Button>
      </div>
    </header>
  )
};