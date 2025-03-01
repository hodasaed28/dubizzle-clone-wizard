
// Initialize Feather icons
document.addEventListener('DOMContentLoaded', function() {
  feather.replace();
  updateCurrentYear();
  setupLocationDropdown();
  setupMobileMenu();
  loadListings();
});

// Update current year in footer
function updateCurrentYear() {
  const yearElement = document.getElementById('currentYear');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
}

// Location dropdown functionality
function setupLocationDropdown() {
  const locationButton = document.getElementById('locationButton');
  const locationDropdown = document.getElementById('locationDropdown');
  const locationItems = document.querySelectorAll('.dropdown-item');
  const selectedLocation = document.getElementById('selectedLocation');
  const mobileSelectedLocation = document.getElementById('mobileSelectedLocation');

  if (locationButton && locationDropdown) {
    locationButton.addEventListener('click', function() {
      locationDropdown.classList.toggle('show');
    });

    // Close the dropdown when clicking outside
    document.addEventListener('click', function(event) {
      if (!locationButton.contains(event.target) && !locationDropdown.contains(event.target)) {
        locationDropdown.classList.remove('show');
      }
    });

    // Location selection
    locationItems.forEach(item => {
      item.addEventListener('click', function(e) {
        e.preventDefault();
        const location = this.dataset.location;
        if (selectedLocation) selectedLocation.textContent = location;
        if (mobileSelectedLocation) mobileSelectedLocation.textContent = location;
        locationDropdown.classList.remove('show');
      });
    });
  }
}

// Mobile menu functionality
function setupMobileMenu() {
  const menuToggle = document.getElementById('menuToggle');
  const mobileMenu = document.getElementById('mobileMenu');
  const closeIcon = `<i data-feather="x"></i>`;
  const menuIcon = `<i data-feather="menu"></i>`;

  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener('click', function() {
      const isOpen = mobileMenu.classList.toggle('show');
      menuToggle.innerHTML = isOpen ? closeIcon : menuIcon;
      feather.replace();
    });
  }
}

// Load listings data
function loadListings() {
  // Property listings data
  const propertyData = [
    {
      id: 1,
      title: "Luxury 3 Bedroom Apartment with Sea View",
      price: "EGP 2,500,000",
      location: "Maadi, Cairo",
      image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      date: "2 days ago"
    },
    {
      id: 2,
      title: "Modern Villa with Private Pool",
      price: "EGP 5,800,000",
      location: "New Cairo, Cairo",
      image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      date: "5 days ago"
    },
    {
      id: 3,
      title: "Cozy Studio Apartment for Rent",
      price: "EGP 7,000/month",
      location: "Dokki, Giza",
      image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      date: "Today"
    },
    {
      id: 4,
      title: "Spacious 4 Bedroom Apartment with Nile View",
      price: "EGP 3,200,000",
      location: "Zamalek, Cairo",
      image: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      date: "1 week ago"
    }
  ];

  // Vehicle listings data
  const vehicleData = [
    {
      id: 1,
      title: "2020 Mercedes-Benz E-Class",
      price: "EGP 1,200,000",
      location: "Nasr City, Cairo",
      image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      date: "3 days ago"
    },
    {
      id: 2,
      title: "2018 BMW X5 - Excellent Condition",
      price: "EGP 950,000",
      location: "Heliopolis, Cairo",
      image: "https://images.unsplash.com/photo-1556800572-1b8aeef2c54f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      date: "Yesterday"
    },
    {
      id: 3,
      title: "2019 Toyota Land Cruiser",
      price: "EGP 1,500,000",
      location: "6th of October, Giza",
      image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      date: "4 days ago"
    },
    {
      id: 4,
      title: "2017 Hyundai Tucson - Low Mileage",
      price: "EGP 320,000",
      location: "Maadi, Cairo",
      image: "https://images.unsplash.com/photo-1551830820-330a71b99659?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      date: "1 week ago"
    }
  ];

  // Electronics listings data
  const electronicsData = [
    {
      id: 1,
      title: "Apple iPhone 13 Pro - 256GB",
      price: "EGP 22,000",
      location: "Nasr City, Cairo",
      image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      date: "Just now"
    },
    {
      id: 2,
      title: "Samsung 55\" 4K Smart TV",
      price: "EGP 12,500",
      location: "Dokki, Giza",
      image: "https://images.unsplash.com/photo-1593784991095-a205069470b6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      date: "Yesterday"
    },
    {
      id: 3,
      title: "PlayStation 5 with 2 Controllers",
      price: "EGP 18,000",
      location: "Mohandessin, Giza",
      image: "https://images.unsplash.com/photo-1607853202273-797f1c22a38e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      date: "3 days ago"
    },
    {
      id: 4,
      title: "MacBook Pro 2021 - M1 Pro Chip",
      price: "EGP 45,000",
      location: "New Cairo, Cairo",
      image: "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      date: "5 days ago"
    }
  ];

  // Render listings
  renderListings('propertyListings', propertyData);
  renderListings('vehicleListings', vehicleData);
  renderListings('electronicsListings', electronicsData);
}

// Render listing cards
function renderListings(containerId, listingsData) {
  const container = document.getElementById(containerId);
  if (!container) return;

  listingsData.forEach(listing => {
    const listingCard = document.createElement('div');
    listingCard.className = 'listing-card';
    listingCard.innerHTML = `
      <div class="listing-image">
        <img src="${listing.image}" alt="${listing.title}" />
      </div>
      <div class="listing-content">
        <div class="listing-price">${listing.price}</div>
        <h3 class="listing-title">${listing.title}</h3>
        <div class="listing-location">
          <i data-feather="map-pin"></i>
          <span>${listing.location}</span>
        </div>
        <div class="listing-date">${listing.date}</div>
      </div>
    `;
    container.appendChild(listingCard);
  });

  // Re-run feather icons for the newly added elements
  feather.replace();
}
