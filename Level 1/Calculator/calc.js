function show7() {
    var Answer = document.getElementById('calcAnswer');
    var text = Answer.innerText;
    var lastChar = text.charAt(text.length - 1);
    if (lastChar == '+' || lastChar == "-" || lastChar == "*" || lastChar == "/") {
        Answer.innerText += ' 7';
    } else {
        Answer.innerText += '7';
    }
}

function show8() {
    var Answer = document.getElementById('calcAnswer');
    var text = Answer.innerText;
    var lastChar = text.charAt(text.length - 1);
    if (lastChar == '+' || lastChar == "-" || lastChar == "*" || lastChar == "/") {
        Answer.innerText += ' 8';
    } else {
        Answer.innerText += '8';
    }
}

function show9() {
    var Answer = document.getElementById('calcAnswer');
    var text = Answer.innerText;
    var lastChar = text.charAt(text.length - 1);
    if (lastChar == '+' || lastChar == "-" || lastChar == "*" || lastChar == "/") {
        Answer.innerText += ' 9';
    } else {
        Answer.innerText += '9';
    }
}

function show0() {
    var Answer = document.getElementById('calcAnswer');
    var text = Answer.innerText;
    var lastChar = text.charAt(text.length - 1);
    if (lastChar == '+' || lastChar == "-" || lastChar == "*" || lastChar == "/") {
        Answer.innerText += ' 0';
    } else {
        Answer.innerText += '0';
    }
}

function show1() {
    var Answer = document.getElementById('calcAnswer');
    var text = Answer.innerText;
    var lastChar = text.charAt(text.length - 1);
    if (lastChar == '+' || lastChar == "-" || lastChar == "*" || lastChar == "/") {
        Answer.innerText += ' 1';
    } else {
        Answer.innerText += '1';
    }
}

function show2() {
    var Answer = document.getElementById('calcAnswer');
    var text = Answer.innerText;
    var lastChar = text.charAt(text.length - 1);
    if (lastChar == '+' || lastChar == "-" || lastChar == "*" || lastChar == "/") {
        Answer.innerText += ' 2';
    } else {
        Answer.innerText += '2';
    }
}

function show3() {
    var Answer = document.getElementById('calcAnswer');
    var text = Answer.innerText;
    var lastChar = text.charAt(text.length - 1);
    if (lastChar == '+' || lastChar == "-" || lastChar == "*" || lastChar == "/") {
        Answer.innerText += ' 3';
    } else {
        Answer.innerText += '3';
    }
}

function show4() {
    var Answer = document.getElementById('calcAnswer');
    var text = Answer.innerText;
    var lastChar = text.charAt(text.length - 1);
    if (lastChar == '+' || lastChar == "-" || lastChar == "*" || lastChar == "/") {
        Answer.innerText += ' 4';
    } else {
        Answer.innerText += '4';
    }
}

function show5() {
    var Answer = document.getElementById('calcAnswer');
    var text = Answer.innerText;
    var lastChar = text.charAt(text.length - 1);
    if (lastChar == '+' || lastChar == "-" || lastChar == "*" || lastChar == "/") {
        Answer.innerText += ' 5';
    } else {
        Answer.innerText += '5';
    }
}

function show6() {
    var Answer = document.getElementById('calcAnswer');
    var text = Answer.innerText;
    var lastChar = text.charAt(text.length - 1);
    if (lastChar == '+' || lastChar == "-" || lastChar == "*" || lastChar == "/") {
        Answer.innerText += ' 6';
    } else {
        Answer.innerText += '6';
    }
}

function showDot() {
    var Answer = document.getElementById('calcAnswer');
    Answer.innerText += '.';
}

function showLeft() {
    var Answer = document.getElementById('calcAnswer');
    var text = Answer.innerText;
    var lastChar = text.charAt(text.length - 1);
    if (lastChar == '+' || lastChar == "-" || lastChar == "*" || lastChar == "/") {
        Answer.innerText += ' (';
    } else {
        Answer.innerText += '(';
    }
}

function showRight() {
    var Answer = document.getElementById('calcAnswer');
    var text = Answer.innerText;
    var lastChar = text.charAt(text.length - 1);
    if (lastChar == '+' || lastChar == "-" || lastChar == "*" || lastChar == "/") {
        Answer.innerText += ' )';
    } else {
        Answer.innerText += ')';
    }
}

function clearAll() {
    var Answer = document.getElementById('calcAnswer');
    Answer.innerText = ' ';
}

function clearOne() {
    var Answer = document.getElementById('calcAnswer');
    var res = Answer.innerText;
    if (res.length > 0) {
        // Remove the last character
        var newText = res.slice(0, -1);
        Answer.innerText = newText;
    }
}

function addition() {
    var Answer = document.getElementById('calcAnswer');
    Answer.innerText += ' + ';
}

function substraction() {
    var Answer = document.getElementById('calcAnswer');
    Answer.innerText += ' - ';
}

function multiplication() {
    var Answer = document.getElementById('calcAnswer');
    Answer.innerText += ' * ';
}

function division() {
    var Answer = document.getElementById('calcAnswer');
    Answer.innerText += ' / ';
}

function equal() {
            // Get the content of the div and trim whitespace
            var Answer = document.getElementById('calcAnswer').textContent.trim();
            
            // Define the regular expression pattern for a valid equation
            const equationPattern = /^[0-9+\-*/().\s]+$/;

            // Check if the content matches the pattern and is not empty
            if (!Answer.match(equationPattern) || !Answer) {
                alert("Error: Please enter a valid equation.");
                return; // Exit the function if the input is invalid
            }
            
            try {
                // Try to evaluate the equation
                var result = eval(Answer);
                document.getElementById('calcAnswer').innerText = result.toString();
            } catch (e) {
                // Show an alert if evaluation fails
                alert("Error: Invalid equation.");
            }
        }

function equal1() {
    var Answer = document.getElementById('calcAnswer').innerText;
    var result = eval(Answer);
    document.getElementById('calcAnswer').innerText = result.toString();
}
