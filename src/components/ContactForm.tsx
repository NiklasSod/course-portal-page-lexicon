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
        <>
            <form id="contact-form" onSubmit={handleSubmit} className="flex flex-col gap-5 w-full max-w-lg mx-auto px-6 py-10">
                <h2 className="text-[28px] font-bold text-center">Kontakt</h2>
                <label className="flex flex-col gap-1 text-sm font-medium">
                    Namn
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => {
                            setName(e.target.value);
                            if (errors.name) setErrors((prev) => ({ ...prev, name: "" }));
                        }}
                        className={`bg-gray-100 border rounded-xl px-4 py-2.5 outline-none focus:ring-2 ${
                            errors.name ? "border-red-500 focus:ring-red-400" : "border-gray-300 focus:ring-stone-400"
                        }`}
                    />
                    {errors.name && <span className="text-red-500 text-xs mt-0.5">{errors.name}</span>}
                </label>
                <label className="flex flex-col gap-1 text-sm font-medium ">
                    E-post
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="bg-gray-100 border border-gray-300 rounded-xl px-4 py-2.5 outline-none focus:ring-2 focus:ring-stone-400"
                    />
                </label>
                <label className="flex flex-col gap-1 text-sm font-medium ">
                    Meddelande
                    <textarea
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        rows={5}
                        className="bg-gray-100 border border-gray-300 rounded-xl px-4 py-2.5 outline-none focus:ring-2 focus:ring-stone-400 resize-none"
                    />
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
      </>
    )
}
export default ContactForm