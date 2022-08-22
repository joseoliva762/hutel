import React, { useState } from "react";
import { BiPaperPlane, BiCalendar, BiUser } from "react-icons/bi";
import { DateRange } from "react-date-range";
import { Button } from "@components/Button";
import { format } from "date-fns";
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import "./styles.scss";

const calendarInitialState = [
  {
    startDate: new Date(),
    endDate: new Date(),
    key: "selection",
  },
];

export const Search = () => {
  const [calendarRanges, setCalendarRanges] = useState(calendarInitialState);
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const dateFormat = "	E, dd MMM";

  return (
    <>
      <div className="search">
        <section className="input">
          <BiPaperPlane className="icon" />
          <input type="search" placeholder="Where are you going?" />
        </section>
        <section className="input date">
          <BiCalendar className="icon" />
          <span onClick={() => setIsCalendarOpen(!isCalendarOpen)}>
            {format(calendarRanges[0].startDate, dateFormat)} - {format(calendarRanges[0].endDate, dateFormat)}
          </span>
          {
            isCalendarOpen && (
              <DateRange
                className="date-range"
                editableDateInputs={true}
                onChange={(item) => setCalendarRanges([item.selection])}
                moveRangeOnFirstSelection={false}
                ranges={calendarRanges}
              />
            )
          }
        </section>
        <section className="input people">
          <BiUser className="icon" />
          <span>1 adult · 0 children · 1 room</span>
        </section>
        <Button type="primary" height="46px">
          Search
        </Button>
      </div>
    </>
  );
};
