import React from "react";

interface Props {
  name: string;
}
function SkillTag({ name }: Props) {
  return <div className="rounded-full border px-3 py-1">{name}</div>;
}

export default SkillTag;
