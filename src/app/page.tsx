import EventbriteModalButton from '@/app/components/EventbriteModalButton';
import NftPerksOverlayButton from '@/app/components/NftPerksOverlayButton';
import Image from 'next/image';
export default function Home() {
    return (
        <>
            <div className="font-primary font-impact z-100 flex w-full items-center justify-center text-center text-red-700 uppercase sm:hidden">
                <div className="flex items-center gap-1">
                    <div className="flex w-full items-center justify-center gap-1 px-1 py-2">
                        April 30th, 2026, 8pm - 12am @ Hard Rock Cafe
                    </div>
                </div>
            </div>
            <div className="relative h-dvh w-dvw overflow-hidden font-sans">
                <div className="text-pink-primary absolute left-1/2 z-40 flex w-full -translate-x-1/2 flex-col gap-3 md:top-[10%]">
                    <h1 className="font-heading mt-[5%] flex flex-col items-center justify-center gap-1 px-6 py-1 text-center text-7xl tracking-wide sm:mt-0">
                        <span className="font-secondary text-4xl">
                            XRP VEGAS
                        </span>
                        After Party
                    </h1>
                    <div className="font-primary font-impact hidden w-full items-center justify-center text-xl text-black/75 sm:flex">
                        <div className="flex items-center gap-1">
                            <div className="flex w-full items-center justify-center gap-1 px-2 py-2 sm:w-auto">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="size-6"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M6.75 2.994v2.25m10.5-2.25v2.25m-14.252 13.5V7.491a2.25 2.25 0 0 1 2.25-2.25h13.5a2.25 2.25 0 0 1 2.25 2.25v11.251m-18 0a2.25 2.25 0 0 0 2.25 2.25h13.5a2.25 2.25 0 0 0 2.25-2.25m-18 0v-7.5a2.25 2.25 0 0 1 2.25-2.25h13.5a2.25 2.25 0 0 1 2.25 2.25v7.5m-6.75-6h2.25m-9 2.25h4.5m.002-2.25h.005v.006H12v-.006Zm-.001 4.5h.006v.006h-.006v-.005Zm-2.25.001h.005v.006H9.75v-.006Zm-2.25 0h.005v.005h-.006v-.005Zm6.75-2.247h.005v.005h-.005v-.005Zm0 2.247h.006v.006h-.006v-.006Zm2.25-2.248h.006V15H16.5v-.005Z"
                                    />
                                </svg>
                                Thursday - April 30th, 2026
                            </div>
                            <div className="flex w-[calc(50%-5px)] items-center justify-center gap-1 px-2 py-2 sm:w-auto">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="size-6"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                                    />
                                </svg>
                                8pm - 12am
                            </div>
                            <div className="flex w-[calc(50%-5px)] items-center justify-center gap-1 px-2 py-2 sm:w-auto">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="size-6"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                                    />
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                                    />
                                </svg>
                                Hard Rock Cafe
                            </div>
                        </div>
                    </div>

                    <div className="mx-auto mt-2 grid w-full max-w-[400px] grid-cols-1 justify-center gap-2 px-2 md:max-w-[680px] md:grid-cols-2 lg:max-w-[680px] lg:grid-cols-2">
                        <EventbriteModalButton
                            eventId="1986755224358"
                            ticketUrl="https://www.eventbrite.com/e/xrp-vegas-after-party-2026-tickets-1986755224358"
                            className="primary-button"
                            label="RSVP"
                        />
                        <NftPerksOverlayButton triggerClassName="primary-button" />

                        <a
                            href="mailto:sigmaonxrplnfts@gmail.com"
                            className="primary-button"
                        >
                            Sponsor Event
                        </a>
                        <a
                            href="mailto:sigmaonxrplnfts@gmail.com"
                            className="primary-button"
                        >
                            Become VIP
                        </a>
                    </div>
                </div>
                {/*<div className="absolute top-0 left-0 z-20 h-screen w-screen bg-black/70"></div>*/}
                {/*<div className="absolute top-0 left-0 z-10 h-screen w-screen bg-red-500 mix-blend-color-burn"></div>*/}
            </div>

            <div className="absolute bottom-0 left-0 z-50 flex w-full translate-y-[15%] items-center justify-center">
                <Image
                    className="mx-auto max-w-[180px] sm:max-w-[300px] md:max-w-[400px]"
                    src="/images/sigma-vegas-logo-2026.png"
                    alt="Sigma logo"
                    width={771}
                    height={432}
                    priority
                />
            </div>
        </>
    );
}
