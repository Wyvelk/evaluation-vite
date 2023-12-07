import Alpine from "alpinejs";
import intersect from "@alpinejs/intersect";
import persist from "@alpinejs/persist";
import contactForm from "./components/ContactForm";
import Portfolio from "./components/Portfolio";

window.Alpine = Alpine;

window.addEventListener('DOMContentLoaded', () => {
    const {alpineInitialized, Alpine} = window;
    if (alpineInitialized) {
        return;
    }

    window.alpineInitialized = true;
    const {data, start, plugin} = Alpine;
    plugin(intersect);
    plugin(persist);
    data('contactForm', contactForm);
    data('Portfolio',Portfolio);
    start();
});
