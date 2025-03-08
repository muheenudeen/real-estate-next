import PropertyForm from "@/components/property/propertyForm";

export default function FirstPage() {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Add New Property</h1>
      <p className="text-gray-600 mb-6">
        Here you can add a new property by including details like location, images, amenities, expected price, status, etc.
      </p>
      <PropertyForm />
    </div>
  );
}
