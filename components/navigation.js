// Calculate correct path to components based on current directory depth
function getComponentsPath() {
    const path = window.location.pathname;
    const depth = (path.match(/\//g) || []).length - 1; // Count slashes minus root
    let relativePath = '';
    
    for (let i = 0; i < depth; i++) {
        relativePath += '../';
    }
    
    return relativePath + 'components/navigation.html';
}

// Get absolute path to components for consistent loading
function getAbsoluteComponentsPath() {
    const currentPath = window.location.pathname;
    const pathSegments = currentPath.split('/').filter(segment => segment !== '');
    const depth = pathSegments.length;
    
    let absolutePath = '';
    for (let i = 0; i < depth; i++) {
        absolutePath += '../';
    }
    
    return absolutePath + 'components/navigation.html';
}

// Load navigation component
fetch(getComponentsPath())
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
