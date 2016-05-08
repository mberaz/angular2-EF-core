var ModalType;
(function (ModalType) {
    ModalType[ModalType["Alert"] = 0] = "Alert";
    ModalType[ModalType["Prompt"] = 1] = "Prompt";
    ModalType[ModalType["Confirm"] = 2] = "Confirm";
})(ModalType || (ModalType = {}));
;
var ModelOpener = (function () {
    function ModelOpener() {
        this.hideModal();
    }
    ModelOpener.prototype.hidehtml = function () {
        this.bodyClass = "";
        this.modalClass = "";
        this.modelDisplay = "none";
        this.backDropDisplay = "none";
        this.cancelButtonDisplay = "none";
        this.promtDisplay = "none";
    };
    ModelOpener.prototype.hideModal = function () {
        this.hidehtml();
        this.modalBody = "";
        this.modalHeader = "";
        //on close
        if (this.modalOnClose != null) {
            switch (this.modalType) {
                case ModalType.Alert:
                    this.modalOnClose();
                    break;
                case ModalType.Prompt:
                    //do something else
                    this.modalOnClose(this.promptResult);
                    break;
                case ModalType.Confirm:
                    this.modalOnClose(true);
                    break;
            }
        }
    };
    ModelOpener.prototype.cancelModal = function () {
        this.confirmResult = false;
        this.hidehtml();
    };
    ModelOpener.prototype.showHtml = function (header, text, beforeOpenCallback, closeCallback) {
        if (beforeOpenCallback === void 0) { beforeOpenCallback = null; }
        if (closeCallback === void 0) { closeCallback = null; }
        this.bodyClass = "modal-open";
        this.modalClass = "in";
        this.modelDisplay = "block";
        this.backDropDisplay = "block";
        this.modalBody = text;
        this.modalHeader = header;
        this.modalOnClose = closeCallback;
        this.modalOnOpenCallback = beforeOpenCallback;
        //before open
        if (this.modalOnOpenCallback != null) {
            this.modalOnOpenCallback();
        }
    };
    ModelOpener.prototype.alert = function (header, text, beforeOpenCallback, closeCallback) {
        if (beforeOpenCallback === void 0) { beforeOpenCallback = null; }
        if (closeCallback === void 0) { closeCallback = null; }
        this.showHtml(header, text, beforeOpenCallback, closeCallback);
        this.cancelButtonDisplay = "none";
        this.modalType = ModalType.Alert;
    };
    ModelOpener.prototype.prompt = function (header, text, beforeOpenCallback, closeCallback) {
        if (beforeOpenCallback === void 0) { beforeOpenCallback = null; }
        if (closeCallback === void 0) { closeCallback = null; }
        this.showHtml(header, text, beforeOpenCallback, closeCallback);
        this.cancelButtonDisplay = "inline-block";
        this.promtDisplay = "block";
        this.modalType = ModalType.Prompt;
    };
    ModelOpener.prototype.confirm = function (header, text, beforeOpenCallback, closeCallback) {
        if (beforeOpenCallback === void 0) { beforeOpenCallback = null; }
        if (closeCallback === void 0) { closeCallback = null; }
        this.showHtml(header, text, beforeOpenCallback, closeCallback);
        this.cancelButtonDisplay = "inline-block";
        this.modalType = ModalType.Confirm;
    };
    return ModelOpener;
}());
//# sourceMappingURL=ModelOpener.js.map