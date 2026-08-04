import { useState } from "react";

function ContactForm() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Namn:", name);
        console.log("E-post:", email);
        console.log("Meddelande:", message);
    };
    return(
        <form onSubmit={handleSubmit} className="flex flex-col gap-5 w-full max-w-lg mx-auto px-6 py-10">
            <label className="flex flex-col gap-1 text-sm font-medium text-stone-700">
                Namn
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="border border-stone-300 rounded-xl px-4 py-2.5 text-stone-900 outline-none focus:ring-2 focus:ring-stone-400"
                />
            </label>
            <label className="flex flex-col gap-1 text-sm font-medium text-stone-700">
                E-post
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="border border-stone-300 rounded-xl px-4 py-2.5 text-stone-900 outline-none focus:ring-2 focus:ring-stone-400"
                />
            </label>
            <label className="flex flex-col gap-1 text-sm font-medium text-stone-700">
                Meddelande
                <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows={5}
                    className="border border-stone-300 rounded-xl px-4 py-2.5 text-stone-900 outline-none focus:ring-2 focus:ring-stone-400 resize-none"
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
    )
}
export default ContactForm