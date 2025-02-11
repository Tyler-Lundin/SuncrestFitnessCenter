import CONTACT from "../configs/contact.config";
import { Bebas_Neue } from "next/font/google";

const bebasNeue = Bebas_Neue({
  weight: ["400"],
  subsets: ["latin"],
});

const { address, phone, email, fax } = CONTACT;

const ContactItem = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => (
  <div className="flex flex-row justify-between items-center p-1 bg-white rounded-lg border-b border-black">
    <h2 style={bebasNeue.style} className="text-2xl font-bold">
      {title}
    </h2>
    <p className="text-sm text-right">{children}</p>
  </div>
);

export default function AdditionalContactInfo() {
  return (
    <div className="p-2 mx-auto w-full max-w-4xl bg-red-500 rounded-lg md:rounded-lg md:border md:border-black">
      <h1 style={bebasNeue.style} className="mb-2 border-b border-black">
        Reach out to us
      </h1>
      <div className="grid gap-2">
        <ContactItem title="Address">
          <>{address.street}</>
          <br />
          <>
            {address.city}, {address.state} {address.zip}
          </>
        </ContactItem>
        <ContactItem title="Phone">{phone}</ContactItem>
        <ContactItem title="Email">
          <a href={`mailto:${email}`}>{email}</a>
        </ContactItem>
        <ContactItem title="Fax">{fax}</ContactItem>
      </div>
    </div>
  );
}
