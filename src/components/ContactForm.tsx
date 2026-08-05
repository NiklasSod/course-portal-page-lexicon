import { useState } from "react";
import { FormModal } from './FormModal';
import PrimaryButton from "./PrimaryButton";
import { validateContactForm } from "../utils/FormValidation";

function ContactForm() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [errors, setErrors] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleSubmit = (e: React.SubmitEvent) => {
        e.preventDefault();

        const { isValid, errors: newErrors } = validateContactForm({ name, email, message });
        setErrors(newErrors);
        if (isValid) {
            setIsModalOpen(true);
        }
    };
    return(
        <section id="contact-form-section" className="py-4 px-6 md:py-12 md:px-12">
            <form id="contact-form" onSubmit={handleSubmit} className="flex flex-col gap-5 w-full max-w-xl mx-auto">
                <h2 className="text-[28px] font-bold text-center leading-none">Kontakt</h2>
                <label htmlFor="name" className="flex flex-col gap-1 text-md font-bold">
                    Namn:
                    <input
                        type="text"
                        id="name" 
                        name="name" 
                        autoComplete="name"
                        value={name}
                        onChange={(e) => {
                            setName(e.target.value);
                            if (errors.name) setErrors((prev) => ({ ...prev, name: "" }));
                        }}
                        className={`bg-gray-100 border rounded-md px-4 py-2.5 outline-none focus:ring-2 ${
                            errors.name ? "border-red-500 focus:ring-red-400" : "border-gray-300 focus:ring-stone-400"
                        }`}
                    />
                    {errors.name && <span className="text-red-500 text-xs mt-0.5">{errors.name}</span>}
                </label>
                <label htmlFor="email"className="flex flex-col gap-1 text-md font-bold">
                    E-post:
                    <input
                        type="email"
                        id="email" 
                        name="email" 
                        autoComplete="email"
                        value={email}
                        onChange={(e) => {
                            setEmail(e.target.value);
                            if (errors.email) setErrors((prev) => ({ ...prev, email: "" }));
                        }}
                        className={`bg-gray-100 border rounded-md px-4 py-2.5 outline-none focus:ring-2 ${
                            errors.email ? "border-red-500 focus:ring-red-400" : "border-gray-300 focus:ring-stone-400"
                        }`}
                    />
                    {errors.email && <span className="text-red-500 text-xs mt-0.5">{errors.email}</span>}
                </label>
                <label htmlFor="message" className="flex flex-col gap-1 text-md font-bold">
                    Meddelande:
                    <textarea
                        id="message" 
                        name="message"
                        value={message}
                        onChange={(e) => {
                            setMessage(e.target.value);
                            if (errors.message) setErrors((prev) => ({ ...prev, message: "" }));
                        }}
                        rows={5}
                        className={`bg-gray-100 border rounded-md px-4 py-2.5 outline-none focus:ring-2 resize-none ${
                            errors.message ? "border-red-500 focus:ring-red-400" : "border-gray-300 focus:ring-stone-400"
                        }`}
                    />
                    {errors.message && <span className="text-red-500 text-xs mt-0.5">{errors.message}</span>}
                </label>
                <div className="flex justify-center">
                    <PrimaryButton text="Skicka meddelande" dark={true} />
                </div>
            </form>

            {isModalOpen && (
            <FormModal 
                name={name} 
                email={email} 
                message={message} 
                setIsOpen={setIsModalOpen} />
        )}
      </section>
    )
}
export default ContactForm