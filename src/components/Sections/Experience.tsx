import React from "react";
import SectionLayout from "./SectionLayout";

export default function Experience({
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <SectionLayout title="Experience" {...props}>
      <div className="h-screen border border-black text-black">section</div>
    </SectionLayout>
  );
}
