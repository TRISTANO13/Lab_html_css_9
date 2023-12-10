app.component('product-display', {
  props: {
    premium: {
      type: Boolean,
      required: true
    }
  },
  template: 
    /*html*/
    `
    <div class="product-display">
        
      <div class="product-container">
        <div class="product-image">
          <img :src="image" />
          <div class="color-choices">
            <div class="color-circle"
              v-for="(variant, index) in variants" 
              :key="variant.id"
              :style="{ backgroundColor: variant.color }"
              @mouseover="updateProduct(index)"
              >
            </div>
          </div> 
          <review-list :reviews="reviews"></review-list>
          <review-form @review-submitted="addReview"></review-form>
        </div>
        

        <div class="product-info">
          <h1>{{ productName }}</h1>
          <h2>{{ productBrand }}</h2>
          <p v-if="inStock">In Stock</p>
          <p v-else>Out of Stock</p>
          <p>Shipping: {{ shipping }}</p>
          <p>{{ TrackList }}</p>

          <ul>
            <li v-for="detail in currentDetails">{{ detail }}</li>
          </ul>

        
          <button class="button" v-on:click="addToCart" 
            :disabled="!inStock"
            :class="{ disabledButton: !inStock }"
            >
          Add to cart
          </button>
        </div>
      </div>
    </div>
    `,
  data() {
    return {
      product: 'QALF',
      brand: 'Trente-quatre Centimes',
      selectedVariant: 0,
      currentDetails: ['MEVTR', 'LIFE LIFE', 'DEUX TOILES DE MER', 'SENTIMENTAL', 'THEVIE RADIO (Interlude)', 'BXL ZOO (Ft. Hamza)', 'COEUR EN MIETTES (Ft. Lous and The Yakuza)', "POUR L'ARGENT", 'BPM', "D'JA ROULÉ", '911', 'FAIS CA BIEN (Ft. Fally Ipupa)', "ROSE MARTHES'S LOVE", "8 HORIZONTAL", 'INTRO'],
      variants: [
        {
          id: 340,
          name: 'QALF',
          color: '#000000',
          image: './assets/images/QALF.jpg',
          quantity: 0,
          details: ['MEVTR', 'LIFE LIFE', 'DEUX TOILES DE MER', 'SENTIMENTAL', 'THEVIE RADIO (Interlude)', 'BXL ZOO (Ft. Hamza)', 'COEUR EN MIETTES (Ft. Lous and The Yakuza)', "POUR L'ARGENT", 'BPM', "D'JA ROULÉ", '911', 'FAIS CA BIEN (Ft. Fally Ipupa)', "ROSE MARTHES'S LOVE", "8 HORIZONTAL", 'INTRO']
        },
        {
          id: 341,
          name: 'QALF Infinity',
          color: '#949494',
          image: './assets/images/QALF_Infinity.webp',
          quantity: 50,
          details: ['MEVTR', 'LIFE LIFE', 'DEUX TOILES DE MER', 'SENTIMENTAL', 'THEVIE RADIO (Interlude)', 'BXL ZOO (Ft. Hamza)', 'COEUR EN MIETTES (Ft. Lous and The Yakuza)', "POUR L'ARGENT", 'BPM', "D'JA ROULÉ", '911', 'FAIS CA BIEN (Ft. Fally Ipupa)', "ROSE MARTHES'S LOVE", "8 HORIZONTAL", 'INTRO', 'Ο. OG', 'Π. VANTABLACK','Ρ. DOSE', 'Σ. MOROSE', 'Τ. CHIALER (Ft. YG Pablo)', 'Υ. 2 DIAMANTS', 'Φ. THEVIE RADIO', 'Χ. ZWAAR', 'Ψ. PASSION', 'Ω. VIVRE UN PEU', 'YOUVOI']
        },
        {
          id: 342,
          name: 'QALF Live',
          color: 'red',
          image: './assets/images/QALF_Live.webp',
          quantity: 100,
          details: ['MEVTR', 'LIFE LIFE', 'DEUX TOILES DE MER', 'SENTIMENTAL', 'THEVIE RADIO (Interlude)', 'BXL ZOO (Ft. Hamza)', 'COEUR EN MIETTES (Ft. Lous and The Yakuza)', "POUR L'ARGENT", 'BPM', "D'JA ROULÉ", '911', 'FAIS CA BIEN (Ft. Fally Ipupa)', "ROSE MARTHES'S LOVE", "8 HORIZONTAL", 'INTRO', 'Ο. OG', 'Π. VANTABLACK','Ρ. DOSE', 'Σ. MOROSE', 'Τ. CHIALER (Ft. YG Pablo)', 'Υ. 2 DIAMANTS', 'Φ. THEVIE RADIO', 'Χ. ZWAAR', 'Ψ. PASSION', 'Ω. VIVRE UN PEU', 'YOUVOI', 'YOUVOI LIVE', 'P. DOSE LIVE', 'COEUR EN MIETTES LIVE (Ft. Lous and The Yakuza)', 'DEUX TOILES DE MER LIVE', 'T. CHIALER LIVE']
        }
      ],
      reviews: []
    }
  },
  methods: {
    addToCart() {
      this.$emit('add-to-cart', this.variants[this.selectedVariant].id)
    },
    updateProduct(index) {
      this.selectedVariant = index;
      this.product = this.variants[index].name;
      this.currentDetails = this.variants[index].details;
    },
    addReview(review) {
      this.reviews.push(review)
    }
  },
  computed: {
    productName() {
      return this.product
    },
    productBrand() {
      return 'Label : ' + this.brand
    },
    image() {
      return this.variants[this.selectedVariant].image
    },
    inStock() {
      return this.variants[this.selectedVariant].quantity
    },
    shipping() {
      if (this.premium) {
        return 'Free'
      }
      return 2.99
    },
    TrackList() {
      return 'Tracklist :'
    }
  }
})
