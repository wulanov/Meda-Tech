// Image upload functionality
let currentProject = ""
let currentDevice = ""

function uploadImage(project, device) {
  currentProject = project
  currentDevice = device

  const fileInput = document.getElementById("imageUpload")
  fileInput.click()
}

document.getElementById("imageUpload").addEventListener("change", (e) => {
  const file = e.target.files[0]
  if (file) {
    const reader = new FileReader()
    reader.onload = (e) => {
      const imageUrl = e.target.result
      const imgElement = document.getElementById(`${currentProject}-${currentDevice}`)
      if (imgElement) {
        imgElement.src = imageUrl

        // Add fade-in animation
        imgElement.style.opacity = "0"
        setTimeout(() => {
          imgElement.style.transition = "opacity 0.5s ease"
          imgElement.style.opacity = "1"
        }, 100)
      }
    }
    reader.readAsDataURL(file)
  }
})

// Smooth scrolling animation for project cards
function animateOnScroll() {
  const projectCards = document.querySelectorAll(".project-card")

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = "1"
          entry.target.style.transform = "translateY(0)"
        }
      })
    },
    {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    },
  )

  projectCards.forEach((card) => {
    card.style.opacity = "0"
    card.style.transform = "translateY(50px)"
    card.style.transition = "opacity 0.8s ease, transform 0.8s ease"
    observer.observe(card)
  })
}

// Initialize animations when page loads
document.addEventListener("DOMContentLoaded", () => {
  animateOnScroll()

  // Add hover effects to device mockups
  const deviceContainers = document.querySelectorAll(".device-container")
  deviceContainers.forEach((container) => {
    container.addEventListener("mouseenter", function () {
      this.style.transform = "scale(1.05)"
      this.style.transition = "transform 0.3s ease"
    })

    container.addEventListener("mouseleave", function () {
      this.style.transform = "scale(1)"
    })
  })
})

// Add parallax effect to hero section
window.addEventListener("scroll", () => {
  const scrolled = window.pageYOffset
  const heroSection = document.querySelector(".hero-section")
  const rate = scrolled * -0.5

  if (heroSection) {
    heroSection.style.transform = `translateY(${rate}px)`
  }
})

// Tech badge hover effects
document.addEventListener("DOMContentLoaded", () => {
  const techBadges = document.querySelectorAll(".tech-badge")

  techBadges.forEach((badge) => {
    badge.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-2px)"
      this.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.15)"
      this.style.transition = "all 0.2s ease"
    })

    badge.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0)"
      this.style.boxShadow = "none"
    })
  })
})
