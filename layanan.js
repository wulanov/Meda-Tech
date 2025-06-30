// Layanan - Specific JavaScript
// File: layanan.js

document.addEventListener("DOMContentLoaded", () => {
  initializeServiceFilter()
  initializeServiceModals()
})

// Service Filter Functionality
function initializeServiceFilter() {
  const filterButtons = document.querySelectorAll(".service-filter")
  const serviceCards = document.querySelectorAll(".service-card")

  filterButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const filter = this.getAttribute("data-filter")

      // Update active button
      filterButtons.forEach((btn) => {
        btn.classList.remove("active", "bg-blue-600", "text-white")
        btn.classList.add("bg-white", "text-gray-600")
      })

      this.classList.add("active", "bg-blue-600", "text-white")
      this.classList.remove("bg-white", "text-gray-600")

      // Filter cards
      serviceCards.forEach((card) => {
        const category = card.getAttribute("data-category")

        if (filter === "all" || category === filter) {
          card.style.display = "block"
          card.classList.add("fade-in")
        } else {
          card.style.display = "none"
        }
      })
    })
  })
}

// Service Detail Modals
function initializeServiceModals() {
  const modal = document.getElementById("service-modal")
  const modalTitle = document.getElementById("modal-title")
  const modalContent = document.getElementById("modal-content")
  const closeButtons = document.querySelectorAll("#close-modal, #close-modal-btn")
  const detailButtons = document.querySelectorAll(".service-detail-btn")

  // Service details data
  const serviceDetails = {
    "web-development": {
      title: "Web Development",
      content: `
                <h4 class="text-lg font-semibold mb-3">Layanan Web Development Lengkap</h4>
                <p class="mb-4">Kami menyediakan layanan pengembangan website profesional dengan teknologi terdepan dan desain yang responsif untuk semua perangkat.</p>
                
                <h5 class="font-semibold mb-2">Yang Anda Dapatkan:</h5>
                <ul class="list-disc list-inside space-y-1 mb-4">
                    <li>Desain website modern dan responsif</li>
                    <li>Optimasi SEO untuk mesin pencari</li>
                    <li>Panel admin untuk mengelola konten</li>
                    <li>Integrasi dengan media sosial</li>
                    <li>SSL certificate dan keamanan tinggi</li>
                    <li>Hosting gratis selama 1 tahun</li>
                    <li>Maintenance dan support 24/7</li>
                </ul>
                
                <h5 class="font-semibold mb-2">Teknologi yang Digunakan:</h5>
                <p class="mb-4">React.js, Next.js, Node.js, PHP, Laravel, WordPress, MySQL, PostgreSQL</p>
                
                <h5 class="font-semibold mb-2">Timeline:</h5>
                <p>2-6 minggu tergantung kompleksitas proyek</p>
            `,
    },
    "mobile-development": {
      title: "Mobile Development",
      content: `
                <h4 class="text-lg font-semibold mb-3">Pengembangan Aplikasi Mobile</h4>
                <p class="mb-4">Aplikasi mobile native dan cross-platform dengan performa tinggi dan user experience yang optimal.</p>
                
                <h5 class="font-semibold mb-2">Yang Anda Dapatkan:</h5>
                <ul class="list-disc list-inside space-y-1 mb-4">
                    <li>Aplikasi untuk Android dan iOS</li>
                    <li>UI/UX design yang menarik</li>
                    <li>Integrasi dengan API dan database</li>
                    <li>Push notification system</li>
                    <li>App store optimization</li>
                    <li>Beta testing dan quality assurance</li>
                    <li>Bantuan publish ke Play Store & App Store</li>
                </ul>
                
                <h5 class="font-semibold mb-2">Platform:</h5>
                <p class="mb-4">Native (Java/Kotlin, Swift), Cross-platform (Flutter, React Native)</p>
                
                <h5 class="font-semibold mb-2">Timeline:</h5>
                <p>6-12 minggu tergantung fitur dan kompleksitas</p>
            `,
    },
    "ui-ux-design": {
      title: "UI/UX Design",
      content: `
                <h4 class="text-lg font-semibold mb-3">Desain UI/UX Profesional</h4>
                <p class="mb-4">Menciptakan pengalaman pengguna yang luar biasa melalui desain yang intuitif dan menarik.</p>
                
                <h5 class="font-semibold mb-2">Proses Desain:</h5>
                <ul class="list-disc list-inside space-y-1 mb-4">
                    <li>User research dan analisis kompetitor</li>
                    <li>Information architecture</li>
                    <li>Wireframing dan user flow</li>
                    <li>Visual design dan prototyping</li>
                    <li>Usability testing</li>
                    <li>Design system dan style guide</li>
                </ul>
                
                <h5 class="font-semibold mb-2">Deliverables:</h5>
                <ul class="list-disc list-inside space-y-1 mb-4">
                    <li>High-fidelity mockups</li>
                    <li>Interactive prototypes</li>
                    <li>Design specifications</li>
                    <li>Asset library</li>
                </ul>
                
                <h5 class="font-semibold mb-2">Timeline:</h5>
                <p>2-4 minggu untuk desain lengkap</p>
            `,
    },
    "custom-software": {
      title: "Custom Software",
      content: `
                <h4 class="text-lg font-semibold mb-3">Pengembangan Software Khusus</h4>
                <p class="mb-4">Solusi software yang disesuaikan dengan kebutuhan spesifik bisnis Anda.</p>
                
                <h5 class="font-semibold mb-2">Jenis Software:</h5>
                <ul class="list-disc list-inside space-y-1 mb-4">
                    <li>Enterprise Resource Planning (ERP)</li>
                    <li>Customer Relationship Management (CRM)</li>
                    <li>Inventory Management System</li>
                    <li>Human Resource Information System</li>
                    <li>Financial Management System</li>
                    <li>Business Intelligence Dashboard</li>
                </ul>
                
                <h5 class="font-semibold mb-2">Fitur Utama:</h5>
                <ul class="list-disc list-inside space-y-1 mb-4">
                    <li>Multi-user access dengan role management</li>
                    <li>Real-time reporting dan analytics</li>
                    <li>Data backup dan recovery</li>
                    <li>API integration</li>
                    <li>Mobile responsive interface</li>
                </ul>
                
                <h5 class="font-semibold mb-2">Timeline:</h5>
                <p>8-16 minggu tergantung scope dan kompleksitas</p>
            `,
    },
    "api-development": {
      title: "API Development",
      content: `
                <h4 class="text-lg font-semibold mb-3">Pengembangan API</h4>
                <p class="mb-4">Membangun API yang robust dan scalable untuk integrasi sistem dan komunikasi antar aplikasi.</p>
                
                <h5 class="font-semibold mb-2">Jenis API:</h5>
                <ul class="list-disc list-inside space-y-1 mb-4">
                    <li>RESTful API dengan JSON response</li>
                    <li>GraphQL API untuk query yang fleksibel</li>
                    <li>WebSocket untuk real-time communication</li>
                    <li>Webhook untuk event-driven integration</li>
                </ul>
                
                <h5 class="font-semibold mb-2">Fitur:</h5>
                <ul class="list-disc list-inside space-y-1 mb-4">
                    <li>Authentication dan authorization</li>
                    <li>Rate limiting dan throttling</li>
                    <li>Comprehensive documentation</li>
                    <li>Error handling dan logging</li>
                    <li>API versioning</li>
                    <li>Testing dan monitoring</li>
                </ul>
                
                <h5 class="font-semibold mb-2">Timeline:</h5>
                <p>3-8 minggu tergantung kompleksitas endpoint</p>
            `,
    },
    "it-consulting": {
      title: "IT Consulting",
      content: `
                <h4 class="text-lg font-semibold mb-3">Konsultasi IT Strategis</h4>
                <p class="mb-4">Panduan ahli untuk transformasi digital dan optimasi teknologi dalam bisnis Anda.</p>
                
                <h5 class="font-semibold mb-2">Layanan Konsultasi:</h5>
                <ul class="list-disc list-inside space-y-1 mb-4">
                    <li>Digital transformation strategy</li>
                    <li>Technology audit dan assessment</li>
                    <li>System architecture planning</li>
                    <li>IT infrastructure optimization</li>
                    <li>Security assessment</li>
                    <li>Project management consulting</li>
                </ul>
                
                <h5 class="font-semibold mb-2">Deliverables:</h5>
                <ul class="list-disc list-inside space-y-1 mb-4">
                    <li>Comprehensive analysis report</li>
                    <li>Strategic roadmap</li>
                    <li>Technology recommendations</li>
                    <li>Implementation timeline</li>
                    <li>Budget planning</li>
                </ul>
                
                <h5 class="font-semibold mb-2">Timeline:</h5>
                <p>1-4 minggu tergantung scope analisis</p>
            `,
    },
  }

  // Open modal
  detailButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const service = this.getAttribute("data-service")
      const serviceData = serviceDetails[service]

      if (serviceData) {
        modalTitle.textContent = serviceData.title
        modalContent.innerHTML = serviceData.content
        modal.classList.remove("hidden")
        document.body.style.overflow = "hidden"
      }
    })
  })

  // Close modal
  closeButtons.forEach((button) => {
    button.addEventListener("click", () => {
      modal.classList.add("hidden")
      document.body.style.overflow = ""
    })
  })

  // Close modal when clicking outside
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.classList.add("hidden")
      document.body.style.overflow = ""
    }
  })

  // Close modal with Escape key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !modal.classList.contains("hidden")) {
      modal.classList.add("hidden")
      document.body.style.overflow = ""
    }
  })
}
