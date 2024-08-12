function countStrings() {
    const input = document.getElementById("input").value;
    const words = input.split(/\s+/);
    
    const freqMap = new Map();
    
    for (const word of words) {
        const trimmedWord = word.trim().toLowerCase();
        
        if (!freqMap.has(trimmedWord)) {
            freqMap.set(trimmedWord, 1);
        } else {
            freqMap.set(trimmedWord, freqMap.get(trimmedWord) + 1);
        }
    }
    
    return freqMap;
}

function displayResults() {
    const resultDiv = document.getElementById("result");
    const freqMap = countStrings();
    
    let html = "<h2>Frequency Count:</h2><ul>";
    
    for (const [word, freq] of freqMap) {
        html += `<li>${word}: ${freq}</li>`;
    }
    
    html += "</ul>";
    
    resultDiv.innerHTML = html;
}

document.getElementById("submit").addEventListener("click", displayResults);