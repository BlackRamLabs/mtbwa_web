// Load navigation component
fetch('/components/navigation.html')
    .then(response => response.text())
    .then(html => {
        document.getElementById('navigation-placeholder').innerHTML = html;

        // Set active page based on current URL
        const currentPath = window.location.pathname;
        const navLinks = document.querySelectorAll('.nav-menu > li > a');

        // Clear any existing active states first
        navLinks.forEach(link => {
            link.removeAttribute('aria-current');
        });

        // Determine active page based on current path
        navLinks.forEach(link => {
            const linkUrl = new URL(link.href);

            // Skip external links (different hostname) — they have no active state
            if (linkUrl.hostname !== window.location.hostname) {
                return;
            }

            const linkPath = linkUrl.pathname;

            // Normalize current path (remove trailing slash for comparison)
            const normalizedCurrentPath = currentPath.replace(/\/$/, '') || '/';
            const normalizedLinkPath = linkPath.replace(/\/$/, '') || '/';

            // Exact match for root
            if (normalizedCurrentPath === '/' && normalizedLinkPath === '/') {
                link.setAttribute('aria-current', 'true');
                return;
            }

            // Check for certifications section (main page)
            if (normalizedCurrentPath === '/certifications' || normalizedCurrentPath.includes('/certifications/index')) {
                if (normalizedLinkPath === '/certifications') {
                    link.setAttribute('aria-current', 'true');
                }
                return;
            }

            // Check for coach certification section
            if ((normalizedCurrentPath === '/certifications/coach' || normalizedCurrentPath.includes('/certifications/coach/')) &&
                normalizedLinkPath === '/certifications') {
                link.setAttribute('aria-current', 'true');
                return;
            }

            // Check for trail maintenance section
            if ((normalizedCurrentPath === '/certifications/trail-maintenance' || normalizedCurrentPath.includes('/certifications/trail-maintenance/')) &&
                normalizedLinkPath === '/certifications') {
                link.setAttribute('aria-current', 'true');
                return;
            }

            // Check for trails section (including sub-pages)
            if ((normalizedCurrentPath === '/trails' ||
                normalizedCurrentPath.includes('/trails/index') ||
                normalizedCurrentPath.includes('/trails/map') ||
                normalizedCurrentPath.includes('/trails/videos')) &&
                normalizedLinkPath === '/trails') {
                link.setAttribute('aria-current', 'true');
                return;
            }

            // Check for community section
            if ((normalizedCurrentPath === '/community' || normalizedCurrentPath.includes('/community/index')) &&
                normalizedLinkPath === '/community') {
                link.setAttribute('aria-current', 'true');
                return;
            }

            // Exact path matches for sub-pages
            if (normalizedCurrentPath === normalizedLinkPath) {
                link.setAttribute('aria-current', 'true');
                return;
            }
        });
    })
    .catch(error => console.error('Error loading navigation:', error));
