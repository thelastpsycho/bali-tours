'use client'

import { useState } from 'react'
import Button from '@/components/shared/Button'
import { CheckCircle, ChevronLeft, ChevronRight } from 'lucide-react'

interface Step {
  id: string
  title: string
  description: string
}

interface BookingWizardProps {
  steps: Step[]
  children: React.ReactNode
  onSubmit?: () => void
}

export default function BookingWizard({ steps, children, onSubmit }: BookingWizardProps) {
  const [currentStep, setCurrentStep] = useState(0)
  const [completedSteps, setCompletedSteps] = useState<number[]>([])

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCompletedSteps([...completedSteps, currentStep])
      setCurrentStep(currentStep + 1)
    } else if (onSubmit) {
      onSubmit()
    }
  }

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
    }
  }

  const goToStep = (stepIndex: number) => {
    if (stepIndex <= currentStep || completedSteps.includes(stepIndex - 1)) {
      setCurrentStep(stepIndex)
    }
  }

  const isStepCompleted = (stepIndex: number) => completedSteps.includes(stepIndex)
  const isStepActive = (stepIndex: number) => stepIndex === currentStep

  return (
    <div className="max-w-4xl mx-auto">
      {/* Step Progress */}
      <div className="mb-8">
        <div className="flex items-center justify-between">
          {steps.map((step, index) => (
            <div key={step.id} className="flex items-center">
              <button
                onClick={() => goToStep(index)}
                className={`flex items-center justify-center w-10 h-10 rounded-full border-2 transition-all duration-200 ${
                  isStepCompleted(index)
                    ? 'bg-tours-primary-600 border-tours-primary-600 text-white'
                    : isStepActive(index)
                    ? 'border-tours-primary-600 text-tours-primary-600'
                    : 'border-neutral-300 text-neutral-500'
                }`}
                disabled={!isStepActive(index) && !isStepCompleted(index)}
              >
                {isStepCompleted(index) ? (
                  <CheckCircle className="h-5 w-5" />
                ) : (
                  <span className="font-semibold">{index + 1}</span>
                )}
              </button>
              {index < steps.length - 1 && (
                <div
                  className={`w-16 h-0.5 mx-2 ${
                    isStepCompleted(index) ? 'bg-tours-primary-600' : 'bg-neutral-300'
                  }`}
                />
              )}
            </div>
          ))}
        </div>
        <div className="flex justify-between mt-3">
          {steps.map((step, index) => (
            <div key={step.id} className="flex-1 text-center" style={{ maxWidth: '120px' }}>
              <div
                className={`text-sm font-medium ${
                  isStepActive(index) ? 'text-tours-primary-600' : 'text-neutral-500'
                }`}
              >
                {step.title}
              </div>
              <div className="text-xs text-neutral-400 mt-1">{step.description}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Step Content */}
      <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
        {Array.isArray(children) ? children[currentStep] : children}
      </div>

      {/* Navigation */}
      <div className="flex justify-between">
        <Button
          variant="outline"
          onClick={handlePrevious}
          disabled={currentStep === 0}
        >
          <ChevronLeft className="h-4 w-4 mr-2" />
          Previous
        </Button>

        <div className="text-sm text-neutral-600">
          Step {currentStep + 1} of {steps.length}
        </div>

        <Button
          variant="primary"
          onClick={handleNext}
        >
          {currentStep === steps.length - 1 ? 'Complete Booking' : 'Next'}
          {currentStep < steps.length - 1 && <ChevronRight className="h-4 w-4 ml-2" />}
        </Button>
      </div>
    </div>
  )
}