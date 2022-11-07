import SectionTitle from "@components/SectionTitle";
import { faqs } from "@config/constants";
import React, { useState } from "react";
import Collapsible from "react-collapsible";

const FaqSection = () => {
  const [activeFaqIndex, setActiveFaqIndex] = useState<null | number>(null);
  return (
    <section className="mt-10 lg:mt-[200px] scroll-mt-20" id="faq">
      <div className="container-md">
        <SectionTitle title="ERKLÄRUNGSBEDARF ?" />
        <h2 className="text-[30px] lg:text-[85px] font-black text-black">
          FAQ
        </h2>

        <div className="mt-5 lg:mt-20">
          {faqs.map((faq, i) => (
            <div key={i} className="border-t border-[#707070]">
              <div
                onClick={() =>
                  setActiveFaqIndex((prev) => (prev === i ? null : i))
                }
                className="py-4 lg:py-9 text-sm lg:text-[32px] cursor-pointer"
              >
                {faq.question}
              </div>

              <Collapsible
                transitionTime={200}
                trigger={""}
                open={i === activeFaqIndex}
              >
                <div className="text-xs lg:text-base pb-6 text-[#707070]">
                  {faq.answer}
                </div>
              </Collapsible>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
