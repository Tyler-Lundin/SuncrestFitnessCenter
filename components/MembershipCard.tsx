"use client";
import type { IMembership } from "../configs/memberships.config";
import { BsFillCheckCircleFill } from "react-icons/bs";

export default function MembershipCard({
  membership,
}: {
  membership: IMembership;
}) {
  return (
    <div className="grid p-4 mx-auto mb-8 w-full max-w-sm text-black rounded-2xl border-2 border-black shadow-lg dark:shadow-none bg-white/95">
      <h5 className="text-2xl font-light"> {membership.name} plan</h5>
      <h3 className="text-3xl font-bold">
        {" "}
        ${membership.pricePerMember} <span className="text-lg"> /month </span>{" "}
      </h3>
      <small className="mt-2 mb-4 font-light text-black">
        {membership.desc}
      </small>
      <ul className="grid gap-2 h-max">
        {membership.benefits.map((benefit, index) => (
          <li
            key={index + benefit}
            className={`${benefit === "VOID" ? "invisible" : "visible"} flex gap-1 items-center`}
          >
            <BsFillCheckCircleFill className="text-green-600" />
            {benefit}
          </li>
        ))}
      </ul>
    </div>
  );
}
