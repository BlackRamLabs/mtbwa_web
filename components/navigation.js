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
            const linkPath = new URL(link.href).pathname;
            
            // Normalize current path (remove trailing slash for comparison)
            const normalizedCurrentPath = currentPath.replace(/\/$/, '') || '/';
            const normalizedLinkPath = linkPath.replace(/\/$/, '') || '/';
            
            // Exact match for root
            if (normalizedCurrentPath === '/' && normalizedLinkPath === '/') {
                link.setAttribute('aria-current', 'true');
                return;
            }
            
            // Check for certification section
            if ((normalizedCurrentPath === '/certification' || normalizedCurrentPath.includes('/certification/index')) && 
                normalizedLinkPath === '/certification') {
                link.setAttribute('aria-current', 'true');
                return;
            }
            
            // Check for trail maintenance section
            if ((normalizedCurrentPath === '/trail-maintenance' || normalizedCurrentPath.includes('/trail-maintenance/index')) && 
                normalizedLinkPath === '/trail-maintenance') {
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
