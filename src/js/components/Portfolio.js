const setImages = (that, data) => {
    that.images = data;
    that.categories = [...new Set(data.map(item => item.categorie))];
    that.selectedCategories = [];
}

export default function Portfolio(imagesUrl) {
    return {
        images: [],
        categories: [],
        selectedCategories: [],
        init() {
            fetch(imagesUrl)
                .then(response => {
                    if (!response.ok) {
                        throw new Error(`HTTP error! Status: ${response.status}`);
                    }
                    return response.json();
                })
                .then(data => {
                    setImages(this, data);
                })
                .catch(error => {
                    console.error('Erreur de chargement:', error);
                });
        },
        toggleCategory(category) {
            if (this.selectedCategories.includes(category)) {
                this.selectedCategories = this.selectedCategories.filter(c => c !== category);
            } else {
                this.selectedCategories.push(category);
            }
        },
        get filteredImages() {
            return this.images.filter(image => this.selectedCategories.length === 0 || this.selectedCategories.includes(image.categorie));
        }
    }
}