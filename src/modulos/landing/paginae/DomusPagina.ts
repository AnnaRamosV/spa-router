import { defineComponent, onMounted, ref } from "vue";

export default defineComponent({
    setup: () => {
        console.log('setup');

    const numerator = ref(0); 
        
    onMounted(() => {
        
    })

    return{
        numerator,
    }
    }
});