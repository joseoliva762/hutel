import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { BiHotel, BiCar, BiGame, BiTaxi, BiPaperPlane } from "react-icons/bi";
import "./styles.scss";

const Icons = ({ Icon }) => {
  return <Icon color="#1a4091" height="24px" width="24px" />;
};

export const Services = ({ parentScrollTop }) => {
  const [isSticky, setIsSticky] = useState(parentScrollTop > 0);

  useEffect(() => {
    setIsSticky(parentScrollTop >= 64);
  } , [parentScrollTop]);

  const inlineStyles = isSticky ? {
    'backgroundColor': '#fff'
  } : {};

  return (
    <div className="services" style={inlineStyles}>
      {isSticky && (
        <div className="brand">
          <Link to="/">
            <h1>Hutel</h1>
          </Link>
        </div>
      )}
      <button className="service">
        <Icons Icon={BiHotel} />
        <span>Stays</span>
      </button>
      <button className="service active">
        <Icons Icon={BiPaperPlane} />
        <span>Flights</span>
      </button>
      <button className="service">
        <Icons Icon={BiCar} />
        <span>Cars</span>
      </button>
      <button className="service">
        <Icons Icon={BiGame} />
        <span>Attractions</span>
      </button>
      <button className="service">
        <Icons Icon={BiTaxi} />
        <span>Airport taxis</span>
      </button>
    </div>
  );
};
