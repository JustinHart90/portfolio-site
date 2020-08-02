// CAROUSEL
export interface CarouselData {
    data: {
      title: string;
      images: Array<string>;
    }
}

export interface CarouselImage {
    imageUrl: string;
    index: number;
}

// ICON ROW
export interface IconRow {
    shouldAnimate: boolean;
    isContactForm: boolean;
}

export interface IconData {
    id: string;
    tooltip: any;
    readonly src: string;
    readonly href: string;
}

export interface IconDetails extends IconData {
    classNames: string;
}

export interface RenderIcon extends IconDetails {
    isPopoverOpen: boolean;
    setIsPopoverOpen(isPopoverOpen: boolean) : void;
}

// NOTIFICATION
export interface Notification {
    show: boolean;
    title: string;
    message: string;
}

// SPINNER
export interface Spinner {
    loading: boolean
}