import { slides } from './data.js';

const { createApp } = Vue;


createApp({
    data(){
        return {
            slides: slides, // inseriamo un osservatore delle interazioni delle interazioni dell'oggetto in questione
            firstSlideActive: 0, // inizializziamo l'indice della slide attiva, che inizialmente sarà la prima

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
        // seconda funzione da associare al pulsante per tornare indietro sulle slide
        previousSlide(){
            if(this.firstSlideActive > 0){// se l'indice della slide attiva è superiore a 0
                this.firstSlideActive--; // decrementa l'indice della slide attiva
            } else { // altrimenti
                this.firstSlideActive = this.slides.length - 1; // imposta l'indice della slide attiva al numero di slide - 1
            }
        },
        // aggiungo una funzione che mi permetta di cambiare tramite un evento non ancora specificato la slide attiva
        goToSlide(i){ // funzione con argomanto i (l'indice)
            this.firstSlideActive = i; // imposta l'indice della slide attiva
        },

        blockSlider(interv){
            clearInterval(this.interv);
        },

        sliderOn(interv){
            this.interv = setInterval(this.nextSlide, 1000);
        }
    },

    mounted() {
        this.interv = setInterval(this.nextSlide, 1000);
        }
    
}).mount('#app');