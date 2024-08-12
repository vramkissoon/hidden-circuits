function handleInput() {
    // Get the value from the input field
    const inputText = document.getElementById('userInput').value;

    //Display the input value in the paragraph
    document.getElementById('displayText').innerText = 'You entered: ${inputText}';
}