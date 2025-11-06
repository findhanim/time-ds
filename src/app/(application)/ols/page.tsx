// Icons
import 'material-icons/iconfont/material-icons.css'
import PersonIcon from '@mui/icons-material/PersonOutlined'
// Components
import { Alert } from '../../components/Alert'
import { TextField } from '../../components/TextField'

const reasonData = [
  {
    labelText: 'Select ID type',
    inputText: 'MyKad',
    trailingIcon: true,
  },
  {
    labelText: 'Title (Optional)',
    inputText: 'Dato',
    trailingIcon: true,
  },
  {
    labelText: 'Full name',
    inputText: 'John Doe',
    supportingText: 'Enter your name as per in your NRIC',
  },
  {
    labelText: 'ID number',
    inputText: '880818-08-5660',
  },
  {
    state: 'disabled',
    labelText: 'Email',
    inputText: 'john@email.com',
    trailingIcon: true,
    supportingText:
      'Time ID is your Selfcare login to manage your internet. For new customers, this email becomes your Time ID. For returning customers, use it to verify your Time ID',
  },
]

export default function TestPage() {
  return (
    <div className="min-h-screen bg-neutralVariant-10">
      {/* Navigation bar */}
      <div className="z-100 fixed hidden md:block top-0 w-full bg-neutral-0 border-b-1 border-neutralVariant-20 p-spacing-16">
        navbar
      </div>

      <div className="md:pt-[60px] mx-spacing-16 md:px-spacing-120 py-spacing-120 ">
        {/* Header */}
        <p className="font-SOT font-headline-lg my-spacing-40">
          Let's Get Personal
        </p>

        {/* Title */}
        <div className="flex">
          <PersonIcon className="mr-spacing-12" />
          <p className="font-title-md mb-spacing-12">Your ID</p>
        </div>

        {/* Content Section */}
        <div className="grid md:grid-cols-8 gap-spacing-24">
          <div className="col-span-6">
            {/* Container */}
            <div className=" bg-neutral-0 p-spacing-16 md:p-spacing-24 rounded-24 mb-spacing-24">
              {/* Alert banner */}
              <div className="mb-spacing-24">
                <Alert
                  variant="warning"
                  title="Time ID not activated"
                  message="Looks like you already have an account! Click below to activate your Time ID, then continue sign up."
                  //   actionText="Activate now"
                />
              </div>

              {/* Nationality */}
              <div className="font-label-sm text-neutral-70 mb-spacing-4">
                Nationality
              </div>
              <div className="flex gap-spacing-8">
                <div className="w-50 border-[3px] bg-pink-10 border-pink-50 rounded-12 p-spacing-16 text-center">
                  Malaysian
                </div>
                <div className="w-50 border-[1.5px] rounded-12 p-spacing-16 text-center">
                  Non-Malaysian
                </div>
              </div>

              {/* Info fields */}
              {reasonData.map((data, index) => (
                <TextField
                  key={index}
                  variant="outlined"
                  margin={24}
                  state={data.state}
                  labelText={data.labelText}
                  inputText={data.inputText}
                  supportingText={data.supportingText}
                  trailingIcon={data.trailingIcon}
                  //  leadingIcon={data.leadingIcon}
                  //  infoIcon={data.infoIcon}
                />
              ))}
            </div>

            {/* Footer buttons */}
            <div className="flex justify-between mt-[32px]">
              <button className="button-outlined button-md w-25">Back</button>
              <button className="button-filled button-md w-50">Next</button>
            </div>
          </div>

          {/* Sidebar */}
          <div className="hidden md:block col-span-2 bg-neutral-0 p-spacing-16 md:p-spacing-24 rounded-24 mb-spacing-24">
            sidebar
          </div>
        </div>
      </div>
    </div>
  )
}
