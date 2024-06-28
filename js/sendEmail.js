import emailjs from '../node_modules/@emailjs/browser';
import dotenv from '../node_modules/dotenv';

dotenv.config();

emailjs.init(process.env.EMAILJS_PUBLIC_KEY);

export const sendConfirmationEmail = async (userEmail) => {
    const templateParams = {
        to_email: userEmail,
    };

    try {
        const response = await emailjs.send(
            process.env.EMAILJS_SERVICE_ID,
            process.env.EMAILJS_TEMPLATE_ID,
            templateParams
        );
        console.log('SUCCESS!', response.status, response.text);
        return true;
    } catch (error) {
        console.log('FAILED...', error);
        return false;
    }
};