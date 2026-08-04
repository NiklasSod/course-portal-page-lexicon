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
        <form onSubmit={handleSubmit}>
            <label>
                Namn:
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            </label>
            <label>
                E-post:
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </label>
            <label>
                Meddelande:
                <textarea value={message} onChange={(e) => setMessage(e.target.value)} />
            </label>
            <button type="submit">Skicka meddelande</button>
        </form>
    )
}
export default ContactForm