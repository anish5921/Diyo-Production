document.addEventListener('DOMContentLoaded', () => {

    /* =============================================================
       1. PORTFOLIO DATA (Add your photos here)
        {
            img: "edited/",
            category: "nature","restaurants","clubs"
            title: "Serenity",
            subtitle: "Outdoor" 
        },
       ============================================================= */
    const portfolioData = [
        {
            img: "edited/res1.jpg",
            category: "restaurants",
            title: "Restaurant",
            subtitle: "Outdoor"
        },
        {
            img: "edited/res2.jpg",
            category: "restaurants",
            title: "Restaurant",
            subtitle: "Outdoor"
        },
        {
            img: "edited/res3.jpg",
            category: "restaurants",
            title: "Restaurant",
            subtitle: "Outdoor"
        },
        {
            img: "edited/res4.jpg",
            category: "restaurants",
            title: "Restaurant",
            subtitle: "Outdoor"
        },
        {
            img: "edited/cl1.jpg",
            category: "clubs",
            title: "Club",
            subtitle: "Clubs"
        },
        {
            img: "edited/cl2.jpg",
            category: "clubs",
            title: "Club",
            subtitle: "Clubs"
        },
        {
            img: "edited/cl3.jpg",
            category: "clubs",
            title: "Club",
            subtitle: "Clubs"
        },
        {
            img: "edited/cl4.jpg",
            category: "clubs",
            title: "Club",
            subtitle: "Clubs"
        },
        {
            img: "edited/cl5.jpg",
            category: "clubs",
            title: "Club",
            subtitle: "Clubs"
        },
        {
            img: "edited/cl6.jpg",
            category: "clubs",
            title: "Club",
            subtitle: "Clubs"
        },
        {
            img: "edited/cl7.jpg",
            category: "clubs",
            title: "Club",
            subtitle: "Clubs"
        },
        {
            img: "edited/cl8.jpg",
            category: "clubs",
            title: "Club",
            subtitle: "Clubs"
        },
        {
            img: "edited/cl9.jpg",
            category: "clubs",
            title: "Club",
            subtitle: "Clubs"
        },
        {
            img: "edited/cl10.jpg",
            category: "clubs",
            title: "Club",
            subtitle: "Clubs"
        },
        {
            img: "edited/cl11.jpg",
            category: "clubs",
            title: "Club",
            subtitle: "Clubs"
        },
        {
            img: "edited/cl12.jpg",
            category: "clubs",
            title: "Club",
            subtitle: "Clubs"
        },
        {
            img: "edited/cl13.jpg",
            category: "clubs",
            title: "Club",
            subtitle: "Clubs"
        },
        {
            img: "edited/cl14.jpg",
            category: "clubs",
            title: "Club",
            subtitle: "Clubs"
        },
        {
            img: "edited/cl15.jpg",
            category: "clubs",
            title: "Club",
            subtitle: "Clubs"
        },
        {
            img: "edited/cl16.jpg",
            category: "clubs",
            title: "Club",
            subtitle: "Clubs"
        },
        {
            img: "edited/cl17.jpg",
            category: "clubs",
            title: "Club",
            subtitle: "Clubs"
        },
        {
            img: "edited/cl18.jpg",
            category: "clubs",
            title: "Club",
            subtitle: "Clubs"
        },
        {
            img: "edited/cl19.jpg",
            category: "clubs",
            title: "Club",
            subtitle: "Clubs"
        },
        {
            img: "edited/cl20.jpg",
            category: "clubs",
            title: "Club",
            subtitle: "Clubs"
        },
        {
            img: "edited/cl21.jpg",
            category: "clubs",
            title: "Club",
            subtitle: "Clubs"
        },
          {
            img: "edited/cl22.jpg",
            category: "clubs",
            title: "Club",
            subtitle: "Clubs"
        },
        
          {
            img: "edited/cl23.jpg",
            category: "clubs",
            title: "Club",
            subtitle: "Clubs"
        },
          {
            img: "edited/cl24.jpg",
            category: "clubs",
            title: "Club",
            subtitle: "Clubs"
        }, 
        
    ];

    /* =============================================================
       2. VARIABLES FOR LIGHTBOX
       ============================================================= */
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const closeBtn = document.getElementById('close-lightbox');

    /* =============================================================
       3. RENDER GRID & ATTACH CLICK EVENTS
       ============================================================= */
    const gridContainer = document.querySelector('.portfolio-grid');
    
    if (gridContainer) {
        gridContainer.innerHTML = '';

        portfolioData.forEach(item => {
            // Create the Item Div
            const itemDiv = document.createElement('div');
            itemDiv.classList.add('portfolio-item');
            itemDiv.setAttribute('data-category', item.category);

            itemDiv.innerHTML = `
                <img src="${item.img}" alt="${item.title}">
                <div class="overlay">
                    <h3>${item.title}</h3>
                    <p>${item.subtitle}</p>
                </div>
            `;

            // NEW: Add Click Event to Open Lightbox
            itemDiv.addEventListener('click', () => {
                lightbox.classList.add('active');
                lightboxImg.src = item.img; // Set popup image to match clicked image
            });

            // Add to the grid
            gridContainer.appendChild(itemDiv);
        });
    }

    /* =============================================================
       4. CLOSE LIGHTBOX LOGIC
       ============================================================= */
    // Close when clicking the X button
    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            lightbox.classList.remove('active');
        });
    }

    // Close when clicking outside the image (on the dark background)
    if (lightbox) {
        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox) {
                lightbox.classList.remove('active');
            }
        });
    }

    /* =============================================================
       5. FILTERING LOGIC
       ============================================================= */
    const filterButtons = document.querySelectorAll('.filter-btn');
    const portfolioItems = document.querySelectorAll('.portfolio-item'); 

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            const filterValue = button.getAttribute('data-filter');

            portfolioItems.forEach(item => {
                const itemCategory = item.getAttribute('data-category');
                
                if (filterValue === 'all' || filterValue === itemCategory) {
                    item.classList.remove('hide');
                    item.style.animation = 'none';
                    item.offsetHeight; 
                    item.style.animation = 'fadeInUp 0.5s ease forwards';
                } else {
                    item.classList.add('hide');
                }
            });
        });
    });

    /* =============================================================
       6. MOBILE NAVIGATION (Burger Menu)
       ============================================================= */
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');

    if (burger) {
        burger.addEventListener('click', () => {
            nav.classList.toggle('nav-active');
            burger.classList.toggle('toggle');
        });
    }

    /* =============================================================
       7. SMOOTH SCROLLING
       ============================================================= */
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            if (nav.classList.contains('nav-active')) {
                nav.classList.remove('nav-active');
                burger.classList.remove('toggle');
            }

            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});