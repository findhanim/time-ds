// Icons
import 'material-icons/iconfont/material-icons.css'
// Components
import { Alert } from '../../components/Alert'
import { AppBar } from '../../components/AppBar'
import { TextField } from '../../components/TextField'

const personalInfoData = [
  {
    labelText: 'ID Type',
    inputText: 'MyKad',
    trailingIcon: true,
  },
  {
    labelText: 'Title',
    inputText: 'Dato',
    trailingIcon: true,
  },
  {
    labelText: 'Full Name',
    inputText: 'Jonathan Edward Doe',
    supportingText: 'Enter your name as per your NRIC',
  },
  {
    labelText: 'MyKad Number',
    inputText: '880818-08-5566',
  },
  {
    labelText: 'Email',
    inputText: 'johndoe@gmail.com',
    supportingText:
      'Your Time ID is your Selfcare login to manage your Internet. New customers will use this email as their Time ID. Returning customers can use it to verify their account.',
  },
]

export default function TestPage() {
  return (
    <div className="min-h-screen bg-neutral-0 p-5">
      {/* Top bar */}
      <AppBar
        headlineSize="medium"
        leadingIcon={true}
        trailingIcon={true}
        headlineText="Medium Headline"
        supportingText="Supporting text"
      />
      {/* Alert banner */}
      <Alert
        variant="warning"
        title="Time ID not activated"
        message="It appears this ID is already registered but not yet active. An activation email will be sent to the customer."
        // actionText="Action"
      />

      {/* Info fields */}
      {personalInfoData.map((data, index) => (
        <TextField
          key={index}
          variant="filled"
          labelText={data.labelText}
          inputText={data.inputText}
          supportingText={data.supportingText}
          trailingIcon={data.trailingIcon}
          // leadingIcon={field.leadingIcon}
          // infoIcon={field.infoIcon}
        />
      ))}

      {/* Footer */}
      <button className="button-filled button-md w-full mt-[32px]">Next</button>
    </div>
  )
}
