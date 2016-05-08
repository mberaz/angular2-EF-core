
enum ModalType { Alert, Prompt, Confirm };

class ModelOpener
{
    bodyClass: string;
    modalClass: string;
    modelDisplay: string;
    backDropDisplay: string;
    cancelButtonDisplay: string;
    modalHeader: string;
    modalBody: string;
    promtDisplay: string;
    promptResult: string;
    confirmResult: boolean;

    modalOnOpenCallback: any;
    modalOnClose: any;
    modalType: ModalType;

    constructor()
    {
        this.hideModal();
    }

    hidehtml()
    {
        this.bodyClass = "";
        this.modalClass = "";
        this.modelDisplay = "none";
        this.backDropDisplay = "none";
        this.cancelButtonDisplay = "none";
        this.promtDisplay = "none";
    }

    hideModal()
    {
        this.hidehtml();

        this.modalBody = "";
        this.modalHeader = "";

        //on close
        if (this.modalOnClose != null)
        {
            switch (this.modalType)
            {
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
    }

    cancelModal()
    {
        this.confirmResult = false;
        this.hidehtml();
    }

    showHtml(header: string, text: string, beforeOpenCallback: any = null, closeCallback: any = null)
    {
        this.bodyClass = "modal-open";
        this.modalClass = "in";
        this.modelDisplay = "block";
        this.backDropDisplay = "block";

        this.modalBody = text;
        this.modalHeader = header;
        this.modalOnClose = closeCallback;
        this.modalOnOpenCallback = beforeOpenCallback;
        //before open
        if (this.modalOnOpenCallback != null)
        {
            this.modalOnOpenCallback();
        }
    }

    alert(header: string, text: string, beforeOpenCallback: any = null, closeCallback: any = null)
    {
        this.showHtml(header, text, beforeOpenCallback, closeCallback);
        this.cancelButtonDisplay = "none";
        this.modalType = ModalType.Alert;
    }


    prompt(header: string, text: string, beforeOpenCallback: any = null, closeCallback: any = null)
    {
        this.showHtml(header, text, beforeOpenCallback, closeCallback);
        this.cancelButtonDisplay = "inline-block";
        this.promtDisplay = "block";
        this.modalType = ModalType.Prompt;
    }

    confirm(header: string, text: string, beforeOpenCallback: any = null, closeCallback: any = null)
    {
        this.showHtml(header, text, beforeOpenCallback, closeCallback);
        this.cancelButtonDisplay = "inline-block";
        this.modalType = ModalType.Confirm;  
    }



}