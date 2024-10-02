import React from "react";
import IconicHighlight from "../../common/iconicHighlight";

export default function BulletPointsSection() {
  return (
    <div className="flex h-fit flex-col items-center justify-around gap-10 py-10 text-center md:flex-row">
      <IconicHighlight
        image="/images/face-scan-circle-svgrepo.svg"
        title="AI-powered image search"
        details="Quickly find people using AI image recognition."
      />
      <IconicHighlight
        image="/images/search-icon.svg"
        title="Multi-criteria search"
        details="Search by name or national ID for precise results."
      />
      <IconicHighlight
        image="/images/update-svgrepo-com.svg"
        title="Status updates"
        details="Mark individuals as missing, found, or edit their information easily."
      />
    </div>
  );
}
