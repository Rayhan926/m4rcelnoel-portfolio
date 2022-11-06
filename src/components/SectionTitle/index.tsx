import React from "react";

const SectionTitle = ({ title }: { title: string }) => {
  return (
    <div className="flex items-center gap-5">
      <h3 className="shrink-0 text-lg lg:text-[23px] uppercase tracking-[3px] text-[#B1B1B1]">
        {title}
      </h3>
      <div className="grow h-px bg-[#707070]"></div>
    </div>
  );
};

export default SectionTitle;
