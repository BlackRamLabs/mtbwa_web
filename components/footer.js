// Footer component loader
document.addEventListener('DOMContentLoaded', function () {
    // Get the components path based on current page depth
    function getComponentsPath() {
        const path = window.location.pathname;
        const depth = (path.match(/\//g) || []).length - 1;

        return '/components/';

        // // Handle different directory levels
        // if (path.includes('/trails/map/')) {
        //     return '../../components/';
        // } else if (path.includes('/certification/') || path.includes('/community/')) {
        //     return '../components/';
        // } else if (path.includes('/trails/')) {
        //     return '../../components/';
        // } else {
        //     return 'components/';
        // }
    }

    // Load theme manager first, then footer component
    const componentsPath = getComponentsPath();
    const footerPlaceholder = document.getElementById('footer-placeholder');

    if (footerPlaceholder) {
        // Load theme manager script synchronously first
        const themeManagerScript = document.createElement('script');
        themeManagerScript.src = componentsPath + 'theme-manager.js';
        themeManagerScript.onload = function () {
            // After theme manager loads, load footer HTML
            fetch(componentsPath + 'footer.html')
                .then(response => response.text())
                .then(html => {
                    footerPlaceholder.innerHTML = html;
                    // Update toggle button styling after footer loads
                    if (window.themeManager) {
                        window.themeManager.updateToggle();
                    }
                })
                .catch(error => {
                    console.error('Error loading footer component:', error);
                });
        };
        themeManagerScript.onerror = function () {
            console.error('Error loading theme manager script');
        };
        document.head.appendChild(themeManagerScript);
    }
});
