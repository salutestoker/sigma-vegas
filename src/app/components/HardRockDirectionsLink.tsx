'use client';

import type { MouseEvent } from 'react';

type HardRockDirectionsLinkProps = {
    className?: string;
    label?: string;
};

const DESKTOP_DIRECTIONS_URL =
    'https://www.google.com/maps?rlz=1C5AJCO_enUS1197US1197&gs_lcrp=EgZjaHJvbWUqCggAEAAY4wIYgAQyCggAEAAY4wIYgAQyDQgBEC4YrwEYxwEYgAQyBwgCEAAYgAQyBwgDEAAYgAQyBwgEEAAYgAQyBwgFEAAYgAQyBwgGEAAYgAQyBggHEEUYPdIBCDY2NTdqMGo3qAIAsAIA&um=1&ie=UTF-8&fb=1&gl=us&sa=X&geocode=KTNcJWszxMiAMZyUP5ZVHTw6&daddr=3771+Las+Vegas+Blvd+S+%23120,+Las+Vegas,+NV+89109';

const DESTINATION_ADDRESS = '3771 Las Vegas Blvd S #120, Las Vegas, NV 89109';
const ENCODED_ADDRESS = encodeURIComponent(DESTINATION_ADDRESS);
const IOS_MAPS_URL = `https://maps.apple.com/?daddr=${ENCODED_ADDRESS}`;
const ANDROID_MAPS_URL = `geo:0,0?q=${ENCODED_ADDRESS}`;

export default function HardRockDirectionsLink({
    className,
    label = 'Hard Rock Cafe',
}: HardRockDirectionsLinkProps) {
    const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
        const userAgent = navigator.userAgent ?? '';
        const isTouchMac =
            navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1;
        const isIOS = /iPad|iPhone|iPod/i.test(userAgent) || isTouchMac;
        const isAndroid = /Android/i.test(userAgent);

        if (!isIOS && !isAndroid) {
            return;
        }

        event.preventDefault();
        window.location.href = isIOS ? IOS_MAPS_URL : ANDROID_MAPS_URL;
    };

    return (
        <a
            href={DESKTOP_DIRECTIONS_URL}
            className={className}
            target="_blank"
            onClick={handleClick}
            rel="noopener noreferrer"
        >
            {label}
        </a>
    );
}
