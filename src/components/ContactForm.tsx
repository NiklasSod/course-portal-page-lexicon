import { useState } from "react";
import { FormModal } from './FormModal';

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
        <>
            <form id="contact-form" onSubmit={handleSubmit} className="flex flex-col gap-5 w-full max-w-lg mx-auto px-6 py-10">
                <h2 className="text-2xl font-bold text-stone-800 text-center">Kontakt</h2>
                <label className="flex flex-col gap-1 text-sm font-medium text-black">
                    Namn
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="bg-gray-100 border border-gray-300 rounded-xl px-4 py-2.5 text-stone-900 outline-none focus:ring-2 focus:ring-stone-400"
                    />
                </label>
                <label className="flex flex-col gap-1 text-sm font-medium text-black">
                    E-post
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="bg-gray-100 border border-gray-300 rounded-xl px-4 py-2.5 text-stone-900 outline-none focus:ring-2 focus:ring-stone-400"
                    />
                </label>
                <label className="flex flex-col gap-1 text-sm font-medium text-black">
                    Meddelande
                    <textarea
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        rows={5}
                        className="bg-gray-100 border border-gray-300 rounded-xl px-4 py-2.5 text-stone-900 outline-none focus:ring-2 focus:ring-stone-400 resize-none"
                    />
                </label>
                <div className="flex justify-center">
                <button
                    type="submit"
                    className="bg-stone-800 text-white rounded-xl px-4 py-2 text-sm font-medium hover:bg-stone-700 transition-colors"
                >
                    Skicka meddelande
                </button>
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