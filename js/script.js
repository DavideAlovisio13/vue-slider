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
        
    },
    mounted() {

    }
    
}).mount('#app');