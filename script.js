let facts = [];

async function loadFacts() {
    try {
        const response = await fetch('facts.json');
        const data = await response.json();
        facts = data.facts;
        displayRandomFact();
    } catch (error) {
        console.error('Error loading facts:', error);
        document.getElementById('fact-text').textContent = 'Error loading facts. Please try again later.';
    }
}

function displayRandomFact() {
    if (facts.length > 0) {
        const randomIndex = Math.floor(Math.random() * facts.length);
        const factText = document.getElementById('fact-text');
        factText.textContent = facts[randomIndex].text;
        
        // Add fade-in animation
        factText.style.opacity = 0;
        setTimeout(() => {
            factText.style.opacity = 1;
        }, 50);
    }
}

// Event listeners
document.getElementById('new-fact-btn').addEventListener('click', displayRandomFact);

// Load facts when page loads
loadFacts();
