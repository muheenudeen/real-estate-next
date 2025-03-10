export default function StepIndicator({ currentStep }) {
    const steps = [
      { id: 1, name: "Basic" },
      { id: 2, name: "Location" },
      { id: 3, name: "Media" },
      { id: 4, name: "Detail" },
    ]
  
    return (
      <div className="flex justify-between items-center">
        {steps.map((step) => (
          <div
            key={step.id}
            className={`step-item ${currentStep === step.id ? "active" : ""} ${currentStep > step.id ? "complete" : ""}`}
          >
            <div className={`step ${currentStep === step.id ? "active" : ""} ${currentStep > step.id ? "complete" : ""}`}>
              {currentStep > step.id ? (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
              ) : (
                step.id
              )}
            </div>
            <p className="step-text text-sm mt-2">
              {step.id}. {step.name}
            </p>
          </div>
        ))}
      </div>
    )
  }
  
  