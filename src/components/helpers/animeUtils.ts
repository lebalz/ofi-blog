
import anime from 'animejs';

export const removeAnimations = (animItems: HTMLDivElement[] | null) => {
    if (!animItems) {
        return;
    }
    /** stop current running animations */
    animItems.forEach((item) => {
        if (item) {
            anime.remove(item);
        }
    });
};

export const pauseAnimations = (animItems: anime.AnimeInstance[]) => {
    animItems.forEach((anim) => {
        if (anim) {
            anim.pause();
        }
    });
};

export const playAnimations = (animItems: anime.AnimeInstance[]) => {
    animItems.forEach((anim) => {
        if (anim) {
            anim.play();
        }
    });
};