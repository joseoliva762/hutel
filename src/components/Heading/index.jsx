import React from 'react';
import { Button } from '@components/Button';
import './styles.scss';

export const Heading = ({ title, description, showAction, action, onClick }) => {
  return (
    <div className='heading'>
      <h1 className='title'>{title}</h1>
      <p className='description'>{description}</p>
      { showAction && <Button type="primary" height="56px" onClick={onClick}>{action}</Button> }
    </div>
  );
}