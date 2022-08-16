export const umamiReport = (event: string, value: Object) => {
    if (window && (window as any).umami) {
        try {
            (window as any).umami.trackEvent(value, event);
        } catch (e) {
            console.log('umami', e);
        }
    }
}