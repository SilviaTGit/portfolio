import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import {FaGraduationCap } from 'react-icons/fa';

function Timeline() {
    const events = [
        { title: 'Università degli Studi di Modena e Reggio Emilia', date: 'January 2020 - April 2023', description: "Master's Degree in Languages for communication in international enterprises and organizations", icon: <FaGraduationCap /> },
        { title: 'Openclassrooms', date: 'April 2024 - December 2024', description: 'Web Developer training program', icon: <FaGraduationCap /> },
    ];

    const getCSSVariable = (variableName) => {
        return getComputedStyle(document.documentElement).getPropertyValue(variableName);
    };

    return (
        <VerticalTimeline lineColor={getCSSVariable('--github')}>
            {events.map((event, index) => (
                <VerticalTimelineElement
                    key={index}
                    date={event.date}
                    iconStyle={{ background: getCSSVariable('--primary'), color: getCSSVariable('--white') }}
                    contentStyle={{
                        background: getCSSVariable('--bg-shade'),
                    }}
                    contentArrowStyle={{ borderRight: `7px solid ${getCSSVariable('--bg-shade')}` }}
                    icon={event.icon}
                >
                    <h3 className="vertical-timeline-element-title">{event.title}</h3>
                    <p>{event.description}</p>
                </VerticalTimelineElement>
            ))}
        </VerticalTimeline>
    );
}

export default Timeline;