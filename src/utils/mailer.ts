import emailjs from "@emailjs/browser";
const sendMail = (email: string) => {
  const mailServiceKey = "service_0e4sxop";
  const templateKey = "template_kakfdgh";
  const publicKey = "L36M0C8GcRtJFUMRO";
  const templatePrams = {
    email: email,
    to_email: import.meta.env.EMAIL_TO,
  };
  return emailjs.send(mailServiceKey, templateKey, templatePrams, publicKey);
};
export default sendMail;
