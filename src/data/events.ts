import { getImage } from 'astro:assets';

import pastEvent from '@assets/events/calendar-past-event.jpeg';
import thirdEventImage from '@assets/events/calendar-third-event.jpeg';
import calendarCoverImage from '@assets/events/calendar-cover.jpeg';

export interface Event {
	title: string;
	date: Date;
	description: string;
	image: {
		src: Awaited<ReturnType<typeof getImage>>;
	};
}

export async function getNext3Events(): Promise<Event[]> {
	const image1 = await getImage({ src: thirdEventImage });
	const image2 = await getImage({ src: calendarCoverImage });
	const image3 = await getImage({ src: pastEvent });

	const next3Events = [
		{
			title: 'Silvester',
			date: new Date(2023, 11, 29),
			description: 'Lass uns gemeinsam in das neue Jahr starten!',
			image: {
				src: image1,
			},
		},
		{
			title: 'Bauwoche in Rosow',
			date: new Date(2024, 3, 1),
			description: 'Können wir das schaffen? Yo wir schaffen das!',
			image: {
				src: image2,
			},
		},
		{
			title: 'Mitgliederversammlung',
			date: new Date(2024, 3, 4),
			description: 'Alle Jahre wieder: Sei dabei, entscheide und gestalte mit!',
			image: {
				src: image3,
			},
		},
	];
	return next3Events;
}
