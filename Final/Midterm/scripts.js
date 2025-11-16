// DOM manipulation
const greetingElement = document.getElementById('greeting');
const themeToggleButton = document.getElementById('theme-toggle');
const scrollTopButton = document.getElementById('scroll-top');
const yearElement = document.getElementById('current-year');


// This function implements a dynamic greeting based on time of day
function updateGreeting() {
    const hour = new Date().getHours();
    let greeting;
    
	// Sets the greeting to "Good morning
    if (hour < 12) {
        greeting = "Good morning!";
    } else if (hour < 17) {
        greeting = "Good afternoon!";
    } else {
        greeting = "Good evening!";
    }
    
    greetingElement.textContent = greeting;
}

// This function implements the ability to switch between dark mode and light mode by clicking the
// theme button
function themeToggle() {
    const currentTheme = localStorage.getItem('theme') || 'light';
    
    // Set initial theme
    document.documentElement.setAttribute('data-theme', currentTheme);
    updateThemeButton(currentTheme);
    
    themeToggleButton.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateThemeButton(newTheme);
    });
}

// This function changes the theme button to say "Light Mode" after you switch to Dark Mode, or vice versa
function updateThemeButton(theme) {
    themeToggleButton.textContent = theme === 'light' ? ' Dark Mode ' : ' Light Mode ';
}

// This function creates the functionality for the "Scrool to Top" button, which scroll to the top of the
// page when clicked
function scrollTop() {
	
    scrollTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
        });
    });
}

// This function update the year on the copyright label based on what yae
function updateCopyrightYear() {
    yearElement.textContent = new Date().getFullYear();
}

// Calls all the functions to setup the DOM functionality
updateGreeting();
themeToggle();
scrollTop();
updateCopyrightYear();

