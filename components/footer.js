// Footer component loader
document.addEventListener('DOMContentLoaded', function() {
    // Get the components path based on current page depth
    function getComponentsPath() {
        const path = window.location.pathname;
        const depth = (path.match(/\//g) || []).length - 1;
        
        // Handle different directory levels
        if (path.includes('/certification/') || path.includes('/trails/') || path.includes('/community/')) {
            return '../components/';
        } else {
            return 'components/';
        }
    }

    // Load footer component
    const componentsPath = getComponentsPath();
    const footerPlaceholder = document.getElementById('footer-placeholder');
    
    if (footerPlaceholder) {
        fetch(componentsPath + 'footer.html')
            .then(response => response.text())
            .then(html => {
                footerPlaceholder.innerHTML = html;
            })
            .catch(error => {
                console.error('Error loading footer component:', error);
            });
    }
});
