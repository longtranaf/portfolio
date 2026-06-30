// Adds an `is-visible` class to elements with `.reveal` when they scroll into view.
export function useReveal() {
  onMounted(() => {
    const els = document.querySelectorAll<HTMLElement>('.reveal')
    if (!('IntersectionObserver' in window) || els.length === 0) {
      els.forEach((el) => el.classList.add('is-visible'))
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12 }
    )

    els.forEach((el) => observer.observe(el))

    onBeforeUnmount(() => observer.disconnect())
  })
}
