// Theme Management System
class ThemeManager {
    constructor() {
        this.storageKey = 'mtbwa-theme-preference';
        this.darkThemeClass = 'dark-theme';
        this.init();
    }

    init() {
        const savedTheme = localStorage.getItem(this.storageKey);
        const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        
        if (savedTheme) {
            this.setTheme(savedTheme);
        } else {
            this.setTheme(systemPrefersDark ? 'dark' : 'light');
        }

        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
            if (!localStorage.getItem(this.storageKey)) {
                this.setTheme(e.matches ? 'dark' : 'light');
            }
        });

        this.updateToggle();
    }

    setTheme(theme) {
        const root = document.documentElement;
        
        console.log('Theme change:', theme);
        console.log('Current classes:', root.className);
        
        if (theme === 'dark') {
            root.classList.add(this.darkThemeClass);
            root.classList.remove('light-theme');
        } else {
            root.classList.remove(this.darkThemeClass);
            root.classList.add('light-theme');
        }

        console.log('Updated classes:', root.className);
        console.log('Has dark theme class:', root.classList.contains(this.darkThemeClass));
        console.log('Has light theme class:', root.classList.contains('light-theme'));

        this.updateToggle();
    }

    toggleTheme() {
        const currentTheme = localStorage.getItem(this.storageKey) || 
            (document.documentElement.classList.contains(this.darkThemeClass) ? 'dark' : 'light');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        localStorage.setItem(this.storageKey, newTheme);
        this.setTheme(newTheme);
    }

    updateToggle() {
        const toggle = document.getElementById('theme-toggle');
        if (toggle) {
            const isDark = document.documentElement.classList.contains(this.darkThemeClass);
            toggle.textContent = isDark ? '☀️' : '🌙';
            toggle.setAttribute('aria-label', isDark ? 'Switch to light mode' : 'Switch to dark mode');
        }
        
        // Update logo based on theme
        this.updateLogo();
    }

    updateLogo() {
        const isDark = document.documentElement.classList.contains(this.darkThemeClass);
        const logoPath = isDark ? '/assets/images/MTBWA_logo[light].png' : '/assets/images/MTBWA_logo.png';
        
        // Update header logo
        const headerLogo = document.querySelector('.logo-image');
        if (headerLogo) {
            headerLogo.src = logoPath;
        }
        
        // Update footer logo
        const footerLogo = document.querySelector('.footer-logo');
        if (footerLogo) {
            footerLogo.src = logoPath;
        }
    }
}

// Initialize theme manager immediately
window.themeManager = new ThemeManager();

// Also initialize when DOM is ready to ensure proper setup
document.addEventListener('DOMContentLoaded', function() {
    if (window.themeManager) {
        window.themeManager.updateToggle();
        window.themeManager.updateLogo();
    }
});
