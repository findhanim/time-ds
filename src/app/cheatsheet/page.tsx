// Icons
import 'material-icons/iconfont/material-icons.css'
// Components
import { Alert } from '../components/Alert'
import { AppBar } from '../components/AppBar'
import { TextField } from '../components/TextField'

export default function TestPage() {
  return (
    <div className="min-h-screen bg-neutralVariant-0 p-5">
      <hr />
      {/* Typography */}
      <div className="my-8">
        <span className="flex font-SOT font-headline-md my-8">Typography</span>
        {/* Font - Work Sans */}
        <div className="mt-5">
          <h3 className="text-xl font-bold my-5 text-pink-80">Work Sans</h3>
          {/* Font Style - Display */}
          {/* Large */}
          <div className="bg-content flex-col">
            <h3 className="font-bold font-display-lg">Display Large</h3>
            <h3 className="col-span-2 text-sm">
              Font size: 56px • Line height: 64px
            </h3>
          </div>
          {/* Medium */}
          <div className="bg-content flex-col">
            <h3 className="font-bold font-display-md">Display Medium</h3>
            <h3 className="col-span-2 text-sm">
              Font size: 44px • Line height: 52px
            </h3>
          </div>
          {/* Small */}
          <div className="bg-content flex-col">
            <h3 className="font-bold font-display-sm">Display Small</h3>
            <h3 className="col-span-2 text-sm">
              Font size: 36px • Line height: 44px
            </h3>
          </div>
          {/* Font Style - Headline */}
          {/* Large */}
          <div className="bg-content flex-col">
            <h3 className="font-bold font-headline-lg">Headline Large</h3>
            <h3 className="col-span-2 text-sm">
              Font size: 32px • Line height: 40px
            </h3>
          </div>
          {/* Medium */}
          <div className="bg-content flex-col">
            <h3 className="font-bold font-headline-md">Headline Medium</h3>
            <h3 className="col-span-2 text-sm">
              Font size: 28px • Line height: 36px
            </h3>
          </div>
          {/* Small */}
          <div className="bg-content flex-col">
            <h3 className="font-bold font-headline-sm">Headline Small</h3>
            <h3 className="col-span-2 text-sm">
              Font size: 24px • Line height: 32px
            </h3>
          </div>
          {/* Font Style - Title */}
          {/* Large */}
          <div className="bg-content flex-col">
            <h3 className="font-bold font-title-lg">Title Large</h3>
            <h3 className="col-span-2 text-sm">
              Font size: 22px • Line height: 28px
            </h3>
          </div>
          {/* Medium */}
          <div className="bg-content flex-col">
            <h3 className="font-bold font-title-md">Title Medium</h3>
            <h3 className="col-span-2 text-sm">
              Font size: 18px • Line height: 24px
            </h3>
          </div>
          {/* Small */}
          <div className="bg-content flex-col">
            <h3 className="font-bold font-title-sm">Title Small</h3>
            <h3 className="col-span-2 text-sm">
              Font size: 14px • Line height: 20px
            </h3>
          </div>
          {/* Font Style - Body & Label */}
          {/* Large */}
          <div className="bg-content flex-col">
            <div className="flex gap-8">
              <span className="font-body-lg">Body Large</span>
              <span className="font-label-lg">Label Large</span>
              <span className="font-label-lg prominent">
                Label Large (Prominent)
              </span>
            </div>
            <span className="text-sm">Font size: 18px • Line height: 28px</span>
          </div>
          {/* Medium */}
          <div className="bg-content flex-col">
            <div className="flex gap-8">
              <span className="font-body-md">Body Medium</span>
              <span className="font-label-md">Label Medium</span>
              <span className="font-label-md prominent">
                Label Medium (Prominent)
              </span>
            </div>
            <span className="text-sm">Font size: 16px • Line height: 24px</span>
          </div>
          {/* Small */}
          <div className="bg-content flex-col">
            <div className="flex gap-8">
              <span className="font-body-sm">Body Small</span>
              <span className="font-label-sm">Label Small</span>
              <span className="font-label-sm prominent">
                Label Small (Prominent)
              </span>
            </div>
            <span className="text-sm">Font size: 14px • Line height: 20px</span>
          </div>
          {/* XSmall */}
          <div className="bg-content flex-col">
            <div className="flex gap-8">
              <span className="font-body-xs">Body XSmall</span>
              <span className="font-label-xs">Label XSmall</span>
              <span className="font-label-xs prominent">
                Label XSmall (Prominent)
              </span>
            </div>
            <span className="text-sm">Font size: 12px • Line height: 16px</span>
          </div>
        </div>
        {/* Font - Sans Of Time */}
        <div className="mt-8">
          <h3 className="text-xl font-bold my-5 text-pink-80">Sans Of Time</h3>
          {/* Font Style - SOT Display */}
          {/* Large */}
          <div className="bg-content flex-col">
            <h3 className="font-SOT font-display-lg">SOT Display Large</h3>
            <h3 className="col-span-2 text-sm">
              Font size: 56px • Line height: 64px
            </h3>
          </div>
          {/* Medium */}
          <div className="bg-content flex-col">
            <h3 className="font-SOT font-display-md">SOT Display Medium</h3>
            <h3 className="col-span-2 text-sm">
              Font size: 44px • Line height: 52px
            </h3>
          </div>
          {/* Small */}
          <div className="bg-content flex-col">
            <h3 className="font-SOT font-display-sm">SOT Display Small</h3>
            <h3 className="col-span-2 text-sm">
              Font size: 36px • Line height: 44px
            </h3>
          </div>
          {/* Font Style - SOT Headline */}
          {/* Large */}
          <div className="bg-content flex-col">
            <h3 className="font-SOT font-headline-lg">SOT Headline Large</h3>
            <h3 className="col-span-2 text-sm">
              Font size: 32px • Line height: 40px
            </h3>
          </div>
          {/* Medium */}
          <div className="bg-content flex-col">
            <h3 className="font-SOT font-headline-md">SOT Headline Medium</h3>
            <h3 className="col-span-2 text-sm">
              Font size: 28px • Line height: 36px
            </h3>
          </div>
          {/* Small */}
          <div className="bg-content flex-col">
            <h3 className="font-SOT font-headline-sm">SOT Headline Small</h3>
            <h3 className="col-span-2 text-sm">
              Font size: 24px • Line height: 32px
            </h3>
          </div>
          {/* Font Style - SOT Title */}
          {/* Large */}
          <div className="bg-content flex-col">
            <h3 className="font-SOT font-title-lg">SOT Title Large</h3>
            <h3 className="col-span-2 text-sm">
              Font size: 22px • Line height: 28px
            </h3>
          </div>
          {/* Medium */}
          <div className="bg-content flex-col">
            <h3 className="font-SOT font-title-md">SOT Title Medium</h3>
            <h3 className="col-span-2 text-sm">
              Font size: 16px • Line height: 24px
            </h3>
          </div>
          {/* Small */}
          <div className="bg-content flex-col">
            <h3 className="font-SOT font-title-sm">SOT Title Small</h3>
            <h3 className="col-span-2 text-sm">
              Font size: 14px • Line height: 20px
            </h3>
          </div>
        </div>
      </div>
      <hr />
      {/* Colors */}
      <div className="my-8">
        <span className="flex font-SOT font-headline-md my-8">Colors</span>
        {/* Neutral */}
        <div className="grid grid-cols-13 my-5">
          <h5 className="col-span-2 py-4 text-sm">Neutral</h5>
          <div className="box-palette bg-neutral-0 border-1 border-neutral-10">
            0
          </div>
          <div className="box-palette bg-neutral-10">10</div>
          <div className="box-palette bg-neutral-20">20</div>
          <div className="box-palette bg-neutral-30">30</div>
          <div className="box-palette bg-neutral-40">40</div>
          <div className="box-palette bg-neutral-50">50</div>
          <div className="box-palette bg-neutral-60">60</div>
          <div className="box-palette bg-neutral-70">70</div>
          <div className="box-palette bg-neutral-80">80</div>
          <div className="box-palette bg-neutral-90">90</div>
          <div className="box-palette bg-neutral-100">100</div>
        </div>
        {/* Neutral Variant */}
        <div className="grid grid-cols-13 my-5">
          <h5 className="col-span-3 py-4 text-sm">Neutral Variant</h5>
          <div className="box-palette bg-neutralVariant-10">10</div>
          <div className="box-palette bg-neutralVariant-20">20</div>
          <div className="box-palette bg-neutralVariant-40">40</div>
          <div className="box-palette bg-neutralVariant-80">80</div>
          <div className="box-palette bg-neutralVariant-90">90</div>
        </div>
        {/* Pink */}
        <div className="grid grid-cols-13 my-5">
          <h5 className="col-span-3 py-4 text-sm">Pink</h5>
          <div className="box-palette bg-pink-10">10</div>
          <div className="box-palette bg-pink-20">20</div>
          <div className="box-palette bg-pink-30">30</div>
          <div className="box-palette bg-pink-40">40</div>
          <div className="box-palette bg-pink-50">50</div>
          <div className="box-palette bg-pink-60">60</div>
          <div className="box-palette bg-pink-70">70</div>
          <div className="box-palette bg-pink-80">80</div>
          <div className="box-palette bg-pink-90">90</div>
        </div>
        {/* Purple */}
        <div className="grid grid-cols-13 my-5">
          <h5 className="col-span-3 py-4 text-sm">Purple</h5>
          <div className="box-palette bg-purple-10">10</div>
          <div className="box-palette bg-purple-20">20</div>
          <div className="box-palette bg-purple-30">30</div>
          <div className="box-palette bg-purple-40">40</div>
          <div className="box-palette bg-purple-50">50</div>
          <div className="box-palette bg-purple-60">60</div>
          <div className="box-palette bg-purple-70">70</div>
          <div className="box-palette bg-purple-80">80</div>
          <div className="box-palette bg-purple-90">90</div>
        </div>
        {/* Light Blue */}
        <div className="grid grid-cols-13 my-5">
          <h5 className="col-span-3 py-4 text-sm">Light Blue</h5>
          <div className="box-palette bg-lightBlue-10">10</div>
          <div className="box-palette bg-lightBlue-20">20</div>
          <div className="box-palette bg-lightBlue-30">30</div>
          <div className="box-palette bg-lightBlue-40">40</div>
          <div className="box-palette bg-lightBlue-50">50</div>
          <div className="box-palette bg-lightBlue-60">60</div>
          <div className="box-palette bg-lightBlue-70">70</div>
          <div className="box-palette bg-lightBlue-80">80</div>
          <div className="box-palette bg-lightBlue-90">90</div>
        </div>
        {/* Blue */}
        <div className="grid grid-cols-13 my-5">
          <h5 className="col-span-3 py-4 text-sm">Blue</h5>
          <div className="box-palette bg-blue-10">10</div>
          <div className="box-palette bg-blue-20">20</div>
          <div className="box-palette bg-blue-30">30</div>
          <div className="box-palette bg-blue-40">40</div>
          <div className="box-palette bg-blue-50">50</div>
          <div className="box-palette bg-blue-60">60</div>
          <div className="box-palette bg-blue-70">70</div>
          <div className="box-palette bg-blue-80">80</div>
          <div className="box-palette bg-blue-90">90</div>
        </div>
        {/* Green */}
        <div className="grid grid-cols-13 my-5">
          <h5 className="col-span-3 py-4 text-md">Green</h5>
          <div className="box-palette bg-green-10">10</div>
          <div className="box-palette bg-green-20">20</div>
          <div className="box-palette bg-green-30">30</div>
          <div className="box-palette bg-green-40">40</div>
          <div className="box-palette bg-green-50">50</div>
          <div className="box-palette bg-green-60">60</div>
          <div className="box-palette bg-green-70">70</div>
          <div className="box-palette bg-green-80">80</div>
          <div className="box-palette bg-green-90">90</div>
        </div>
        {/* Yellow */}
        <div className="grid grid-cols-13 my-5">
          <h5 className="col-span-3 py-4 text-md">Yellow</h5>
          <div className="box-palette bg-yellow-10">10</div>
          <div className="box-palette bg-yellow-20">20</div>
          <div className="box-palette bg-yellow-30">30</div>
          <div className="box-palette bg-yellow-40">40</div>
          <div className="box-palette bg-yellow-50">50</div>
          <div className="box-palette bg-yellow-60">60</div>
          <div className="box-palette bg-yellow-70">70</div>
          <div className="box-palette bg-yellow-80">80</div>
          <div className="box-palette bg-yellow-90">90</div>
        </div>
        {/* Red */}
        <div className="grid grid-cols-13 my-5">
          <h5 className="col-span-3 py-4 text-md">Red</h5>
          <div className="box-palette bg-red-10">10</div>
          <div className="box-palette bg-red-20">20</div>
          <div className="box-palette bg-red-30">30</div>
          <div className="box-palette bg-red-40">40</div>
          <div className="box-palette bg-red-50">50</div>
          <div className="box-palette bg-red-60">60</div>
          <div className="box-palette bg-red-70">70</div>
          <div className="box-palette bg-red-80">80</div>
          <div className="box-palette bg-red-90">90</div>
        </div>
      </div>
      <hr />
      {/* Shape */}
      <div className="my-8">
        <span className="flex font-SOT font-headline-md my-8">Shape</span>
        {/* None */}
        <div className="grid grid-cols-4 my-5">
          <h5 className="col-span-1 py-4 text-sm">rounded-none</h5>
          <div className="box-shape rounded-none">0px</div>
        </div>
        {/* 8px */}
        <div className="grid grid-cols-4 my-5">
          <h5 className="col-span-1 py-4 text-sm">rounded-8</h5>
          <div className="box-shape rounded-tr-8">8px</div>
        </div>
        {/* 12px */}
        <div className="grid grid-cols-4 my-5">
          <h5 className="col-span-1 py-4 text-sm">rounded-12</h5>
          <div className="box-shape rounded-tr-12">12px</div>
        </div>
        {/* 16px */}
        <div className="grid grid-cols-4 my-5">
          <h5 className="col-span-1 py-4 text-sm">rounded-16</h5>
          <div className="box-shape rounded-tr-16">16px</div>
        </div>
        {/* 24px */}
        <div className="grid grid-cols-4 my-5">
          <h5 className="col-span-1 py-4 text-sm">rounded-24</h5>
          <div className="box-shape rounded-tr-24">24px</div>
        </div>
        {/* 32px */}
        <div className="grid grid-cols-4 my-5">
          <h5 className="col-span-1 py-4 text-sm">rounded-32</h5>
          <div className="box-shape rounded-tr-32">32px</div>
        </div>
        {/* Full */}
        <div className="grid grid-cols-4 my-5">
          <h5 className="col-span-1 py-4 text-sm">rounded-full</h5>
          <div className="box-shape rounded-tr-full">999px</div>
        </div>
      </div>
      <hr />
      {/* Spacing */}
      <div className="my-8">
        <span className="flex font-SOT font-headline-md my-8">Spacing</span>
        {/* 4px */}
        <div className="grid grid-cols-12 my-5">
          <h5 className="col-span-3 py-4 text-sm">spacing-4</h5>
          <div className="box-spacing-bg">
            <div className="box-spacing w-spacing-4">4px</div>
          </div>
        </div>
        {/* 8px */}
        <div className="grid grid-cols-12 my-5">
          <h5 className="col-span-3 py-4 text-sm">spacing-8</h5>
          <div className="box-spacing-bg">
            <div className="box-spacing w-spacing-8">8px</div>
          </div>
        </div>
        {/* 12px */}
        <div className="grid grid-cols-12 my-5">
          <h5 className="col-span-3 py-4 text-sm">spacing-12</h5>
          <div className="box-spacing-bg">
            <div className="box-spacing w-spacing-12">12px</div>
          </div>
        </div>
        {/* 16px */}
        <div className="grid grid-cols-12 my-5">
          <h5 className="col-span-3 py-4 text-sm">spacing-16</h5>
          <div className="box-spacing-bg">
            <div className="box-spacing w-spacing-16">16px</div>
          </div>
        </div>
        {/* 24px */}
        <div className="grid grid-cols-12 my-5">
          <h5 className="col-span-3 py-4 text-sm">spacing-24</h5>
          <div className="box-spacing-bg">
            <div className="box-spacing w-spacing-24">24px</div>
          </div>
        </div>
        {/* 32px */}
        <div className="grid grid-cols-12 my-5">
          <h5 className="col-span-3 py-4 text-sm">spacing-32</h5>
          <div className="box-spacing-bg">
            <div className="box-spacing w-spacing-32">32px</div>
          </div>
        </div>
        {/* 40px */}
        <div className="grid grid-cols-12 my-5">
          <h5 className="col-span-3 py-4 text-sm">spacing-40</h5>
          <div className="box-spacing-bg">
            <div className="box-spacing w-spacing-40">40px</div>
          </div>
        </div>
        {/* 48px */}
        <div className="grid grid-cols-12 my-5">
          <h5 className="col-span-3 py-4 text-sm">spacing-48</h5>
          <div className="box-spacing-bg">
            <div className="box-spacing w-spacing-48">48px</div>
          </div>
        </div>
        {/* 56px */}
        <div className="grid grid-cols-12 my-5">
          <h5 className="col-span-3 py-4 text-sm">spacing-56</h5>
          <div className="box-spacing-bg">
            <div className="box-spacing w-spacing-56">56px</div>
          </div>
        </div>
        {/* 64px */}
        <div className="grid grid-cols-12 my-5">
          <h5 className="col-span-3 py-4 text-sm">spacing-64</h5>
          <div className="box-spacing-bg">
            <div className="box-spacing w-spacing-64">64px</div>
          </div>
        </div>
        {/* 120px */}
        <div className="grid grid-cols-12 my-5">
          <h5 className="col-span-3 py-4 text-sm">spacing-120</h5>
          <div className="box-spacing-bg">
            <div className="box-spacing w-spacing-120">120px</div>
          </div>
        </div>
      </div>
      {/* Components */}
      <hr />
      {/* Alert */}
      <div className="my-8">
        <span className="flex font-SOT font-headline-md my-8">Alert</span>
        {/* Info */}
        <span className="font-label-md">Info</span>
        <div className="bg-content flex-col">
          <Alert
            variant="info"
            title="Info Alert!"
            message="With informative supporting text."
            actionText="Action"
          />
        </div>
        {/* Positive */}
        <span className="font-label-md">Positive</span>
        <div className="bg-content flex-col">
          <Alert
            variant="positive"
            title="Positive Alert!"
            message="With positive supporting text."
            actionText="Action"
          />
        </div>
        {/* Warning */}
        <span className="font-label-md">Warning</span>
        <div className="bg-content flex-col">
          <Alert
            variant="warning"
            title="Warning Alert!"
            message="With warning supporting text."
            actionText="Action"
          />
        </div>
        {/* Negative */}
        <span className="font-label-md">Negative</span>
        <div className="bg-content flex-col">
          <Alert
            variant="negative"
            title="Negative Alert!"
            message="With negative supporting text."
            actionText="Action"
          />
        </div>
      </div>
      <hr />
      {/* App Bar */}
      <div className="my-8">
        <span className="flex font-SOT font-headline-md my-8">App Bar</span>
        {/* Medium */}
        <span className="font-label-md">Medium (Default)</span>
        <div className="bg-content flex-col">
          <AppBar
            headlineSize="medium"
            leadingIcon={true}
            trailingIcon={true}
            headlineText="Medium Headline"
            supportingText="Supporting text"
          />
        </div>
        {/* Small*/}
        <span className="font-label-md">Small</span>
        <div className="bg-content flex-col">
          <AppBar
            headlineSize="small"
            leadingIcon={true}
            trailingIcon={true}
            headlineText="Small Headline"
            supportingText="Supporting text"
          />
        </div>
      </div>
      <hr />
      {/* Button */}
      <div className="my-8">
        <span className="flex font-SOT font-headline-md my-8">Button</span>
        {/* Variants + Sizes */}
        <div>
          {/* Filled */}
          <span className="font-label-md">Filled</span>
          <div className="bg-content">
            <button className="button-filled button-sm">Button (sm)</button>
            <button className="button-filled button-md">Button (md)</button>
            <button className="button-filled button-lg">Button (lg)</button>
            <button className="button-filled button-xl">Button (xl)</button>
          </div>
          {/* Outlined */}
          <span className="font-label-md">Outlined</span>
          <div className="bg-content">
            <button className="button-outlined button-sm">Button (sm)</button>
            <button className="button-outlined button-md">Button (md)</button>
            <button className="button-outlined button-lg">Button (lg)</button>
            <button className="button-outlined button-xl">Button (xl)</button>
          </div>
          {/* Text */}
          <span className="font-label-md">Text</span>
          <div className="bg-content">
            <button className="button-text button-sm">Button (sm)</button>
            <button className="button-text button-md">Button (md)</button>
            <button className="button-text button-lg">Button (lg)</button>
            <button className="button-text button-xl">Button (xl)</button>
          </div>
        </div>
        {/* States */}
        <div className="my-5">
          <span className="font-label-md">States</span>
          <div className="bg-content flex-col">
            {/* Enabled (Default) */}
            <span className="font-label-sm">Enabled (Default)</span>
            <div className="bg-section flex">
              <button className="button-filled button-lg">Button</button>
              <button className="button-outlined button-lg">Button</button>
              <button className="button-text button-lg">Button</button>
            </div>
            {/* Disabled */}
            <span className="font-label-sm">Disabled</span>
            <div className="bg-section flex">
              <button className="button-filled button-lg disabled">
                Button
              </button>
              <button className="button-outlined button-lg disabled">
                Button
              </button>
              <button className="button-text button-lg disabled">Button</button>
            </div>
            {/* Hovered */}
            <span className="font-label-sm">Hovered</span>
            <div className="bg-section flex">
              <button className="button-filled button-lg hovered">
                Button
              </button>
              <button className="button-outlined button-lg hovered">
                Button
              </button>
              <button className="button-text button-lg hovered">Button</button>
            </div>
            {/* Pressed */}
            <span className="font-label-sm">Pressed</span>
            <div className="bg-section flex">
              <button className="button-filled button-lg pressed">
                Button
              </button>
              <button className="button-outlined button-lg pressed">
                Button
              </button>
              <button className="button-text button-lg pressed">Button</button>
            </div>
            {/* Inverse */}
            <span className="font-label-sm">Inverse</span>
            <div className="bg-section flex bg-neutralVariant-40">
              <button className="button-filled button-lg inverse">
                Button
              </button>
              <button className="button-outlined button-lg inverse">
                Button
              </button>
              <button className="button-text button-lg inverse">Button</button>
            </div>
          </div>
        </div>
      </div>
      <hr />
      {/* Text Field */}
      <div className="my-8">
        <span className="flex font-SOT font-headline-md my-8">Text Field</span>
        {/* Outlined */}
        <span className="font-label-md">Outlined</span>
        <div className="bg-content flex-col">
          <TextField
            variant="outlined"
            labelText="Label text"
            inputText="Input text"
            supportingText="Supporting text"
            leadingIcon={true}
            trailingIcon={true}
            infoIcon={true}
          />
        </div>
        {/* Filled */}
        <span className="font-label-md">Filled</span>
        <div className="bg-content flex-col">
          <TextField
            variant="filled"
            labelText="Label text"
            inputText="Input text"
            supportingText="Supporting text"
            leadingIcon={true}
            trailingIcon={true}
            infoIcon={true}
          />
        </div>
        {/* States */}
        <span className="font-label-md">States</span>
        <div className="bg-content flex-col">
          {/* Enabled (Default) */}
          <span className="font-label-sm">Enabled (Default)</span>
          <div className="bg-section grid grid-cols-2">
            <TextField
              variant="outlined"
              labelText="Label text"
              inputText="Input text"
              supportingText="Supporting text"
              leadingIcon={true}
              trailingIcon={true}
              infoIcon={true}
            />
            <TextField
              variant="filled"
              labelText="Label text"
              inputText="Input text"
              supportingText="Supporting text"
              leadingIcon={true}
              trailingIcon={true}
              infoIcon={true}
            />
          </div>
          {/* Disabled */}
          <span className="font-label-sm">Disabled</span>
          <div className="bg-section grid grid-cols-2">
            <TextField
              variant="outlined"
              state="disabled"
              labelText="Label text"
              inputText="Input text"
              supportingText="Supporting text"
              leadingIcon={true}
              trailingIcon={true}
              infoIcon={true}
            />
            <TextField
              variant="filled"
              state="disabled"
              labelText="Label text"
              inputText="Input text"
              supportingText="Supporting text"
              leadingIcon={true}
              trailingIcon={true}
              infoIcon={true}
            />
          </div>
          {/* Focused */}
          <span className="font-label-sm ">Focused</span>
          <div className="bg-section grid grid-cols-2">
            <TextField
              variant="outlined"
              state="focused"
              labelText="Label text"
              inputText="Input text"
              supportingText="Supporting text"
              leadingIcon={true}
              trailingIcon={true}
              infoIcon={true}
            />
            <TextField
              variant="filled"
              state="focused"
              labelText="Label text"
              inputText="Input text"
              supportingText="Supporting text"
              leadingIcon={true}
              trailingIcon={true}
              infoIcon={true}
            />
          </div>
          {/* Error */}
          <span className="font-label-sm">Error</span>
          <div className="bg-section grid grid-cols-2">
            <TextField
              variant="outlined"
              state="error"
              labelText="Label text"
              inputText="Input text"
              supportingText="Supporting text"
              leadingIcon={true}
              trailingIcon={true}
              infoIcon={true}
            />
            <TextField
              variant="filled"
              state="error"
              labelText="Label text"
              inputText="Input text"
              supportingText="Supporting text"
              leadingIcon={true}
              trailingIcon={true}
              infoIcon={true}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
