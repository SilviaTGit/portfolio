import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import {FaGraduationCap } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

function Timeline() {
    const { t } = useTranslation();

    const events = [
        {
            titleKey: 'timeline.university.title',
            dateKey: 'timeline.university.date',
            descriptionKey: 'timeline.university.description',
            icon: <FaGraduationCap />,
        },
        {
            titleKey: 'timeline.openclassrooms.title',
            dateKey: 'timeline.openclassrooms.date',
            descriptionKey: 'timeline.openclassrooms.description',
            icon: <FaGraduationCap />,
        },
    ];

    const getCSSVariable = (variableName) => {
        return getComputedStyle(document.documentElement).getPropertyValue(variableName);
    };

    return (
        <VerticalTimeline lineColor={getCSSVariable('--secondary')}>
            {events.map((event, index) => (
                <VerticalTimelineElement
                    key={index}
                    date={t(event.dateKey)}
                    iconStyle={{ background: getCSSVariable('--primary'), color: getCSSVariable('--white') }}
                    contentStyle={{
                        background: getCSSVariable('--bg-shade'),
                    }}
                    contentArrowStyle={{ borderRight: `7px solid ${getCSSVariable('--bg-shade')}` }}
                    icon={event.icon}
                >
                    <h3 className="vertical-timeline-element-title">{t(event.titleKey)}</h3>
                    <p>{t(event.descriptionKey)}</p>
                </VerticalTimelineElement>
            ))}
        </VerticalTimeline>
    );
}

export default Timeline;