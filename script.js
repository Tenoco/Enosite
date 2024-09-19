const toggleButton = document.getElementById('theme-toggle');
const body = document.body;
const loveButton = document.getElementById('loveButton');

toggleButton.addEventListener('click', function() {
    if (body.classList.contains('dark-mode')) {
        body.classList.remove('dark-mode');
        body.classList.add('light-mode');
        toggleButton.textContent = 'Switch to Dark Mode';
        toggleButton.classList.remove('dark-mode');
        toggleButton.classList.add('light-mode');
    } else {
        body.classList.remove('light-mode');
        body.classList.add('dark-mode');
        toggleButton.textContent = 'Switch to Light Mode';
        toggleButton.classList.remove('light-mode');
        toggleButton.classList.add('dark-mode');
    }
});

loveButton.addEventListener('click', function() {
    loveButton.classList.add('clicked');
    setTimeout(function() {
        loveButton.classList.remove('clicked');
    }, 600);
});