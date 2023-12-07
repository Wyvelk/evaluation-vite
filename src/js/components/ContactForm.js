export default  function contactForm() {
    return {
        name: '',
        email: '',
        message: '',
        errorMessages: '',

        validateForm() {

            this.errorMessages = '';


            if (!this.name || !this.email || !this.message) {
                this.errorMessages = 'Veuillez remplir tous les champs.';
                return;
            }

            alert('Formulaire envoyé avec succès!');
            this.name = '';
            this.email = '';
            this.message = '';
        }
    };
}
