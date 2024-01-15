interface ContactFormEmailProps {
  name: string;
  email: string;
  message: string;
}

const ContactFormEmail: React.FC<Readonly<ContactFormEmailProps>> = ({
  name,
  email,
  message,
}) => (
  <div className="flex w-full flex-col items-center justify-center">
    <header className="bg-gradient-primary bg-clip-text p-3 text-xl font-semibold text-transparent">
      Welcome from peter-dev.site
    </header>
    <div>
      <div className="my-10 rounded-3xl border p-10">
        <h5>Dear {name}</h5>
        <p>
          Thank you for reaching out through the contact form on my website. I
          appreciate your interest and am excited about the possibility of
          working together.
        </p>
        <br />
        <span>Yours message:</span>
        <p className="font-extralight">{message}</p>
        <p>
          I will do my best to respond as soon as possible, and I believe this
          could be a great opportunity for collaboration.
        </p>

        <span className="mt-6">
          If you would like to contact me directly, please send your next
          message to the email: <strong>piotr.matlak.contact@gmail.com</strong>
        </span>
      </div>
      <br />
      <footer className="ml-10">
        <span>Best regards,</span>
        <br />
        <span> Piotr Matlak</span>
      </footer>
    </div>
  </div>
);

export default ContactFormEmail;
