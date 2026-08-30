'use server'

import {Resend} from 'resend'

// initialising resend with the private key
const resend = new Resend(process.env.RESEND_API_KEY);


export async function sendContactEmail(formData: FormData){
    const name = formData.get('fullname') as string;
    const companyname = formData.get('CompanyName') as string;
    const senderEmail = formData.get('email') as string;
    const phone = formData.get('phone') as string;
    const about = formData.get('choices') as string;
    const message = formData.get('message') as string;

    console.log(formData)

    if (!name || !senderEmail || !phone || !about || !message){
        return {
            success: false,
            error: "Please fill in all fields."
        };
    }
    try {
        const {error} = await resend.emails.send(
            {
                from: "Contact Form <technicals@theloniousmining.com>",
                to: [process.env.CONTACT_RECEIVER_EMAIL as string],
                subject: `New Message from ${name}`,
                replyTo: senderEmail,
                html: 
                `
                <p><Strong>${name}</strong></p>
                <p><Strong>${senderEmail}</strong></p>
                <p><Strong>${companyname}</strong></p>
                <p>${about}</p>
                <p>${message}</p>
                <p>${phone}</p>
                `
            }
        );
        if (error) {
            return {success: false, error: "Failed to send message"}
        }
        return {
            success: true
        };
    }catch (error) {
        console.log(error);
        return {success: false, error: 'Failed to send email.'};
    }
}
