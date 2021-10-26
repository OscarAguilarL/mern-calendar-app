import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';

import { Navbar } from '../ui/Navbar';
import { messages } from '../../helpers/calendar-messages-es';

import 'moment/locale/es';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { CalendarEvent } from './CalendarEvent';
import { CalendarModal } from './CalendarModal';
import { useDispatch } from 'react-redux';
import { uiOpenModal } from '../../actions/ui';
import { eventSetActive } from '../../actions/events';
import { AddNewFab } from '../ui/AddNewFab';
import { useSelector } from 'react-redux';

moment.locale('es');

const localizer = momentLocalizer(moment);

export const CalendarScreen = () => {
    const dispatch = useDispatch();

    const { events } = useSelector(state => state.calendar);

    const [lastView, setLastView] = useState(
        localStorage.getItem('lastView') || 'month'
    );

    const onDoubleClick = (e) => {
        dispatch(uiOpenModal());
    };

    const onSelect = (e) => {
        dispatch(eventSetActive(e));
    };

    const onViewChange = (e) => {
        setLastView(e);
        localStorage.setItem('lastView', e);
    };

    const eventStyleGetter = (event, start, end, isSelected) => {
        const style = {
            backgroundColor: '#367cf7',
            borderRadius: 0,
            opacity: 0.8,
            display: 'block',
            color: 'white',
        };

        return {
            style,
        };
    };

    return (
        <div className="calendar-screen">
            <Navbar />

            <Calendar
                localizer={localizer}
                events={events}
                startAccessor="start"
                endAccessor="end"
                messages={messages}
                onDoubleClickEvent={onDoubleClick}
                onSelectEvent={onSelect}
                onView={onViewChange}
                view={lastView}
                eventPropGetter={eventStyleGetter}
                components={{
                    event: CalendarEvent,
                }}
            />

            <AddNewFab />

            <CalendarModal />
        </div>
    );
};
