document.addEventListener("DOMContentLoaded", function() {
    const screen = document.getElementById("screen");
    let screenValue = '';

    const buttons = document.querySelectorAll("button");
    buttons.forEach(button => {
        button.addEventListener("click", function() {
            const buttonText = this.innerText;

            if (buttonText === 'C') {
                screenValue = '';
                screen.innerText = '0';
            } else if (buttonText === 'DEL') {
                screenValue = screenValue.slice(0, -1);
                screen.innerText = screenValue || '0';
            } else if (buttonText === '=') {
                try {
                    screenValue = eval(screenValue.replace('^', '**'));
                    screen.innerText = screenValue;
                } catch {
                    screen.innerText = 'Error';
                    screenValue = '';
                }
            } else {
                if (screenValue === '' && (buttonText === '*' || buttonText === '/' || buttonText === '^')) {
                    return;
                }
                screenValue += buttonText;
                screen.innerText = screenValue;
            }
        });
    });
});
