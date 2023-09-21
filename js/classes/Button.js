class Button {
    constructor(selectorBtn, sizes) {
        this.selectorBtn = selectorBtn;
        this.sizes = sizes;
    }
    
    getElement(selectorBtn, sizes) {
        let isClicked = false;
        let buttonOptionColors = document.querySelector(selectorBtn);
        const dropdownContent = document.createElement('div');
        dropdownContent.classList.add('dropdown-content');

        buttonOptionColors.addEventListener('click', function () {
            isClicked = !isClicked;

            if (isClicked) {
                sizes.map((el) => {
                    const colorText = document.createElement('a');
                    colorText.classList.add('dropdown-content__choose');
                    colorText.innerHTML = `<a href="#" >${el.title}</a>`;
                    dropdownContent.appendChild(colorText);

                    colorText.addEventListener('click', () => {
                        buttonOptionColors.innerHTML = `${el.title}`;
                    });
                });
            }
            if (!isClicked) {
                dropdownContent.innerHTML = '';
            }
            buttonOptionColors.appendChild(dropdownContent);
        });
    }
}

export default Button;