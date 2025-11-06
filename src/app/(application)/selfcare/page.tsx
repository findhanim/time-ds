// Icons
import 'material-icons/iconfont/material-icons.css'
import WifiIcon from '@mui/icons-material/Wifi'
// Components
import { Alert } from '../../components/Alert'
import { TextField } from '../../components/TextField'

const accountData = [
  {
    labelText: 'Your Account',
    inputText: '74738530102012',
  },
  {
    labelText: 'Internet Plan',
    inputText: 'Time Fibre Home 600mbps - RM139/month',
  },
  {
    labelText: 'Contract Period',
    inputText: '11 Oct 2024 - 11 Oct 2026 (24 months)',
  },
  {
    labelText: 'Device(s) on Instalment Payment Plan',
    inputText: '1x WiFi 7 Mesh HX00000123 (17/24 months)',
  },
  {
    labelText: 'FTTR on Instalment Payment Plan',
    inputText: 'FTTR 1 Parent + 1 node (21/24 months)',
  },
  {
    labelText: 'Voice Plan',
    inputText: '03 55667788 - Time Voice Basic',
  },
]

const reasonData = [
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
    <div className="min-h-screen bg-neutralVariant-10">
      {/* Navigation bar */}
      <div className="z-100 fixed hidden md:block top-0 w-full bg-neutral-0 border-b-1 border-neutralVariant-20 p-spacing-16">
        navbar
      </div>

      {/* Sidebar */}
      <div className="fixed hidden md:block top-14 w-[280px] min-h-screen bg-neutral-0">
        sidebar
      </div>

      <div className="grid grid-cols-12 md:pt-[60px]">
        {/* Content Section */}
        <div className="col-span-12 md:col-start-3 mx-spacing-16 md:px-spacing-120 py-spacing-40">
          {/* Site map */}
          <div className="flex">
            <u className="font-label-sm mb-spacing-12 mr-spacing-4 text-lightBlue-80">
              Manage Plan
            </u>
            <p className="font-label-sm mb-spacing-12">/ Terminate Service</p>
          </div>

          {/* Header */}
          <p className="font-SOT font-headline-lg mb-spacing-40">
            Terminate Service
          </p>

          {/* Title */}
          <div className="flex">
            <WifiIcon className="mr-spacing-12" />
            <p className="font-title-md mb-spacing-12">Your Account Details</p>
          </div>
          {/* Container */}
          <div className="bg-neutral-0 rounded-24 p-spacing-16 md:p-spacing-24">
            {/* Info fields */}
            <div className="grid md:grid-cols-2 md:gap-x-spacing-16">
              {accountData.map((data, index) => (
                <div key={index} className="mb-spacing-24">
                  <span className="font-label-sm text-neutral-70 mb-spacing-4">
                    {data.labelText}
                  </span>
                  <br />
                  <span className="font-body-md">{data.inputText}</span>
                </div>
              ))}
            </div>

            {/* Reason fields */}
            <div className="grid md:grid-cols-2 md:gap-x-spacing-16">
              {reasonData.map((data, index) => (
                <TextField
                  key={index}
                  variant="outlined"
                  margin={24}
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
          <div className="mt-spacing-24">
            <Alert
              variant="info"
              title="Important Note"
              message="It appears this ID is already registered but not yet active. 
        An activation email will be sent to the customer."
              // actionText="Action"
            />
          </div>

          {/* Footer */}
          <div className="flex justify-between mt-spacing-32">
            <button className="button-outlined button-md w-25">Back</button>
            <button className="button-filled button-md w-50">Next</button>
          </div>
        </div>
      </div>
    </div>
  )
}
