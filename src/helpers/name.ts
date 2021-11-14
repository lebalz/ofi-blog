const MAIL_REGEX = /(?<first>\b\S+\b)\.(?<last>\b\S+\b)@.*/;

export const firstNameFromEmail = (email: string) => {
    const mail = email.match(MAIL_REGEX);
    if (!mail || !mail.groups) {
        return email;
    }
    const { first } = mail.groups as { first: string; last: string };
    return `${first[0].toUpperCase()}${first.slice(1)}`;
};
export const lastNameFromEmail = (email: string) => {
    const mail = email.match(MAIL_REGEX);
    if (!mail || !mail.groups) {
        return email;
    }
    const { last } = mail.groups as { first: string; last: string };
    return `${last[0].toUpperCase()}${last.slice(1)}`;
};
