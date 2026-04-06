'use client';

import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

type NftPerksOverlayButtonProps = {
    triggerClassName: string;
};

export default function NftPerksOverlayButton({
    triggerClassName,
}: NftPerksOverlayButtonProps) {
    const [isOpen, setIsOpen] = useState(false);
    const rotatorRef = useRef<HTMLDivElement | null>(null);
    const rotatorWords = [
        'free food',
        'free drinks',
        'no wait',
        'surprise giveaways',
    ];

    useEffect(() => {
        if (!isOpen) {
            return;
        }

        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = 'hidden';

        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                setIsOpen(false);
            }
        };

        window.addEventListener('keydown', handleKeyDown);

        return () => {
            document.body.style.overflow = previousOverflow;
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [isOpen]);

    useEffect(() => {
        if (!isOpen || !rotatorRef.current) {
            return;
        }

        const wrapper = rotatorRef.current.querySelector(
            '.word-rotator__words',
        ) as HTMLSpanElement | null;
        const words = Array.from(
            rotatorRef.current.querySelectorAll('.word-rotator__word'),
        ) as HTMLSpanElement[];

        if (!wrapper || words.length === 0) {
            return;
        }

        let currentIndex = words.findIndex((word) =>
            word.classList.contains('is-visible'),
        );

        if (currentIndex < 0) {
            currentIndex = 0;
            words[0]?.classList.add('is-visible');
        }

        const setWrapperWidth = (index: number) => {
            const targetWord = words[index];
            const targetWidth = targetWord
                ? Math.ceil(targetWord.getBoundingClientRect().width)
                : 0;
            wrapper.style.width = `${targetWidth}px`;
        };

        setWrapperWidth(currentIndex);

        if (words.length < 2) {
            return () => {
                wrapper.style.width = '';
            };
        }

        let timeoutId: number | null = null;
        const cycleMs = 2400;

        const scheduleNext = () => {
            timeoutId = window.setTimeout(() => {
                const currentWord = words[currentIndex];
                const nextIndex = (currentIndex + 1) % words.length;
                const nextWord = words[nextIndex];

                currentWord.classList.remove('is-visible');
                currentWord.classList.add('is-hidden');
                nextWord.classList.remove('is-hidden');
                nextWord.classList.add('is-visible');
                setWrapperWidth(nextIndex);

                currentIndex = nextIndex;
                scheduleNext();
            }, cycleMs);
        };

        scheduleNext();

        return () => {
            if (timeoutId !== null) {
                window.clearTimeout(timeoutId);
            }

            words.forEach((word, index) => {
                word.classList.remove('is-hidden', 'is-visible');
                if (index === 0) {
                    word.classList.add('is-visible');
                }
            });
            wrapper.style.width = '';
        };
    }, [isOpen]);

    const overlay =
        isOpen && typeof document !== 'undefined'
            ? createPortal(
                  <div className="fixed inset-0 z-[120] h-screen w-screen bg-black">
                      <div className="fixed z-10 h-screen w-screen bg-black/75"></div>
                      <div className="fixed z-20 flex h-screen w-screen flex-col items-center justify-center">
                          <h1 className="text-pink-primary font-heading flex flex-col items-center justify-center gap-1 px-6 py-1 text-center text-7xl tracking-wide">
                              <span className="font-secondary text-2xl">
                                  SIGMA NFT
                              </span>
                              Vegas Perks
                          </h1>
                          <div
                              ref={rotatorRef}
                              className="word-rotator mt-2 text-center text-lg text-white sm:text-2xl"
                          >
                              <span className="word-rotator__label">
                                  If you own a SIGMA NFT you get{' '}
                              </span>
                              <span className="word-rotator__words">
                                  {rotatorWords.map((word, index) => (
                                      <span
                                          key={word}
                                          className={`bg-pink-primary word-rotator__word px-2 ${index === 0 ? 'is-visible' : ''}`}
                                      >
                                          {word}
                                      </span>
                                  ))}
                              </span>
                              <span className="word-rotator__punctuation">
                                  .
                              </span>
                          </div>
                          <div className="mt-8 flex items-center gap-2">
                              <a
                                  target="_blank"
                                  href="https://xrp.cafe/collection/sigmaonxrpl?sort=low"
                                  className="primary-button min-w-[270px]"
                              >
                                  Buy Off Floor
                              </a>
                              <a
                                  target="_blank"
                                  href="https://docs.google.com/forms/d/e/1FAIpQLSeefKoJ8H93LoNaFeHuoAK1TD8NbuquRFzRymQe3eYsU_hG4Q/viewform?pli=1"
                                  className="primary-button min-w-[270px]"
                              >
                                  Request Custom NFT
                              </a>
                          </div>
                      </div>
                      <video
                          className="h-full w-full object-cover"
                          src="/videos/sigma-vegas-nfts.mp4"
                          autoPlay
                          loop
                          muted
                          playsInline
                      />
                      <button
                          type="button"
                          aria-label="Close NFT perks video"
                          className="absolute top-4 right-4 z-[121] flex h-7 w-7 items-center justify-center rounded-full bg-black/70 text-xl leading-none text-white transition hover:bg-black"
                          onClick={() => setIsOpen(false)}
                      >
                          &times;
                      </button>
                  </div>,
                  document.body,
              )
            : null;

    return (
        <>
            <button
                type="button"
                className={triggerClassName}
                onClick={() => setIsOpen(true)}
            >
                NFT Perks
            </button>

            {overlay}
        </>
    );
}
