(function () {
    const navigation = {
        liMainMenuElements: document.querySelectorAll('.menu'),
        liMenuElements: document.querySelectorAll('.sub-menu a'),
        init() {
            document.documentElement.classList.add('js-enabled');
            this.addEventListeners();
        },
        addEventListeners() {
            this.liMainMenuElements.forEach(liMainElement => {
                liMainElement.addEventListener('mouseover', (evt) => {
                    this.showSubMenu(evt);
                })
                liMainElement.addEventListener('mouseout', (evt) => {
                    this.hideSubMenu(evt);
                })
            })
        },
        showSubMenu(evt) {
            evt.currentTarget.classList.add('show');
            this.liMenuElements.forEach(liMenuElement => {
                liMenuElement.style.color = 'white'
                liMenuElement.style.backgroundColor = '#c61128';
            })
        },
        hideSubMenu(evt) {
            evt.currentTarget.classList.remove('show');
        }
    }
    navigation.init();
})()