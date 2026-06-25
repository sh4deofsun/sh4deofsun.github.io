/**
 * Personal Portfolio Application Logic (Vanilla JS)
 */

document.addEventListener('DOMContentLoaded', () => {
  initNavigation();
  initMobileMenu();
  initLightbox();
  initSkillBars();
});

/**
 * Handle Tab navigation & deep linking
 */
function initNavigation() {
  const navItems = document.querySelectorAll('.nav-item');
  const sections = document.querySelectorAll('.section');

  function switchTab(targetId) {
    // If targetId is empty, default to the first tab (usually #home)
    const cleanId = targetId || '#home';
    
    let activeSection = null;
    
    // Deactivate all sections and nav items
    sections.forEach(sec => {
      sec.classList.remove('active');
      if ('#' + sec.id === cleanId) {
        activeSection = sec;
      }
    });

    navItems.forEach(item => {
      item.classList.remove('active');
      const link = item.querySelector('a');
      if (link && link.getAttribute('href') === cleanId) {
        item.classList.add('active');
      }
    });

    // If section exists, activate it
    if (activeSection) {
      activeSection.classList.add('active');
      // Scroll to top of content
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  // Listen to hash changes (for deep links and navigation)
  window.addEventListener('hashchange', () => {
    switchTab(window.location.hash);
    
    // Close sidebar on mobile after navigating
    const sidebar = document.querySelector('.sidebar');
    if (sidebar) {
      sidebar.classList.remove('active');
    }
  });

  // Initial load
  if (window.location.hash) {
    switchTab(window.location.hash);
  } else {
    // Default to the first section
    const firstSection = document.querySelector('.section');
    if (firstSection) {
      switchTab('#' + firstSection.id);
    }
  }
}

/**
 * Handle responsive sidebar menu toggle
 */
function initMobileMenu() {
  const toggleBtn = document.querySelector('.mobile-toggle');
  const sidebar = document.querySelector('.sidebar');

  if (toggleBtn && sidebar) {
    toggleBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      sidebar.classList.toggle('active');
    });

    // Close sidebar if clicking outside of it on mobile
    document.addEventListener('click', (e) => {
      if (window.innerWidth <= 992) {
        const isClickInsideSidebar = sidebar.contains(e.target);
        const isClickInsideToggle = toggleBtn.contains(e.target);
        
        if (!isClickInsideSidebar && !isClickInsideToggle) {
          sidebar.classList.remove('active');
        }
      }
    });
  }
}

/**
 * Handle image popup / Lightbox modal for projects gallery
 */
function initLightbox() {
  const galleryItems = document.querySelectorAll('.gallery-item');
  
  // Create lightbox markup programmatically if it doesn't exist
  let lightbox = document.querySelector('.lightbox');
  if (!lightbox && galleryItems.length > 0) {
    lightbox = document.createElement('div');
    lightbox.className = 'lightbox';
    lightbox.innerHTML = `
      <span class="lightbox-close">&times;</span>
      <img class="lightbox-content" src="" alt="Enlarged Project Image">
    `;
    document.body.appendChild(lightbox);
  }

  if (lightbox) {
    const lightboxImg = lightbox.querySelector('.lightbox-content');
    const closeBtn = lightbox.querySelector('.lightbox-close');

    galleryItems.forEach(item => {
      item.addEventListener('click', () => {
        const imgLink = item.querySelector('a');
        const imgSrc = imgLink ? imgLink.getAttribute('href') : '';
        if (imgSrc) {
          lightboxImg.src = imgSrc;
          lightbox.classList.add('active');
          document.body.style.overflow = 'hidden'; // Stop page scrolling
        }
      });
    });

    // Close lightbox
    const closeLightbox = () => {
      lightbox.classList.remove('active');
      document.body.style.overflow = ''; // Restore scrolling
      lightboxImg.src = '';
    };

    closeBtn.addEventListener('click', closeLightbox);
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) {
        closeLightbox();
      }
    });

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && lightbox.classList.contains('active')) {
        closeLightbox();
      }
    });
  }
}

/**
 * Trigger skill bar animations
 */
function initSkillBars() {
  const skillBars = document.querySelectorAll('.cv-skill-progress');
  
  // Simple intersection observer to animate skill bars when they enter viewport
  if ('IntersectionObserver' in window && skillBars.length > 0) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const bar = entry.target;
          const targetWidth = bar.getAttribute('data-width') || '0%';
          bar.style.width = targetWidth;
          observer.unobserve(bar);
        }
      });
    }, { threshold: 0.1 });

    skillBars.forEach(bar => observer.observe(bar));
  } else {
    // Fallback if IntersectionObserver isn't supported
    setTimeout(() => {
      skillBars.forEach(bar => {
        const targetWidth = bar.getAttribute('data-width') || '0%';
        bar.style.width = targetWidth;
      });
    }, 500);
  }
}
