import PropertyForm from "@/components/property/propertyForm";

export default function firstPage() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Add Property Details</h1>
      <PropertyForm />
    </div>
  );
}