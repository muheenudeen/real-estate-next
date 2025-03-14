"use client"

import { useState } from "react"
import BasicInfo from "./propertyBasic"
import LocationInfo from "./propertyLocation"
import MediaUpload from "./media-uploads"
import PropertyDetails from "./propertyDetails"
import StepIndicator from "./stepIndicator"
import { useRouter } from "next/navigation"
import { useAddProperty } from "@/hooks/useProperty"
import Sidebar from "@/app/sidebar/page"

export default function AddPropertyForm() {
  const router = useRouter()
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: "",
    bedrooms: "",
    bathrooms: "",
    image: "",
    ownershipStatus: "Single",
    availabilityStatus: "Ready to move",
    ageOfProperty: "0-1",
    preferredTo: "Anyone",
    balconies: "0",
    furnishingStatus: "Unfurnished",
    powerBackup: "None",
    roadAccessibility: "Light vehicle",
    totalFloors: "",
    floorNo: "",
    propertyFacing: "",
    reservedParking: false,
    openParking: false,
    coveredParking: false,
    waterSource: [],
    location: {
      state: "",
      district: "",
      city: "",
      locality: "",
      zipCode: "",
      landmark: "",
      fullAddress: "",
    },
  })

  const { mutate: addProperty, isPending } = useAddProperty()

  const updateFormData = (data) => {
    setFormData((prev) => ({ ...prev, ...data }))
  }

  const handleNext = () => {
    setCurrentStep((prev) => Math.min(prev + 1, 4))
  }

  const handlePrevious = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1))
  }

  const handleSubmit = () => {
    const userId = localStorage.getItem("id")
    const completeData = {
      ...formData,
      userId,
    }

    addProperty(completeData, {
      onSuccess: () => {
        router.push("/myProperty")
      },
    })
  }

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 bg-white rounded-lg shadow-sm p-6 ml-64">
        <div className="mb-8">
          <h1 className="text-2xl font-semibold text-gray-800">Add new property</h1>
          <p className="text-gray-600 mt-2">
            Here you can add a new property by including details like location, images of the property, amenities,
            expected price, status of the property, etc.
          </p>
        </div>

        <StepIndicator currentStep={currentStep} />

        <div className="mt-8">
          {currentStep === 1 && <BasicInfo formData={formData} updateFormData={updateFormData} onNext={handleNext} />}
          {currentStep === 2 && (
            <LocationInfo
              formData={formData}
              updateFormData={updateFormData}
              onNext={handleNext}
              onPrevious={handlePrevious}
            />
          )}
          {currentStep === 3 && (
            <MediaUpload
              formData={formData}
              updateFormData={updateFormData}
              onNext={handleNext}
              onPrevious={handlePrevious}
            />
          )}
          {currentStep === 4 && (
            <PropertyDetails
              formData={formData}
              updateFormData={updateFormData}
              onPrevious={handlePrevious}
              onSubmit={handleSubmit}
              isSubmitting={isPending}
            />
          )}
        </div>
      </div>
    </div>
  )
}
