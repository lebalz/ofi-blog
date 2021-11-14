export const umamiReport = (event: string, value: string) => {
    if (window && (window as any).umami) {
        (window as any).umami.trackEvent(value, event);
    }
}