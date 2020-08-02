export interface ContactControl {
    setShowSuccess(showSuccess: boolean) : void;
    setShowError(showError: boolean) : void;
}

export interface Contact extends ContactControl {
    setLoading(loading: boolean) : void;
}