/**
 * ROBOTICS & DRONES CLUB — MSEC
 * Pure Vanilla JavaScript Web Application Logic
 * No external JS libraries or frameworks used.
 */

document.addEventListener('DOMContentLoaded', () => {
    initNavigation();
    initMobileMenu();
    initScrollReveal();
    initCounters();
    initEventFilters();
    initEventModal();
    initProfileTilt();
    initCursorGlow();
    initMagneticButtons();
    initContactForm();
    initBackgroundCanvas();
    initParallax();
});

/* ==========================================================================
   1. NAVIGATION & SCROLLSPY
   ========================================================================== */
function initNavigation() {
    const navbar = document.querySelector('.navbar');
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section[id]');

    // Header scroll background change
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Scrollspy using IntersectionObserver
    const observerOptions = {
        root: null,
        rootMargin: '-30% 0px -60% 0px',
        threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');
                navLinks.forEach(link => {
                    if (link.getAttribute('href') === `#${id}`) {
                        link.classList.add('active');
                    } else {
                        link.classList.remove('active');
                    }
                });
            }
        });
    }, observerOptions);

    sections.forEach(section => observer.observe(section));

    // Smooth scroll offset handling
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            if (href.startsWith('#')) {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    const navHeight = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--nav-height')) || 80;
                    const targetPos = target.getBoundingClientRect().top + window.pageYOffset - navHeight + 10;
                    window.scrollTo({
                        top: targetPos,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
}

/* ==========================================================================
   2. MOBILE HAMBURGER MENU
   ========================================================================== */
function initMobileMenu() {
    const mobileToggle = document.querySelector('.mobile-toggle');
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const links = document.querySelectorAll('.nav-link');

    if (!mobileToggle || !navLinks) return;

    mobileToggle.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('mobile-open');
        document.body.style.overflow = navLinks.classList.contains('mobile-open') ? 'hidden' : '';
    });

    links.forEach(link => {
        link.addEventListener('click', () => {
            if (navLinks.classList.contains('mobile-open')) {
                hamburger.classList.remove('active');
                navLinks.classList.remove('mobile-open');
                document.body.style.overflow = '';
            }
        });
    });
}

/* ==========================================================================
   3. SCROLL REVEAL ANIMATIONS
   ========================================================================== */
function initScrollReveal() {
    const revealElements = document.querySelectorAll('.reveal');
    if (!revealElements.length) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.12,
        rootMargin: '0px 0px -50px 0px'
    });

    revealElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1), transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)';
        observer.observe(el);
    });

    // Add inline dynamic revealed style rule injection
    const style = document.createElement('style');
    style.innerHTML = `
        .reveal.revealed {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }
    `;
    document.head.appendChild(style);
}

/* ==========================================================================
   4. NUMBER COUNTER ANIMATION
   ========================================================================== */
function initCounters() {
    const statItems = document.querySelectorAll('.stat-number');
    if (!statItems.length) return;

    let animated = false;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !animated) {
                animated = true;
                statItems.forEach(item => {
                    const targetText = item.getAttribute('data-target');
                    const numMatch = targetText.match(/\d+/);
                    if (!numMatch) return;
                    
                    const targetNum = parseInt(numMatch[0]);
                    const suffix = targetText.replace(numMatch[0], '');
                    let count = 0;
                    const duration = 1500;
                    const increment = targetNum / (duration / 16);

                    const timer = setInterval(() => {
                        count += increment;
                        if (count >= targetNum) {
                            item.textContent = targetNum + suffix;
                            clearInterval(timer);
                        } else {
                            item.textContent = Math.floor(count) + suffix;
                        }
                    }, 16);
                });
            }
        });
    }, { threshold: 0.5 });

    const statsBanner = document.querySelector('.stats-banner');
    if (statsBanner) observer.observe(statsBanner);
}

/* ==========================================================================
   5. EVENT FILTERS
   ========================================================================== */
function initEventFilters() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const eventCards = document.querySelectorAll('.event-card');

    if (!filterBtns.length || !eventCards.length) return;

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filterValue = btn.getAttribute('data-filter').toUpperCase();

            eventCards.forEach(card => {
                const cardCategory = card.getAttribute('data-category').toUpperCase();
                if (filterValue === 'ALL' || cardCategory === filterValue) {
                    card.style.display = 'flex';
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'scale(1)';
                    }, 10);
                } else {
                    card.style.opacity = '0';
                    card.style.transform = 'scale(0.95)';
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 300);
                }
            });
        });
    });
}

/* ==========================================================================
   6. EVENT MODAL
   ========================================================================== */
function initEventModal() {
    const modalOverlay = document.getElementById('event-modal');
    const modalContainer = modalOverlay ? modalOverlay.querySelector('.modal-container') : null;
    const closeBtn = modalOverlay ? modalOverlay.querySelector('.modal-close-btn') : null;
    const eventCards = document.querySelectorAll('.event-card');

    if (!modalOverlay || !eventCards.length) return;

    // Detailed metadata for each flagship event
    const eventDetails = {
        'ROBOTVERSE BOT RACE': {
            description: 'High-speed robotic obstacle competition pushing custom autonomous and teleoperated ground bots to their limits. Participants engineer robust mobility systems and precision code to navigate complex track terrains.',
            highlights: ['Custom Chassis & Track Dynamics', 'Precision Telemetry & Wireless Control', 'Speed & Obstacle Time Trials'],
            status: 'REGISTRATION OPEN'
        },
        'SKYCRAFT DRONE BOOTCAMP': {
            description: 'Comprehensive aerial engineering bootcamp covering quadcopter frame design, ESC calibration, flight controller programming (Betaflight/PX4), and autonomous GPS waypoint navigation.',
            highlights: ['Flight Controller Assembly & Sensor Tuning', 'Aerodynamic Rotor Efficiency', 'Hands-on Outdoor Flight Test'],
            status: 'UPCOMING PROGRAM'
        },
        'TREASURE HUNT': {
            description: 'Campus-wide technical riddle and cryptogram hunt combining hardware sensors, QR decoders, and embedded logic puzzles to unlock strategic location coordinates.',
            highlights: ['Cryptographic Logic Solving', 'Sensor-Triggered Clue Devices', 'Team Time-Trial Strategy'],
            status: 'COMPLETED'
        },
        'NEXUS: INNOVATION PITCH EVENT': {
            description: 'Premier robotics & hardware pitch event where student engineering teams present scalable robotics product ideas, proof-of-concept prototypes, and feasibility studies to expert panels.',
            highlights: ['Hardware Pitch Deck & Demo', 'Market Impact & Feasibility Study', 'Direct Mentorship & Incubation Support'],
            status: 'REGISTRATION OPEN'
        },
        'ROBOTIC WORKSHOP': {
            description: 'Hands-on intensive engineering workshop focusing on microcontrollers (Arduino, ESP32, STM32), motor drivers, sensor interfacing, and real-world circuit design fundamentals.',
            highlights: ['PCB & Circuit Design Basics', 'Sensor Integration & PWM Control', 'Hardware Debugging Techniques'],
            status: 'ANNUAL PROGRAM'
        },
        'HACKATHON': {
            description: '24-hour sprint bringing hardware hackers and developers together to solve pressing industrial automation, computer vision, and IoT challenges.',
            highlights: ['24-Hour Non-stop Build Sprint', 'Hardware + Software Full Stack Integration', 'Exciting Cash Prizes & Grants'],
            status: 'UPCOMING PROGRAM'
        },
        'ROBO AERO': {
            description: 'Aerodynamic UAV stability and precision aerial maneuvering competition testing payload release accuracy, hover stability, and aerodynamic design optimization.',
            highlights: ['Precision Airborne Dropping Systems', 'FPV Telemetry Tracking', 'Wind Resistance & Airfoil Testing'],
            status: 'FLAGSHIP CHALLENGE'
        },
        'ESCAPE PARADISE': {
            description: 'Cyber-physical escape room experience where participants solve embedded hardware challenges, rewire broken circuits, and patch logic codes to trigger door locks.',
            highlights: ['Hardware Circuit Repair Quests', 'Microcontroller Logic Override', 'Immersive Team Escape Sprint'],
            status: 'POPULAR CHALLENGE'
        },
        'INDUSTRY TALK': {
            description: 'Exclusive guest lecture and panel session with leading robotics engineers and aerospace pioneers sharing insights on Industry 4.0, autonomous navigation, and career growth.',
            highlights: ['Keynotes from Industry Experts', 'Career Guidance in Robotics & UAV', 'Interactive Q&A Session'],
            status: 'REGULAR TALK'
        },
        'AWARENESS MARATHON': {
            description: 'Community outreach initiative promoting STEM education, robotics innovation, and sustainable technology awareness through live hardware demos and interactive displays.',
            highlights: ['Public Robotics Demos', 'School STEM Mentorship', 'Green Technology Drive'],
            status: 'COMMUNITY IMPACT'
        },
        'CADCRAFT': {
            description: '3D Computer-Aided Design and mechanical modeling hackathon testing CAD proficiency, generative design optimization, and structural stress analysis.',
            highlights: ['SolidWorks / Fusion 360 Design Sprint', 'FEA Stress & Kinematic Analysis', 'Additive Manufacturing Readiness'],
            status: 'DESIGN CHALLENGE'
        },
        'DRONE SIMULATION RACE': {
            description: 'High-octane virtual FPV drone simulator racing event utilizing realistic aerodynamics physics to test high-speed gate navigation and pilot reflexes.',
            highlights: ['Realistic FPV Physics Engine', 'High-Speed Virtual Track Gate Sprint', 'Leaderboard Time Attack'],
            status: 'E-SPORTS CHALLENGE'
        }
    };

    function openModal(title, category, tagline, imgSrc) {
        const details = eventDetails[title] || {
            description: 'An flagship engineering event organized by the Robotics & Drones Club, MSEC.',
            highlights: ['Hands-on Technical Experience', 'Mentorship from Senior Members', 'Certificate of Participation'],
            status: 'FEATURED PROGRAM'
        };

        document.getElementById('modal-img').src = imgSrc;
        document.getElementById('modal-badge').textContent = category;
        document.getElementById('modal-title').textContent = title;
        document.getElementById('modal-tagline').textContent = tagline;
        document.getElementById('modal-desc').textContent = details.description;
        
        const highlightsList = document.getElementById('modal-highlights');
        highlightsList.innerHTML = '';
        details.highlights.forEach(item => {
            const li = document.createElement('li');
            li.textContent = item;
            highlightsList.appendChild(li);
        });

        modalOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeModal() {
        modalOverlay.classList.remove('active');
        document.body.style.overflow = '';
    }

    eventCards.forEach(card => {
        card.addEventListener('click', () => {
            const title = card.querySelector('.event-title').textContent;
            const category = card.getAttribute('data-category');
            const tagline = card.querySelector('.event-tagline').textContent;
            const imgSrc = card.querySelector('.event-image').src;
            openModal(title, category, tagline, imgSrc);
        });
    });

    if (closeBtn) closeBtn.addEventListener('click', closeModal);

    modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) closeModal();
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modalOverlay.classList.contains('active')) {
            closeModal();
        }
    });
}

/* ==========================================================================
   7. EXECUTIVES PROFILE 3D TILT EFFECT
   ========================================================================== */
function initProfileTilt() {
    const cards = document.querySelectorAll('.profile-card');
    if (!cards.length) return;

    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateX = ((y - centerY) / centerY) * -8;
            const rotateY = ((x - centerX) / centerX) * 8;

            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0)`;
        });
    });
}

/* ==========================================================================
   8. CURSOR GLOW EFFECT (DESKTOP ONLY)
   ========================================================================== */
function initCursorGlow() {
    if (window.innerWidth < 1024 || 'ontouchstart' in window) return;

    const cursorGlow = document.createElement('div');
    cursorGlow.className = 'cursor-glow';
    document.body.appendChild(cursorGlow);

    document.body.classList.add('cursor-active');

    let mouseX = 0;
    let mouseY = 0;
    let glowX = 0;
    let glowY = 0;

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    function animateGlow() {
        glowX += (mouseX - glowX) * 0.12;
        glowY += (mouseY - glowY) * 0.12;

        cursorGlow.style.left = `${glowX}px`;
        cursorGlow.style.top = `${glowY}px`;

        requestAnimationFrame(animateGlow);
    }

    animateGlow();
}

/* ==========================================================================
   9. MAGNETIC BUTTONS
   ========================================================================== */
function initMagneticButtons() {
    if (window.innerWidth < 1024) return;

    const magneticBtns = document.querySelectorAll('.btn');
    magneticBtns.forEach(btn => {
        btn.addEventListener('mousemove', (e) => {
            const rect = btn.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;

            btn.style.transform = `translate(${x * 0.25}px, ${y * 0.25}px)`;
        });

        btn.addEventListener('mouseleave', () => {
            btn.style.transform = `translate(0px, 0px)`;
        });
    });
}

/* ==========================================================================
   10. CONTACT FORM CLIENT-SIDE VALIDATION & TOAST
   ========================================================================== */
function initContactForm() {
    const form = document.getElementById('contact-form');
    if (!form) return;

    const nameInput = document.getElementById('form-name');
    const emailInput = document.getElementById('form-email');
    const messageInput = document.getElementById('form-message');

    function showError(input, msg) {
        const parent = input.parentElement;
        parent.classList.add('error');
        const errorEl = parent.querySelector('.form-error');
        if (errorEl) errorEl.textContent = msg;
    }

    function clearError(input) {
        const parent = input.parentElement;
        parent.classList.remove('error');
    }

    [nameInput, emailInput, messageInput].forEach(input => {
        if (input) {
            input.addEventListener('input', () => clearError(input));
        }
    });

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        let isValid = true;

        if (!nameInput.value.trim() || nameInput.value.trim().length < 2) {
            showError(nameInput, 'Please enter your full name (at least 2 characters).');
            isValid = false;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailInput.value.trim() || !emailRegex.test(emailInput.value.trim())) {
            showError(emailInput, 'Please enter a valid email address.');
            isValid = false;
        }

        if (!messageInput.value.trim() || messageInput.value.trim().length < 10) {
            showError(messageInput, 'Please enter a message (at least 10 characters).');
            isValid = false;
        }

        if (isValid) {
            showToast('Message sent successfully! We will get back to you shortly.');
            form.reset();
        }
    });
}

function showToast(message) {
    let toastContainer = document.querySelector('.toast-container');
    if (!toastContainer) {
        toastContainer = document.createElement('div');
        toastContainer.className = 'toast-container';
        document.body.appendChild(toastContainer);
    }

    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `
        <span class="toast-icon">✓</span>
        <span>${message}</span>
    `;

    toastContainer.appendChild(toast);

    setTimeout(() => toast.classList.add('show'), 10);

    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 400);
    }, 4000);
}

/* ==========================================================================
   11. TECHNICAL BACKGROUND CANVAS PARTICLES
   ========================================================================== */
function initBackgroundCanvas() {
    const canvas = document.getElementById('bg-canvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    window.addEventListener('resize', () => {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
    });

    // Particle pool
    const particleCount = Math.min(Math.floor(width / 25), 45);
    const particles = [];

    for (let i = 0; i < particleCount; i++) {
        particles.push({
            x: Math.random() * width,
            y: Math.random() * height,
            vx: (Math.random() - 0.5) * 0.4,
            vy: (Math.random() - 0.5) * 0.4,
            radius: Math.random() * 1.8 + 0.6,
            color: Math.random() > 0.4 ? 'rgba(0, 240, 255, ' : 'rgba(139, 92, 246, ',
            alpha: Math.random() * 0.4 + 0.1
        });
    }

    function renderCanvas() {
        ctx.clearRect(0, 0, width, height);

        for (let i = 0; i < particles.length; i++) {
            const p = particles[i];
            p.x += p.vx;
            p.y += p.vy;

            if (p.x < 0) p.x = width;
            if (p.x > width) p.x = 0;
            if (p.y < 0) p.y = height;
            if (p.y > height) p.y = 0;

            ctx.beginPath();
            ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
            ctx.fillStyle = p.color + p.alpha + ')';
            ctx.fill();

            // Connect nearby dots
            for (let j = i + 1; j < particles.length; j++) {
                const p2 = particles[j];
                const dx = p.x - p2.x;
                const dy = p.y - p2.y;
                const dist = Math.sqrt(dx * dx + dy * dy);

                if (dist < 120) {
                    ctx.beginPath();
                    ctx.moveTo(p.x, p.y);
                    ctx.lineTo(p2.x, p2.y);
                    const lineAlpha = (1 - dist / 120) * 0.15;
                    ctx.strokeStyle = `rgba(0, 240, 255, ${lineAlpha})`;
                    ctx.lineWidth = 0.6;
                    ctx.stroke();
                }
            }
        }

        requestAnimationFrame(renderCanvas);
    }

    renderCanvas();
}

/* ==========================================================================
   12. HERO MOUSE PARALLAX EFFECT
   ========================================================================== */
function initParallax() {
    if (window.innerWidth < 1024) return;

    const heroVisual = document.querySelector('.hero-visual');
    const hudContainer = document.querySelector('.hud-container');

    if (!heroVisual || !hudContainer) return;

    heroVisual.addEventListener('mousemove', (e) => {
        const rect = heroVisual.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;

        const tiltX = (y / (rect.height / 2)) * -10;
        const tiltY = (x / (rect.width / 2)) * 10;

        hudContainer.style.transform = `rotateX(${tiltX}deg) rotateY(${tiltY}deg) translateZ(10px)`;
    });

    heroVisual.addEventListener('mouseleave', () => {
        hudContainer.style.transform = 'rotateX(0deg) rotateY(0deg) translateZ(0)';
    });
}
