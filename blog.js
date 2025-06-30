// Blog - Specific JavaScript
// File: blog.js

document.addEventListener("DOMContentLoaded", () => {
  initializeBlogSearch()
  initializeCategoryFilter()
  initializeSortFunctionality()
  initializeLoadMore()
  initializeNewsletterForm()
})

// Blog Search Functionality
function initializeBlogSearch() {
  const searchInput = document.getElementById("search-input")
  const articles = document.querySelectorAll(".blog-article")

  let searchTimeout
  searchInput.addEventListener("input", (e) => {
    clearTimeout(searchTimeout)
    searchTimeout = setTimeout(() => {
      const searchTerm = e.target.value.toLowerCase().trim()
      filterArticles(searchTerm)
    }, 300)
  })

  function filterArticles(searchTerm) {
    articles.forEach((article) => {
      const title = article.querySelector("h3").textContent.toLowerCase()
      const content = article.querySelector("p").textContent.toLowerCase()
      const category = article.getAttribute("data-category")

      const matchesSearch =
        searchTerm === "" || title.includes(searchTerm) || content.includes(searchTerm) || category.includes(searchTerm)

      if (matchesSearch) {
        article.style.display = "block"
        article.classList.add("fade-in")
      } else {
        article.style.display = "none"
      }
    })

    updateResultsCount()
  }

  function updateResultsCount() {
    const visibleArticles = document.querySelectorAll(
      '.blog-article[style="display: block"], .blog-article:not([style*="display: none"])',
    )
    const resultsText = document.getElementById("results-count")

    if (resultsText) {
      resultsText.textContent = `Menampilkan ${visibleArticles.length} artikel`
    }
  }
}

// Category Filter Functionality
function initializeCategoryFilter() {
  const filterButtons = document.querySelectorAll(".category-filter")
  const articles = document.querySelectorAll(".blog-article")

  filterButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const category = this.getAttribute("data-category")

      // Update active button
      filterButtons.forEach((btn) => {
        btn.classList.remove("active", "bg-blue-600", "text-white")
        btn.classList.add("bg-white", "text-gray-600")
      })

      this.classList.add("active", "bg-blue-600", "text-white")
      this.classList.remove("bg-white", "text-gray-600")

      // Filter articles
      articles.forEach((article, index) => {
        const articleCategory = article.getAttribute("data-category")

        if (category === "all" || articleCategory === category) {
          setTimeout(() => {
            article.style.display = "block"
            article.classList.add("fade-in")
          }, index * 50)
        } else {
          article.style.display = "none"
        }
      })

      // Clear search when filtering by category
      const searchInput = document.getElementById("search-input")
      if (searchInput) {
        searchInput.value = ""
      }
    })
  })
}

// Sort Functionality
function initializeSortFunctionality() {
  const sortSelect = document.getElementById("sort-select")
  const articlesGrid = document.getElementById("articles-grid")

  sortSelect.addEventListener("change", function () {
    const sortBy = this.value
    const articles = Array.from(document.querySelectorAll(".blog-article"))

    articles.sort((a, b) => {
      switch (sortBy) {
        case "newest":
          return new Date(b.getAttribute("data-date")) - new Date(a.getAttribute("data-date"))
        case "oldest":
          return new Date(a.getAttribute("data-date")) - new Date(b.getAttribute("data-date"))
        case "popular":
          return Number.parseInt(b.getAttribute("data-views")) - Number.parseInt(a.getAttribute("data-views"))
        default:
          return 0
      }
    })

    // Re-append sorted articles
    articles.forEach((article, index) => {
      setTimeout(() => {
        articlesGrid.appendChild(article)
        article.classList.add("fade-in")
      }, index * 50)
    })
  })
}

// Load More Functionality
function initializeLoadMore() {
  const loadMoreBtn = document.getElementById("load-more-btn")
  let currentPage = 1
  const articlesPerPage = 6

  // Sample additional articles data
  const additionalArticles = [
    {
      category: "web-development",
      categoryLabel: "Web Development",
      categoryColor: "bg-blue-600",
      date: "2024-11-25",
      views: "1320",
      title: "Microservices Architecture: Panduan untuk Pemula",
      excerpt:
        "Memahami konsep microservices dan cara mengimplementasikannya dalam aplikasi web modern untuk skalabilitas yang lebih baik.",
      author: "Ahmad Rizki",
      image: "/placeholder.svg?height=200&width=400",
    },
    {
      category: "mobile-development",
      categoryLabel: "Mobile Development",
      categoryColor: "bg-green-600",
      date: "2024-11-22",
      views: "945",
      title: "Push Notifications di React Native: Tutorial Lengkap",
      excerpt:
        "Implementasi push notifications yang efektif di aplikasi React Native menggunakan Firebase Cloud Messaging.",
      author: "Sarah Putri",
      image: "/placeholder.svg?height=200&width=400",
    },
    {
      category: "ui-ux",
      categoryLabel: "UI/UX Design",
      categoryColor: "bg-purple-600",
      date: "2024-11-20",
      views: "1580",
      title: "Design System: Membangun Konsistensi dalam Produk Digital",
      excerpt:
        "Cara membangun dan mengelola design system yang efektif untuk menjaga konsistensi UI/UX di seluruh produk digital.",
      author: "Lisa Wijaya",
      image: "/placeholder.svg?height=200&width=400",
    },
  ]

  loadMoreBtn.addEventListener("click", function () {
    const articlesGrid = document.getElementById("articles-grid")
    const startIndex = currentPage * articlesPerPage
    const endIndex = startIndex + 3

    // Show loading state
    this.textContent = "Memuat..."
    this.disabled = true

    // Simulate loading delay
    setTimeout(() => {
      additionalArticles.slice(0, 3).forEach((articleData, index) => {
        const article = createArticleElement(articleData)
        articlesGrid.appendChild(article)

        // Animate in
        setTimeout(() => {
          article.classList.add("fade-in")
        }, index * 100)
      })

      currentPage++

      // Reset button state
      this.textContent = "Muat Lebih Banyak"
      this.disabled = false

      // Hide button if no more articles
      if (currentPage >= 3) {
        this.style.display = "none"
      }
    }, 1000)
  })

  function createArticleElement(data) {
    const article = document.createElement("article")
    article.className = "blog-article bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all"
    article.setAttribute("data-category", data.category)
    article.setAttribute("data-date", data.date)
    article.setAttribute("data-views", data.views)

    article.innerHTML = `
            <div class="relative">
                <img src="${data.image}" alt="${data.title}" class="w-full h-48 object-cover">
                <div class="absolute top-4 left-4">
                    <span class="px-3 py-1 ${data.categoryColor} text-white rounded-full text-xs font-medium">${data.categoryLabel}</span>
                </div>
            </div>
            <div class="p-6">
                <div class="flex items-center gap-2 mb-3 text-sm text-gray-500">
                    <i class="h-4 w-4"></i>
                    <span>${formatDate(data.date)}</span>
                    <i class="h-4 w-4 ml-2"></i>
                    <span>${data.views} views</span>
                </div>
                <h3 class="text-xl font-bold text-gray-900 mb-3 hover:text-blue-600 transition-colors">
                    <a href="#">${data.title}</a>
                </h3>
                <p class="text-gray-600 text-sm mb-4 leading-relaxed">
                    ${data.excerpt}
                </p>
                <div class="flex items-center justify-between">
                    <div class="flex items-center gap-2">
                        <img src="/placeholder.svg?height=32&width=32" alt="Author" class="w-8 h-8 rounded-full">
                        <span class="text-sm text-gray-600">${data.author}</span>
                    </div>
                    <a href="#" class="text-blue-600 hover:text-blue-700 text-sm font-medium">Baca →</a>
                </div>
            </div>
        `

    // Initialize Lucide icons for the new article
    if (window.lucide) {
      window.lucide.createIcons(article)
    }

    return article
  }

  function formatDate(dateString) {
    const date = new Date(dateString)
    const options = { year: "numeric", month: "long", day: "numeric" }
    return date.toLocaleDateString("id-ID", options)
  }
}

// Newsletter Form
function initializeNewsletterForm() {
  const newsletterForm = document.getElementById("newsletter-form")

  newsletterForm.addEventListener("submit", function (e) {
    e.preventDefault()

    const emailInput = this.querySelector('input[type="email"]')
    const submitButton = this.querySelector('button[type="submit"]')
    const originalText = submitButton.textContent

    // Show loading state
    submitButton.textContent = "Subscribing..."
    submitButton.disabled = true

    // Simulate API call
    setTimeout(() => {
      // Show success message
      if (window.MedaTech && window.MedaTech.showNotification) {
        window.MedaTech.showNotification("Terima kasih! Anda telah berhasil subscribe newsletter kami.", "success")
      }

      // Reset form
      emailInput.value = ""
      submitButton.textContent = originalText
      submitButton.disabled = false
    }, 1500)
  })
}

// Reading Progress Bar (optional enhancement)
function initializeReadingProgress() {
  const progressBar = document.createElement("div")
  progressBar.className = "fixed top-0 left-0 h-1 bg-blue-600 z-50 transition-all duration-300"
  progressBar.style.width = "0%"
  document.body.appendChild(progressBar)

  window.addEventListener("scroll", () => {
    const windowHeight = window.innerHeight
    const documentHeight = document.documentElement.scrollHeight - windowHeight
    const scrollTop = window.pageYOffset

    const progress = (scrollTop / documentHeight) * 100
    progressBar.style.width = Math.min(progress, 100) + "%"
  })
}

// Initialize reading progress if on article page
if (window.location.pathname.includes("artikel") || window.location.pathname.includes("article")) {
  initializeReadingProgress()
}

// Article sharing functionality
function initializeArticleSharing() {
  const shareButtons = document.querySelectorAll(".share-button")

  shareButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const platform = this.getAttribute("data-platform")
      const url = encodeURIComponent(window.location.href)
      const title = encodeURIComponent(document.title)

      let shareUrl = ""

      switch (platform) {
        case "facebook":
          shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`
          break
        case "twitter":
          shareUrl = `https://twitter.com/intent/tweet?url=${url}&text=${title}`
          break
        case "linkedin":
          shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${url}`
          break
        case "whatsapp":
          shareUrl = `https://wa.me/?text=${title} ${url}`
          break
      }

      if (shareUrl) {
        window.open(shareUrl, "_blank", "width=600,height=400")
      }
    })
  })
}

// Initialize sharing if share buttons exist
if (document.querySelectorAll(".share-button").length > 0) {
  initializeArticleSharing()
}
