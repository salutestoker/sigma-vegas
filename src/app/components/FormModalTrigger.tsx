'use client';

import {
    modalForms,
    toEmbeddedGoogleFormUrl,
    type ModalFormId,
} from '@/app/config/modalForms';
import { useEffect, useMemo, useState } from 'react';
import { createPortal } from 'react-dom';

type FormModalTriggerProps = {
    formId: ModalFormId;
    triggerClassName?: string;
    triggerLabel?: string;
};

export default function FormModalTrigger({
    formId,
    triggerClassName,
    triggerLabel,
}: FormModalTriggerProps) {
    const [isOpen, setIsOpen] = useState(false);
    const form = modalForms[formId];
    const embedUrl = useMemo(
        () => toEmbeddedGoogleFormUrl(form.formUrl),
        [form.formUrl],
    );

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

    const modal =
        isOpen && typeof document !== 'undefined'
            ? createPortal(
                  <div
                      className="fixed inset-0 z-[220] flex h-screen w-screen items-center justify-center bg-black/85 p-2 sm:p-6"
                      role="dialog"
                      aria-modal="true"
                      aria-label={form.modalTitle}
                      onClick={() => setIsOpen(false)}
                  >
                      <div
                          className="relative h-[92dvh] w-full max-w-5xl overflow-hidden rounded-lg border border-white/20 bg-black"
                          onClick={(event) => event.stopPropagation()}
                      >
                          <div className="flex items-center justify-between bg-black/70 px-3 py-2 sm:px-4 sm:py-3">
                              <p className="text-pink-primary font-impact text-base sm:text-xl">
                                  {form.modalTitle}
                              </p>
                              <button
                                  type="button"
                                  aria-label={`Close ${form.modalTitle}`}
                                  className="text-pink-primary flex h-8 w-8 items-center justify-center rounded-full border border-white/40 text-2xl leading-none transition hover:bg-white/10"
                                  onClick={() => setIsOpen(false)}
                              >
                                  &times;
                              </button>
                          </div>
                          <iframe
                              title={form.modalTitle}
                              src={embedUrl}
                              className="h-[calc(100%-48px)] w-full bg-white sm:h-[calc(100%-56px)]"
                              loading="lazy"
                          />
                      </div>
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
                {triggerLabel ?? form.triggerLabel}
            </button>
            {modal}
        </>
    );
}
