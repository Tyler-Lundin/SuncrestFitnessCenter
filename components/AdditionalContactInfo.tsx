import CONTACT from "../configs/contact.config";

const { address, phone, email, fax } = CONTACT;

export default function AdditionalContactInfo() {

  return (
    <div className="mx-auto max-w-4xl p-8 bg-base-100 rounded-lg md:border-4 md:border-black">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex flex-col justify-center items-center">
          <h2 className="text-xl font-bold">Address</h2>
          <p className="text-lg">{address.street}</p>
          <p className="text-lg">{address.city}, {address.state} {address.zip}</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <h2 className="text-xl font-bold">Phone</h2>
          <p className="text-lg">{phone}</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <h2 className="text-xl font-bold">Email</h2>
          <p className="text-lg">
            <a href="mailto:manager@samplefitnesscenter.com">{email}</a>
          </p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <h2 className="text-xl font-bold">Fax</h2>
          <p className="text-lg">{fax}</p>
        </div>
      </div>
    </div>

  )
}
