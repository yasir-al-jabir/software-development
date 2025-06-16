document.addEventListener('DOMContentLoaded', function() {
    const counterElement = document.getElementById('counter');
    const addBtn = document.getElementById('addBtn');
    const resetBtn = document.getElementById('resetBtn');
    const messageElement = document.getElementById('message');
    
    let count = 0;
    
    // Load saved count from localStorage if available
    if (localStorage.getItem('waterCount')) {
        count = parseInt(localStorage.getItem('waterCount'));
        updateCounter();
        checkGoal();
    }
    
    // Add glass button click handler
    addBtn.addEventListener('click', function() {
        count++;
        updateCounter();
        checkGoal();
        saveCount();
    });
    
    // Reset button click handler
    resetBtn.addEventListener('click', function() {
        count = 0;
        updateCounter();
        hideMessage();
        saveCount();
    });
    
    // Update counter display
    function updateCounter() {
        counterElement.textContent = count;
    }
    
    // Check if goal is reached and show message
    function checkGoal() {
        if (count >= 8) {
            showMessage("Great! You're fully hydrated! 💧");
        }
    }
    
    // Show motivational message
    function showMessage(msg) {
        messageElement.textContent = msg;
        messageElement.classList.add('show');
    }
    
    // Hide message
    function hideMessage() {
        messageElement.classList.remove('show');
    }
    
    // Save count to localStorage
    function saveCount() {
        localStorage.setItem('waterCount', count.toString());
    }
});