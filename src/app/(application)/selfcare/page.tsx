// Icons
import 'material-icons/iconfont/material-icons.css'
// Components
import { Alert } from '../../components/Alert'
import { TextField } from '../../components/TextField'

const personalInfoData = [
  {
    labelText: 'Reason of Termination',
    inputText: 'Network issues',
    trailingIcon: true,
  },
  {
    labelText: 'Details',
    inputText: 'Slow connection',
    trailingIcon: true,
  },
  {
    labelText: 'Date of Termination',
    inputText: 'Select a date',
    leadingIcon: true,
    infoIcon: true,
  },
]

export default function TestPage() {
  return (
    <div className="min-h-screen bg-neutralVariant-10 p-5">
      {/* Header */}
      <h3 className="font-SOT font-headline-lg mb-spacing-40">
        Terminate Service
      </h3>

      {/* Info container */}
      <div className="bg-neutral-0 p-spacing-24 rounded-24 mb-spacing-24">
        {/* Info fields */}
        <div className="grid grid-cols-2">
          {personalInfoData.map((data, index) => (
            <TextField
              key={index}
              variant="outlined"
              labelText={data.labelText}
              inputText={data.inputText}
              // supportingText={data.supportingText}
              trailingIcon={data.trailingIcon}
              leadingIcon={data.leadingIcon}
              infoIcon={data.infoIcon}
            />
          ))}
        </div>
      </div>

      {/* Alert banner */}
      <Alert
        variant="info"
        title="Important Note"
        message="It appears this ID is already registered but not yet active. An activation email will be sent to the customer."
        // actionText="Action"
      />

      {/* Footer */}
      <div className="flex justify-between mt-[32px]">
        <button className="button-outlined button-md w-25">Back</button>
        <button className="button-filled button-md w-50">Next</button>
      </div>
    </div>
  )
}
