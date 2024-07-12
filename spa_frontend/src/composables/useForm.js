import { reactive } from "vue";

export default function useForm(fields) {
    return reactive({
        fields,
        processing: false,
        errors: null,
        async submit(submitter) {
            if(this.processing) return;

            this.errors = null;
            this.processing = true;

            try {
                await submitter(fields);
            } catch(e) {

            }

            this.processing = false;
        }
    });
}