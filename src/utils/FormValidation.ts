export interface ContactFormData {
    name: string;
    email: string;
    message: string;
}

export interface ValidationErrors {
    name: string;
    email: string;
    message: string;
}

export function validateContactForm(data: ContactFormData) {
    const { name, email, message } = data;
    const errors: ValidationErrors = {
        name: "",
        email: "",
        message: "",
    };

    if (!name.trim()) {
        errors.name = "Namn är obligatoriskt.";
    }

    if (!email.trim()) {
        errors.email = "E-post är obligatoriskt.";
    }

    if (!message.trim()) {
        errors.message = "Meddelande är obligatoriskt.";
    }

    const isValid = !errors.name && !errors.email && !errors.message;

    return { isValid, errors };
}