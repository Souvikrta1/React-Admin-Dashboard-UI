import React, { useRef } from 'react';
import FullCalendar from '@fullcalendar/react';
import daygridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import timegridPlugin from '@fullcalendar/timegrid';
import "./Calender.css"
import useCalender from '../../store/Calender';
import { createEventId } from '../../data';

const Calender = () => {
    //getting initial events
    const {currentEvents} = useCalender();

    //Deleting Events
    const handleEventClick = (clickInfo) =>{
        if(
            confirm('Are you sure you want to delete this event?')
        ){
            clickInfo.event.remove();
        }
    }

    //Adding Events
    const handleDateSelect = (selectInfo) =>{
        let title = prompt('Please enter a title for the event');
        let calenderApi = selectInfo.view.calender;
        console.log(selectInfo.view)
        calenderApi.unselect()
        
        if(title){
            calenderApi.addEvent({
                id : createEventId(),
                title,
                start : selectInfo.start,
                end : selectInfo.end,
                allDay : selectInfo.allDay
            })
        }
    }

    return (
        <div className='calender-container'>
            <div>
                <FullCalendar
                    plugins={[daygridPlugin, interactionPlugin, timegridPlugin]}
                    headerToolbar={{
                        left: 'prev,next today',
                        center: 'title',
                        right: 'dayGridMonth,timeGridWeek,timeGridDay'
                    }}
                    allDaySlot={false}
                    initialView="timeGridWeek"
                    slotDuration={"01:00:00"}
                    editable={true}
                    selectable={true}
                    selectMirror={true}
                    dayMaxEvents={true}
                    weekends={true}
                    nowIndicator={true}
                    initialEvents={currentEvents} //sets initial event
                    contentHeight={500}
                    select={handleDateSelect}
                    eventClick={handleEventClick}
                />
            </div>
        </div>
    )
}

export default Calender;
