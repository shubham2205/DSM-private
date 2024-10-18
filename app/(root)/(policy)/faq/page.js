import React from "react";
import { getData } from "../../../../lib/actions/universel.actions";
import FaqPage from "../../../../Components/FaqPage";

const Faq = async () => {
  const data = await getData(`${process.env.NEXT_PUBLIC_API}/v3/faqs`);
  return (
    <>
      <FaqPage faqData={data} />
    </>
  );
};

export default Faq;
