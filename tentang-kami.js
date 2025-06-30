// Tentang Kami - Specific JavaScript
// File: tentang-kami.js

document.addEventListener("DOMContentLoaded", () => {
  initializeCounterAnimation()
  initializeTimelineAnimation()
})

// Counter Animation
function initializeCounterAnimation() {
  const counters = document.querySelectorAll("[data-count]")

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const counter = entry.target
        const target = Number.parseInt(counter.getAttribute("data-count"))
        let current = 0
        const increment = target / 100

        const updateCounter = () => {
          if (current < target) {
            current += increment
            counter.textContent = Math.ceil(current)
            requestAnimationFrame(updateCounter)
          } else {
            counter.textContent = target + "+"
          }
        }

        updateCounter()
        observer.unobserve(counter)
      }
    })
  })

  counters.forEach((counter) => {
    observer.observe(counter)
  })
}

// Timeline Animation (jika ada)
function initializeTimelineAnimation() {
  const timelineItems = document.querySelectorAll(".timeline-item")

  if (timelineItems.length === 0) return

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-in")
        }
      })
    },
    { threshold: 0.5 },
  )

  timelineItems.forEach((item) => {
    observer.observe(item)
  })
}
