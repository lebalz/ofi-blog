export const umamiReport = (event: string, value: Object) => {
    if (window && (window as any).umami) {
        (window as any).umami.trackEvent(value, event);
    }
}