import anime from 'animejs/lib/anime.es.js'

export default function Scroll(id) {
    const element = document.getElementById(id)
    const rect = element.getBoundingClientRect()

    const copyWindow = {
        scrollY: window.scrollY,
    }

    const scrollTo = Math.max(0, rect.y + copyWindow.scrollY - 150)

    if (scrollTo == copyWindow.scrollY) return

    anime({
        targets: copyWindow,
        scrollY: scrollTo,
        easing: 'linear',
        duration: 500,
        update: () => {
            window.scrollTo(0, copyWindow.scrollY)
        },
    })
}
