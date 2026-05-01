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
        } else {
            root.classList.remove(this.darkThemeClass);
        }

        console.log('Updated classes:', root.className);
        console.log('Has dark theme class:', root.classList.contains(this.darkThemeClass));

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
    }
}

// Initialize theme manager immediately
window.themeManager = new ThemeManager();

// Also initialize when DOM is ready to ensure proper setup
document.addEventListener('DOMContentLoaded', function() {
    if (window.themeManager) {
        window.themeManager.updateToggle();
    }
});
