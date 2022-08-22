import React from 'react';
import './styles.scss';

export const Button = ({ children, type, height, width, onClick }) => {
  const inlineStyles = {
    height: height ? height : '100%',
    width: width ? width : 'auto'
  }
  return (
    <button className={`button button-${type}`} style={inlineStyles} onClick={onClick}>
      {children}
    </button>
  );
}