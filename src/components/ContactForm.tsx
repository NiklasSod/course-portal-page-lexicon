import { useState } from "react";
import { FormModal } from './FormModal';
import PrimaryButton from "./PrimaryButton";

function ContactForm() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsModalOpen(true);
    };
    return(
        <section id="contact-form-section">
            <form id="contact-form" onSubmit={handleSubmit} className="flex flex-col gap-5 w-full max-w-lg mx-auto px-6 py-10">
                <h2 className="text-[28px] font-bold text-center">Kontakt</h2>
                <label className="flex flex-col gap-1 text-sm font-medium">
                    Namn
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="bg-gray-100 border border-gray-300 rounded-xl px-4 py-2.5 outline-none focus:ring-2 focus:ring-stone-400"
                    />
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
      </section>
    )
}
export default ContactForm