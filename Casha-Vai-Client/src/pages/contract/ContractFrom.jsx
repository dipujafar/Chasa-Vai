import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';


const ContractFrom = () => {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
      const inputForm = e.target; 

      emailjs.sendForm(import.meta.env.VITE_email_service_id, import.meta.env.VITE_email_template, form.current, import.meta.env.VITE_email_public_key)
        .then((result) => {
            if(result.text === "OK"){
                toast.success("We find your information. We will contract with you very soon.")
                inputForm.reset();
            }
        }, (error) => {
            console.log(error.text);
        });
    };
    return (
        <div className="flex flex-col gap-2 py-20 px-10 bg-gray-300">
        <h1 className="mb-2 text-2xl font-medium text-green-700 uppercase">Contact</h1>
        <form ref={form} onSubmit={sendEmail}>
            <input type="text" name="from_name" id="" placeholder="Name" className="w-full px-2 py-1 rounded mb-3" required />
            <input type="email" name="email" id="" placeholder="Email" className="w-full px-2 py-1 rounded mb-3" required />
            <input type="tel" name="phone" id="" placeholder="Phone" className="w-full px-2 py-1 rounded mb-3" required/>
            <textarea type="tel" name="message" id="" placeholder="How we can help you?" className="w-full px-2 py-1 rounded mb-3" required />
            <input type="submit" value="SEND" className="btn text-white bg-gradient-to-r from-pink-500 to-pink-700 " />
        </form>
    </div>
    );
};

export default ContractFrom;