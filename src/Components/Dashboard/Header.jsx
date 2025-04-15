"use client";
import { ArrowBigLeft } from "lucide-react";
import { useRouter } from "next/navigation";

const DashboardHeader = ({ title }) => {
  const router = useRouter();

  const handleBack = (event) => {
    event.preventDefault();
    router.back();
  };

  return (
    <div className="flex justify-between items-center mb-4">
      <button
        className="text-color-primary cursor-pointer"
        onClick={handleBack}
      >
        <ArrowBigLeft size={32} />
      </button>
      <h3 className="text-2xl text-color-primary font-bold">{title}</h3>
    </div>
  );
};
export default DashboardHeader;
