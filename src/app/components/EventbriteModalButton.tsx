'use client';

import { useEffect } from 'react';

type EventbriteWidgetConfig = {
    widgetType: 'checkout';
    eventId: string;
    modal: boolean;
    modalTriggerElementId: string;
    onOrderComplete?: () => void;
};

declare global {
    interface Window {
        EBWidgets?: {
            createWidget: (config: EventbriteWidgetConfig) => void;
        };
        __eventbriteWidgetByTrigger?: Record<string, boolean>;
    }
}

type EventbriteModalButtonProps = {
    eventId: string;
    ticketUrl: string;
    className?: string;
    label?: string;
};

export default function EventbriteModalButton({
    eventId,
    ticketUrl,
    className,
    label = 'Buy Tickets',
}: EventbriteModalButtonProps) {
    const triggerId = `eventbrite-widget-modal-trigger-${eventId}`;

    useEffect(() => {
        if (typeof window === 'undefined') {
            return;
        }

        let cancelled = false;
        let pollId: number | null = null;
        let script = document.querySelector<HTMLScriptElement>(
            'script[data-eb-widgets="true"]',
        );

        const initializeWidget = () => {
            if (cancelled || !window.EBWidgets) {
                return;
            }

            window.__eventbriteWidgetByTrigger ??= {};
            if (window.__eventbriteWidgetByTrigger[triggerId]) {
                return;
            }

            window.EBWidgets.createWidget({
                widgetType: 'checkout',
                eventId,
                modal: true,
                modalTriggerElementId: triggerId,
                onOrderComplete: () => undefined,
            });
            window.__eventbriteWidgetByTrigger[triggerId] = true;
        };

        const handleLoad = () => {
            initializeWidget();
        };

        if (window.EBWidgets) {
            initializeWidget();
        } else {
            if (!script) {
                script = document.createElement('script');
                script.src =
                    'https://www.eventbrite.com/static/widgets/eb_widgets.js';
                script.async = true;
                script.dataset.ebWidgets = 'true';
                script.addEventListener('load', handleLoad);
                document.body.appendChild(script);
            } else {
                script.addEventListener('load', handleLoad);
            }

            pollId = window.setInterval(() => {
                if (window.EBWidgets) {
                    initializeWidget();
                    if (pollId !== null) {
                        window.clearInterval(pollId);
                    }
                }
            }, 250);
        }

        return () => {
            cancelled = true;
            if (pollId !== null) {
                window.clearInterval(pollId);
            }
            script?.removeEventListener('load', handleLoad);
        };
    }, [eventId, triggerId]);

    return (
        <>
            <noscript>
                <a href={ticketUrl} rel="noopener noreferrer" target="_blank">
                    Buy Tickets on Eventbrite
                </a>
            </noscript>
            <button
                id={triggerId}
                type="button"
                className={className}
                onClick={() => {
                    if (!window.EBWidgets) {
                        window.open(ticketUrl, '_blank', 'noopener,noreferrer');
                    }
                }}
            >
                {label}
            </button>
        </>
    );
}
