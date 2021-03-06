export default class Popup {
    constructor(popupElement) {
        this._popupElement = document.querySelector(popupElement);
    }

    openPopup() {
        this._popupElement.classList.add("popup_opened");
        document.addEventListener("keydown", this._handleEscClose);
    }

    closePopup() {
        this._popupElement.classList.remove("popup_opened");
        document.removeEventListener("keydown", this._handleEscClose);
    }

    _handleEscClose = (evt) => {
        if (evt.key === "Escape") {
            this.closePopup();
          }
    }

    setEventListeners() {
        this._popupElement.addEventListener("click", (evt) => {
            if (evt.target.classList.contains('popup__overlay')) {
                this.closePopup()
            }
            if (evt.target.classList.contains('popup__button-close')) {
                this.closePopup()
            }
        })
    }
}