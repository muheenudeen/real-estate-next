import PropertyListings from "@/components/property/propertyListing";

export default function Home() {
  return (
    <main className="min-h-screen p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <PropertyListings/>
      </div>
    </main>
  )
}

