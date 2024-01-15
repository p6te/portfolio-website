interface ContactFormEmailProps {
  name: string;
  email: string;
  message: string;
}

const ContactNotification: React.FC<Readonly<ContactFormEmailProps>> = ({
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
        <h3 className="font-semibold">name: {name}</h3>
        <h3 className="font-semibold">Send from emial: {email}</h3>

        <br />
        <span>Message:</span>
        <p className="font-extralight">{message}</p>
      </div>
    </div>
  </div>
);

export default ContactNotification;
