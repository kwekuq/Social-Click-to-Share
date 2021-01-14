const SocialLinks = {
    FaceBook : "https://www.facebook.com/sharer/sharer.php?u=",
    Twitter : "https://twitter.com/intent/tweet?url=",
    LinkedIn : "https://www.linkedin.com/shareArticle?mini=true&url=",
    Reddit : "http://www.reddit.com/submit?url=",
    Email : "mailto:",
    Telegram : "https://telegram.me/share/url?url=",
    WhatsApp : "https://wa.me/?text="
}

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