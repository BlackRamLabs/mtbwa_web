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

// Load navigation component
fetch(getComponentsPath())
    .then(response => response.text())
    .then(html => {
        document.getElementById('navigation-placeholder').innerHTML = html;
        
        // Set active page based on current URL
        const currentPath = window.location.pathname;
        const navLinks = document.querySelectorAll('.nav-menu > li > a');
        
        navLinks.forEach(link => {
            const linkPath = new URL(link.href).pathname;
            if (linkPath === currentPath || 
                (currentPath.endsWith('index.html') && linkPath.endsWith('index.html')) ||
                (currentPath.includes('/certification/') && linkPath.includes('/certification/')) ||
                (currentPath.includes('/trails/') && linkPath.includes('/trails/') && !linkPath.includes('/map.html') && !linkPath.includes('/videos.html')) ||
                (currentPath.includes('/community/') && linkPath.includes('/community/'))) {
                link.setAttribute('aria-current', 'true');
            }
        });
    })
    .catch(error => console.error('Error loading navigation:', error));
