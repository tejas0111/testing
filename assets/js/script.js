        document.addEventListener("DOMContentLoaded", function() {
            toggleFAQ(0); // Open the first FAQ by default
        });

        function toggleFAQ(index) {
            var answers = document.querySelectorAll('.faq-answer');
            var arrows = document.querySelectorAll('.arrow');
            
            // Close all answers first
            answers.forEach(function(answer, i) {
                if (i !== index) {
                    answer.classList.remove('open');
                    arrows[i].classList.remove('open');
                }
            });

            var selectedAnswer = answers[index];
            var selectedArrow = arrows[index];

            if (selectedAnswer.classList.contains('open')) {
                selectedAnswer.classList.remove('open');
                selectedArrow.classList.remove('open');
            } else {
                selectedAnswer.classList.add('open');
                selectedArrow.classList.add('open');
            }
        }

function calculateValue() {
    const sheepAmount = document.getElementById('sheepInput').value;
    const dollarValueElement = document.getElementById('dollarValue');
    
    if (sheepAmount && !isNaN(sheepAmount)) {
        // Calculate the value by multiplying sheep amount by 0.1
        const valueInDollars = (sheepAmount * 0.1).toFixed(2);
        
        // Update the Value in dollars
        dollarValueElement.textContent = `$${valueInDollars}`;
    } else {
        // Reset if input is invalid or empty
        dollarValueElement.textContent = "$0";
    }
}



