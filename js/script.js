import { slides } from './data.js';

const { createApp } = Vue;

createApp({
    data(){
        return {
            slides: slides, // inseriamo un osservatore delle interazioni delle interazioni dell'oggetto in questione
            firstSlideActive: 0 // inizializziamo l'indice della slide attiva, che inizialmente sarà la prima
        }
    },
    methods: {
        // prima funzione da associare al pulsante per andare avanti sulle slide
        nextSlide(){
            if(this.firstSlideActive < this.slides.length - 1){ // se l'indice della slide attiva è inferiore al numero di slide - 1
                this.firstSlideActive++; // incrementa l'indice della slide attiva
            } else { // altrimenti
                this.firstSlideActive = 0; // imposta l'indice della slide attiva a 0
            }
        },
        previousSlide(){
            if(this.firstSlideActive > 0){// se l'indice della slide attiva è superiore a 0
                this.firstSlideActive--; // decrementa l'indice della slide attiva
            } else { // altrimenti
                this.firstSlideActive = this.slides.length - 1; // imposta l'indice della slide attiva al numero di slide - 1
            }
        }
    },

    mounted() {

    }
    
}).mount('#app');