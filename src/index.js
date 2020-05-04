import {SocialLinks} from "./SocialLinks";

const _getWindowUrl = () => {
    return window.location.href
}


export const ShareToFaceBook = () => {
    window.open(`${SocialLinks.FaceBook}${_getWindowUrl}`, '_blank');
}

export const ShareToTwitter = () => {
    window.open(`${SocialLinks.Twitter}${_getWindowUrl}`, '_blank');
}

export const ShareToReddit = () => {
    window.open(`${SocialLinks.Reddit}${_getWindowUrl}`, '_blank');
}

export const ShareToLinkedIn = () => {
    window.open(`${SocialLinks.LinkedIn}${_getWindowUrl}`, '_blank');
}

export const ShareToEmail = (email) => {
    window.open(`${SocialLinks.Email}${email}`);
}

export const ShareToTelegram = () => {
    window.open(`${SocialLinks.Telegram}${_getWindowUrl}`, '_blank');
}

export const ShareToWhatsApp = () => {
    window.open(`${SocialLinks.WhatsApp}${_getWindowUrl}`, '_blank');
}