import React from "react";

interface Props {
  name: string;
}
function SkillTag({ name }: Props) {
  return (
    <div className="rounded-full border px-2 py-1 text-sm md:text-base">
      {name}
    </div>
  );
}

export default SkillTag;
