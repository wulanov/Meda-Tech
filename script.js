// Meda Technology - Global JavaScript
// File: script.js - Digunakan di semua halaman

;(() => {
  // Declare lucide variable
  const lucide = window.lucide

  // Initialize when DOM is loaded
  document.addEventListener("DOMContentLoaded", () => {
    initializeLucideIcons()
    initializeScrollEffects()
    initializeGlobalAnimations()
    initializeAccessibility()
    initializePerformanceOptimizations()
  })

  // Initialize Lucide Icons
  function initializeLucideIcons() {
    if (typeof lucide !== "undefined") {
      lucide.createIcons()
    }
  }

  // Scroll Effects for Header
  function initializeScrollEffects() {
    const header = document.querySelector("header")
    if (!header) return

    let lastScrollY = window.scrollY

    function updateHeader() {
      const currentScrollY = window.scrollY

      if (currentScrollY > 100) {
        header.style.backdropFilter = "blur(10px)"
        header.style.backgroundColor = "rgba(255, 255, 255, 0.95)"
      } else {
        header.style.backdropFilter = "blur(5px)"
        header.style.backgroundColor = "rgba(255, 255, 255, 0.95)"
      }

      lastScrollY = currentScrollY
    }

    // Throttle scroll events
    let ticking = false
    window.addEventListener("scroll", () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          updateHeader()
          ticking = false
        })
        ticking = true
      }
    })

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault()
        const target = document.querySelector(this.getAttribute("href"))
        if (target) {
          target.scrollIntoView({
            behavior: "smooth",
            block: "start",
          })
        }
      })
    })
  }

  // Global Animations
  function initializeGlobalAnimations() {
    // Add animation styles
    const animationStyle = document.createElement("style")
    animationStyle.textContent = `
            .fade-in {
                opacity: 0;
                transform: translateY(30px);
                transition: opacity 0.6s ease-out, transform 0.6s ease-out;
            }
            .fade-in.visible {
                opacity: 1;
                transform: translateY(0);
            }
            .slide-in-left {
                opacity: 0;
                transform: translateX(-50px);
                transition: opacity 0.6s ease-out, transform 0.6s ease-out;
            }
            .slide-in-left.visible {
                opacity: 1;
                transform: translateX(0);
            }
            .slide-in-right {
                opacity: 0;
                transform: translateX(50px);
                transition: opacity 0.6s ease-out, transform 0.6s ease-out;
            }
            .slide-in-right.visible {
                opacity: 1;
                transform: translateX(0);
            }
        `
    document.head.appendChild(animationStyle)

    // Intersection Observer for animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible")
        }
      })
    }, observerOptions)

    // Apply animations to elements
    const animatedElements = document.querySelectorAll(".fade-in, .slide-in-left, .slide-in-right")
    animatedElements.forEach((el) => {
      observer.observe(el)
    })
  }

  // Accessibility Enhancements
  function initializeAccessibility() {
    // Enhanced keyboard navigation
    document.addEventListener("keydown", (e) => {
      if (e.key === "Tab") {
        document.body.classList.add("keyboard-navigation")
      }
    })

    document.addEventListener("mousedown", () => {
      document.body.classList.remove("keyboard-navigation")
    })

    // Add focus styles
    const focusStyle = document.createElement("style")
    focusStyle.textContent = `
            .keyboard-navigation *:focus {
                outline: 2px solid #3B82F6 !important;
                outline-offset: 2px !important;
            }
        `
    document.head.appendChild(focusStyle)
  }

  // Performance Optimizations
  function initializePerformanceOptimizations() {
    // Back to top button
    const backToTopButton = document.createElement("button")
    backToTopButton.innerHTML = "↑"
    backToTopButton.className =
      "fixed bottom-6 right-6 w-12 h-12 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300 opacity-0 invisible z-40"
    backToTopButton.setAttribute("aria-label", "Kembali ke atas")
    document.body.appendChild(backToTopButton)

    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        backToTopButton.classList.remove("opacity-0", "invisible")
      } else {
        backToTopButton.classList.add("opacity-0", "invisible")
      }
    })

    backToTopButton.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      })
    })
  }

  // Global utility functions
  window.MedaTech = {
    showNotification: (message, type = "info") => {
      const notification = document.createElement("div")
      notification.className = `fixed top-4 right-4 z-50 p-4 rounded-lg shadow-lg max-w-sm transform transition-all duration-300 translate-x-full ${
        type === "success"
          ? "bg-green-500 text-white"
          : type === "error"
            ? "bg-red-500 text-white"
            : "bg-blue-500 text-white"
      }`
      notification.innerHTML = `
                <div class="flex items-center justify-between">
                    <span class="text-sm">${message}</span>
                    <button class="ml-4 text-white hover:text-gray-200" onclick="this.parentElement.parentElement.remove()">×</button>
                </div>
            `

      document.body.appendChild(notification)
      setTimeout(() => notification.classList.remove("translate-x-full"), 100)
      setTimeout(() => {
        notification.classList.add("translate-x-full")
        setTimeout(() => notification.remove(), 300)
      }, 5000)
    },
  }
})()
