export type ModalFormDefinition = {
    triggerLabel: string;
    modalTitle: string;
    formUrl: string;
    recipientEmail: string;
};

export const modalForms = {
    requestCustomNft: {
        triggerLabel: 'Request Custom NFT',
        modalTitle: 'Request Custom NFT',
        formUrl:
            'https://docs.google.com/forms/d/e/1FAIpQLSeefKoJ8H93LoNaFeHuoAK1TD8NbuquRFzRymQe3eYsU_hG4Q/viewform?pli=1',
        recipientEmail: 'set-recipient-email@yourdomain.com',
    },
} as const satisfies Record<string, ModalFormDefinition>;

export type ModalFormId = keyof typeof modalForms;

export const toEmbeddedGoogleFormUrl = (formUrl: string) => {
    const url = new URL(formUrl);
    url.searchParams.set('embedded', 'true');
    return url.toString();
};
