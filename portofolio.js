// Portofolio - Specific JavaScript
// File: portofolio.js

document.addEventListener("DOMContentLoaded", () => {
  initializePortfolioFilter()
  initializePortfolioModals()
  initializeCounterAnimation()
})

// Portfolio Filter Functionality
function initializePortfolioFilter() {
  const filterButtons = document.querySelectorAll(".portfolio-filter")
  const portfolioItems = document.querySelectorAll(".portfolio-item")

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

      // Filter items with animation
      portfolioItems.forEach((item, index) => {
        const category = item.getAttribute("data-category")

        if (filter === "all" || category === filter) {
          setTimeout(() => {
            item.style.display = "block"
            item.classList.add("fade-in")
          }, index * 100)
        } else {
          item.style.display = "none"
        }
      })
    })
  })
}

// Portfolio Detail Modals
function initializePortfolioModals() {
  const modal = document.getElementById("portfolio-modal")
  const modalTitle = document.getElementById("portfolio-modal-title")
  const modalContent = document.getElementById("portfolio-modal-content")
  const closeButtons = document.querySelectorAll("#close-portfolio-modal, #close-portfolio-modal-btn")
  const detailButtons = document.querySelectorAll(".portfolio-detail-btn")

  // Portfolio details data
  const portfolioDetails = {
    "ecommerce-fashion": {
      title: "E-commerce Fashion Platform",
      content: `
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                    <div>
                        <img src="/placeholder.svg?height=300&width=500" alt="E-commerce Fashion" class="w-full rounded-lg">
                    </div>
                    <div>
                        <h4 class="text-lg font-semibold mb-3">Tentang Proyek</h4>
                        <p class="mb-4">Platform e-commerce fashion yang menghubungkan brand lokal dengan konsumen di seluruh Indonesia. Dilengkapi dengan sistem inventory real-time, multiple payment gateway, dan fitur wishlist.</p>
                        
                        <h5 class="font-semibold mb-2">Fitur Utama:</h5>
                        <ul class="list-disc list-inside space-y-1 mb-4 text-sm">
                            <li>Katalog produk dengan filter advanced</li>
                            <li>Shopping cart dan checkout process</li>
                            <li>Multiple payment methods (Bank Transfer, E-wallet, Credit Card)</li>
                            <li>Order tracking dan notification system</li>
                            <li>Review dan rating system</li>
                            <li>Admin dashboard untuk seller</li>
                        </ul>
                        
                        <h5 class="font-semibold mb-2">Teknologi:</h5>
                        <div class="flex flex-wrap gap-2 mb-4">
                            <span class="px-2 py-1 bg-blue-100 text-blue-600 text-xs rounded">React.js</span>
                            <span class="px-2 py-1 bg-blue-100 text-blue-600 text-xs rounded">Node.js</span>
                            <span class="px-2 py-1 bg-blue-100 text-blue-600 text-xs rounded">MongoDB</span>
                            <span class="px-2 py-1 bg-blue-100 text-blue-600 text-xs rounded">Redis</span>
                            <span class="px-2 py-1 bg-blue-100 text-blue-600 text-xs rounded">AWS</span>
                        </div>
                        
                        <h5 class="font-semibold mb-2">Hasil:</h5>
                        <ul class="list-disc list-inside space-y-1 text-sm">
                            <li>10,000+ registered users dalam 6 bulan</li>
                            <li>500+ transaksi per hari</li>
                            <li>95% customer satisfaction rate</li>
                        </ul>
                    </div>
                </div>
            `,
    },
    "food-delivery": {
      title: "Food Delivery Mobile App",
      content: `
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                    <div>
                        <img src="/placeholder.svg?height=300&width=500" alt="Food Delivery App" class="w-full rounded-lg">
                    </div>
                    <div>
                        <h4 class="text-lg font-semibold mb-3">Tentang Proyek</h4>
                        <p class="mb-4">Aplikasi food delivery yang menghubungkan restoran dengan pelanggan. Dilengkapi dengan real-time tracking, multiple payment options, dan sistem rating untuk driver dan restoran.</p>
                        
                        <h5 class="font-semibold mb-2">Fitur Utama:</h5>
                        <ul class="list-disc list-inside space-y-1 mb-4 text-sm">
                            <li>Browse restoran berdasarkan lokasi</li>
                            <li>Real-time order tracking dengan GPS</li>
                            <li>In-app chat dengan driver</li>
                            <li>Multiple payment methods</li>
                            <li>Promo dan discount system</li>
                            <li>Driver app untuk delivery partner</li>
                            <li>Restaurant dashboard</li>
                        </ul>
                        
                        <h5 class="font-semibold mb-2">Teknologi:</h5>
                        <div class="flex flex-wrap gap-2 mb-4">
                            <span class="px-2 py-1 bg-green-100 text-green-600 text-xs rounded">Flutter</span>
                            <span class="px-2 py-1 bg-green-100 text-green-600 text-xs rounded">Firebase</span>
                            <span class="px-2 py-1 bg-green-100 text-green-600 text-xs rounded">Google Maps API</span>
                            <span class="px-2 py-1 bg-green-100 text-green-600 text-xs rounded">Push Notifications</span>
                        </div>
                        
                        <h5 class="font-semibold mb-2">Hasil:</h5>
                        <ul class="list-disc list-inside space-y-1 text-sm">
                            <li>50,000+ downloads dalam 3 bulan</li>
                            <li>200+ restaurant partners</li>
                            <li>Average delivery time: 25 minutes</li>
                        </ul>
                    </div>
                </div>
            `,
    },
    "hospital-system": {
      title: "Hospital Management System",
      content: `
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                    <div>
                        <img src="/placeholder.svg?height=300&width=500" alt="Hospital Management System" class="w-full rounded-lg">
                    </div>
                    <div>
                        <h4 class="text-lg font-semibold mb-3">Tentang Proyek</h4>
                        <p class="mb-4">Sistem manajemen rumah sakit terintegrasi yang mengelola seluruh operasional dari registrasi pasien hingga billing dan inventory management.</p>
                        
                        <h5 class="font-semibold mb-2">Modul Sistem:</h5>
                        <ul class="list-disc list-inside space-y-1 mb-4 text-sm">
                            <li>Patient Registration & Medical Records</li>
                            <li>Doctor Schedule & Appointment</li>
                            <li>Pharmacy & Inventory Management</li>
                            <li>Billing & Insurance Claims</li>
                            <li>Laboratory & Radiology</li>
                            <li>HR & Payroll Management</li>
                            <li>Financial Reporting</li>
                        </ul>
                        
                        <h5 class="font-semibold mb-2">Teknologi:</h5>
                        <div class="flex flex-wrap gap-2 mb-4">
                            <span class="px-2 py-1 bg-purple-100 text-purple-600 text-xs rounded">Laravel</span>
                            <span class="px-2 py-1 bg-purple-100 text-purple-600 text-xs rounded">MySQL</span>
                            <span class="px-2 py-1 bg-purple-100 text-purple-600 text-xs rounded">Vue.js</span>
                            <span class="px-2 py-1 bg-purple-100 text-purple-600 text-xs rounded">Redis</span>
                        </div>
                        
                        <h5 class="font-semibold mb-2">Hasil:</h5>
                        <ul class="list-disc list-inside space-y-1 text-sm">
                            <li>Efisiensi operasional meningkat 40%</li>
                            <li>Waktu registrasi pasien berkurang 60%</li>
                            <li>Akurasi inventory 99.5%</li>
                        </ul>
                    </div>
                </div>
            `,
    },
    "corporate-website": {
      title: "Corporate Website",
      content: `
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                    <div>
                        <img src="/placeholder.svg?height=300&width=500" alt="Corporate Website" class="w-full rounded-lg">
                    </div>
                    <div>
                        <h4 class="text-lg font-semibold mb-3">Tentang Proyek</h4>
                        <p class="mb-4">Website corporate untuk perusahaan multinasional dengan multi-language support, CMS terintegrasi, dan optimasi SEO untuk meningkatkan brand awareness global.</p>
                        
                        <h5 class="font-semibold mb-2">Fitur Utama:</h5>
                        <ul class="list-disc list-inside space-y-1 mb-4 text-sm">
                            <li>Multi-language support (EN, ID, CN)</li>
                            <li>Content Management System</li>
                            <li>News & Press Release section</li>
                            <li>Career portal dengan job application</li>
                            <li>Investor relations section</li>
                            <li>Contact form dengan CRM integration</li>
                            <li>SEO optimized</li>
                        </ul>
                        
                        <h5 class="font-semibold mb-2">Teknologi:</h5>
                        <div class="flex flex-wrap gap-2 mb-4">
                            <span class="px-2 py-1 bg-blue-100 text-blue-600 text-xs rounded">Next.js</span>
                            <span class="px-2 py-1 bg-blue-100 text-blue-600 text-xs rounded">Strapi CMS</span>
                            <span class="px-2 py-1 bg-blue-100 text-blue-600 text-xs rounded">PostgreSQL</span>
                            <span class="px-2 py-1 bg-blue-100 text-blue-600 text-xs rounded">Vercel</span>
                        </div>
                        
                        <h5 class="font-semibold mb-2">Hasil:</h5>
                        <ul class="list-disc list-inside space-y-1 text-sm">
                            <li>Page load speed: 1.2 seconds</li>
                            <li>SEO score: 95/100</li>
                            <li>Mobile responsiveness: 100%</li>
                        </ul>
                    </div>
                </div>
            `,
    },
    "banking-app": {
      title: "Mobile Banking Application",
      content: `
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                    <div>
                        <img src="/placeholder.svg?height=300&width=500" alt="Banking App" class="w-full rounded-lg">
                    </div>
                    <div>
                        <h4 class="text-lg font-semibold mb-3">Tentang Proyek</h4>
                        <p class="mb-4">Aplikasi mobile banking dengan tingkat keamanan tinggi, mendukung berbagai transaksi finansial dengan user experience yang intuitif dan aman.</p>
                        
                        <h5 class="font-semibold mb-2">Fitur Keamanan:</h5>
                        <ul class="list-disc list-inside space-y-1 mb-4 text-sm">
                            <li>Biometric authentication (Fingerprint, Face ID)</li>
                            <li>End-to-end encryption</li>
                            <li>Two-factor authentication</li>
                            <li>Session timeout & device binding</li>
                            <li>Real-time fraud detection</li>
                        </ul>
                        
                        <h5 class="font-semibold mb-2">Fitur Transaksi:</h5>
                        <ul class="list-disc list-inside space-y-1 mb-4 text-sm">
                            <li>Transfer antar bank real-time</li>
                            <li>Bill payment & top-up</li>
                            <li>QR code payment</li>
                            <li>Investment & savings products</li>
                            <li>Transaction history & statements</li>
                        </ul>
                        
                        <h5 class="font-semibold mb-2">Teknologi:</h5>
                        <div class="flex flex-wrap gap-2 mb-4">
                            <span class="px-2 py-1 bg-green-100 text-green-600 text-xs rounded">React Native</span>
                            <span class="px-2 py-1 bg-green-100 text-green-600 text-xs rounded">Node.js</span>
                            <span class="px-2 py-1 bg-green-100 text-green-600 text-xs rounded">AES Encryption</span>
                            <span class="px-2 py-1 bg-green-100 text-green-600 text-xs rounded">JWT</span>
                        </div>
                    </div>
                </div>
            `,
    },
    "erp-system": {
      title: "ERP Manufacturing System",
      content: `
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                    <div>
                        <img src="/placeholder.svg?height=300&width=500" alt="ERP System" class="w-full rounded-lg">
                    </div>
                    <div>
                        <h4 class="text-lg font-semibold mb-3">Tentang Proyek</h4>
                        <p class="mb-4">Sistem ERP komprehensif untuk industri manufaktur yang mengintegrasikan seluruh proses bisnis dari procurement hingga delivery.</p>
                        
                        <h5 class="font-semibold mb-2">Modul Utama:</h5>
                        <ul class="list-disc list-inside space-y-1 mb-4 text-sm">
                            <li>Production Planning & Control</li>
                            <li>Inventory & Warehouse Management</li>
                            <li>Quality Control & Assurance</li>
                            <li>Financial Management & Accounting</li>
                            <li>Human Resource Management</li>
                            <li>Customer Relationship Management</li>
                            <li>Supply Chain Management</li>
                        </ul>
                        
                        <h5 class="font-semibold mb-2">Teknologi:</h5>
                        <div class="flex flex-wrap gap-2 mb-4">
                            <span class="px-2 py-1 bg-purple-100 text-purple-600 text-xs rounded">Java Spring Boot</span>
                            <span class="px-2 py-1 bg-purple-100 text-purple-600 text-xs rounded">Oracle Database</span>
                            <span class="px-2 py-1 bg-purple-100 text-purple-600 text-xs rounded">Angular</span>
                            <span class="px-2 py-1 bg-purple-100 text-purple-600 text-xs rounded">Apache Kafka</span>
                        </div>
                        
                        <h5 class="font-semibold mb-2">Hasil:</h5>
                        <ul class="list-disc list-inside space-y-1 text-sm">
                            <li>Produktivitas meningkat 35%</li>
                            <li>Waste reduction 25%</li>
                            <li>Real-time visibility 100%</li>
                        </ul>
                    </div>
                </div>
            `,
    },
  }

  // Open modal
  detailButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const project = this.getAttribute("data-project")
      const projectData = portfolioDetails[project]

      if (projectData) {
        modalTitle.textContent = projectData.title
        modalContent.innerHTML = projectData.content
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
}

// Counter Animation (reuse from tentang-kami.js)
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
            counter.textContent = target + (target === 99 ? "%" : "+")
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
