// Tentang Kami - Specific JavaScript
// File: tentang-kami.js

document.addEventListener("DOMContentLoaded", () => {
  initializeCountUpAnimation()
  initializeStatsAnimation()
  initializeCoreValuesAnimation()
  initializeScrollAnimations()
  initializeParallaxEffect()
  initializeVisionMissionAnimation()
})

// Count Up Animation using requestAnimationFrame
function initializeCountUpAnimation() {
  const counters = document.querySelectorAll(".count-up")

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const counter = entry.target
          const target = Number.parseInt(counter.getAttribute("data-target"))

          animateCounter(counter, target)
          observer.unobserve(counter)
        }
      })
    },
    { threshold: 0.5 },
  )

  counters.forEach((counter) => {
    observer.observe(counter)
  })
}

function animateCounter(element, target) {
  let current = 0
  const duration = 2000 // 2 seconds
  const startTime = performance.now()

  function updateCounter(currentTime) {
    const elapsed = currentTime - startTime
    const progress = Math.min(elapsed / duration, 1)

    // Easing function (ease-out-cubic)
    const easeOutCubic = 1 - Math.pow(1 - progress, 3)
    current = Math.floor(target * easeOutCubic)

    // Format number with + suffix except for years
    const suffix = target === 4 ? "+" : "+"
    element.textContent = current + suffix

    if (progress < 1) {
      requestAnimationFrame(updateCounter)
    } else {
      element.textContent = target + suffix
    }
  }

  requestAnimationFrame(updateCounter)
}

// Stats Animation
function initializeStatsAnimation() {
  const statsCards = document.querySelectorAll(".stats-card")
  const progressBars = document.querySelectorAll(".stats-progress")

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          const card = entry.target
          const progressBar = card.querySelector(".stats-progress")

          // Animate progress bar
          setTimeout(
            () => {
              if (progressBar) {
                progressBar.style.transform = "translateX(0)"
              }
            },
            index * 200 + 500,
          )

          observer.unobserve(card)
        }
      })
    },
    { threshold: 0.3 },
  )

  statsCards.forEach((card) => {
    observer.observe(card)
  })

  // Enhanced hover effects for stats cards
  statsCards.forEach((card) => {
    const icon = card.querySelector("i")

    card.addEventListener("mouseenter", () => {
      card.style.transform = "translateY(-12px) scale(1.03)"
      card.style.boxShadow = "0 25px 50px rgba(0, 0, 0, 0.15)"

      if (icon) {
        icon.style.transform = "scale(1.2) rotate(10deg)"
      }
    })

    card.addEventListener("mouseleave", () => {
      card.style.transform = "translateY(0) scale(1)"
      card.style.boxShadow = ""

      if (icon) {
        icon.style.transform = "scale(1) rotate(0deg)"
      }
    })
  })
}

// Core Values Animation
function initializeCoreValuesAnimation() {
  const valueCards = document.querySelectorAll(".core-value-card")

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          const card = entry.target

          setTimeout(() => {
            card.style.opacity = "1"
            card.style.transform = "translateY(0) scale(1)"
          }, index * 150)

          observer.unobserve(card)
        }
      })
    },
    { threshold: 0.2 },
  )

  valueCards.forEach((card) => {
    // Initial state
    card.style.opacity = "0"
    card.style.transform = "translateY(30px) scale(0.95)"
    card.style.transition = "all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)"

    observer.observe(card)

    // Enhanced hover effects
    const icon = card.querySelector(".core-value-icon")

    card.addEventListener("mouseenter", () => {
      card.style.transform = "translateY(-12px) scale(1.05)"
      card.style.boxShadow = "0 20px 40px rgba(0, 0, 0, 0.15)"

      if (icon) {
        icon.style.transform = "scale(1.3) rotate(10deg)"
        icon.style.filter = "brightness(1.2)"
      }
    })

    card.addEventListener("mouseleave", () => {
      card.style.transform = "translateY(0) scale(1)"
      card.style.boxShadow = ""

      if (icon) {
        icon.style.transform = "scale(1) rotate(0deg)"
        icon.style.filter = "brightness(1)"
      }
    })
  })
}

// Scroll Animations
function initializeScrollAnimations() {
  const fadeElements = document.querySelectorAll(".fade-in")
  const slideLeftElements = document.querySelectorAll(".slide-in-left")
  const slideRightElements = document.querySelectorAll(".slide-in-right")

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible")
          observer.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.1, rootMargin: "0px 0px -50px 0px" },
  )

  // Add CSS classes and observe elements
  const addAnimationClasses = (elements, animationClass) => {
    elements.forEach((element) => {
      element.classList.add(animationClass)
      observer.observe(element)
    })
  }

  addAnimationClasses(fadeElements, "fade-animation")
  addAnimationClasses(slideLeftElements, "slide-left-animation")
  addAnimationClasses(slideRightElements, "slide-right-animation")
}

// Parallax Effect
function initializeParallaxEffect() {
  const heroSection = document.querySelector(".hero-about")

  if (!heroSection) return

  let ticking = false

  function updateParallax() {
    const scrolled = window.pageYOffset
    const rate = scrolled * -0.3

    heroSection.style.transform = `translateY(${rate}px)`
    ticking = false
  }

  window.addEventListener("scroll", () => {
    if (!ticking) {
      requestAnimationFrame(updateParallax)
      ticking = true
    }
  })
}

// Vision & Mission Card Animations
function initializeVisionMissionAnimation() {
  const visionCard = document.querySelector(".vision-card")
  const missionCard = document.querySelector(".mission-card")

  const cards = [visionCard, missionCard]

  cards.forEach((card, index) => {
    if (!card) return

    card.addEventListener("mouseenter", () => {
      card.style.transform = "translateX(10px) scale(1.02)"
      card.style.boxShadow = "0 15px 30px rgba(0, 0, 0, 0.1)"
    })

    card.addEventListener("mouseleave", () => {
      card.style.transform = "translateX(0) scale(1)"
      card.style.boxShadow = ""
    })
  })
}

// Add CSS animations
const animationCSS = `
  .fade-animation {
    opacity: 0;
    transform: translateY(30px);
    transition: opacity 0.8s ease-out, transform 0.8s ease-out;
  }
  
  .fade-animation.visible {
    opacity: 1;
    transform: translateY(0);
  }
  
  .slide-left-animation {
    opacity: 0;
    transform: translateX(-50px);
    transition: opacity 0.8s ease-out, transform 0.8s ease-out;
  }
  
  .slide-left-animation.visible {
    opacity: 1;
    transform: translateX(0);
  }
  
  .slide-right-animation {
    opacity: 0;
    transform: translateX(50px);
    transition: opacity 0.8s ease-out, transform 0.8s ease-out;
  }
  
  .slide-right-animation.visible {
    opacity: 1;
    transform: translateX(0);
  }
  
  .vision-card, .mission-card {
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }
  
  @media (max-width: 768px) {
    .core-value-card {
      margin-bottom: 1rem;
    }
  }
`

// Inject CSS
const style = document.createElement("style")
style.textContent = animationCSS
document.head.appendChild(style)

// Loading animation for images
function initializeImageLoading() {
  const images = document.querySelectorAll("img")

  images.forEach((img) => {
    img.addEventListener("load", () => {
      img.style.opacity = "1"
      img.style.transform = "scale(1)"
    })

    // Set initial state
    img.style.opacity = "0"
    img.style.transform = "scale(1.05)"
    img.style.transition = "all 0.6s ease-out"
  })
}

initializeImageLoading()
