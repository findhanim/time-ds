"use client";
import React, { useState } from "react";
// Icons
import "material-icons/iconfont/material-icons.css";
// Components
import { Alert } from "../../components/Alert";
import { AppBar } from "../../components/AppBar";
import { RadioButton } from "../../components/RadioButton";
import { TextField } from "../../components/TextField";

const personalInfoData = [
  {
    labelText: "ID Type",
    inputText: "MyKad",
    trailingIcon: true,
  },
  {
    labelText: "Title",
    inputText: "Dato",
    trailingIcon: true,
  },
  {
    labelText: "Full Name",
    inputText: "Jonathan Edward Doe",
    supportingText: "Enter your name as per your NRIC",
  },
  {
    labelText: "MyKad Number",
    inputText: "880818-08-5566",
  },
  {
    labelText: "Email",
    inputText: "johndoe@gmail.com",
    supportingText:
      "Your Time ID is your Selfcare login to manage your Internet. New customers will use this email as their Time ID. Returning customers can use it to verify their account.",
  },
];

export default function TestPage() {
  const [selected, setSelected] = useState<string>("");

  return (
    <div className="min-h-screen bg-neutralVariant-10 p-5">
      {/* Top bar */}
      <AppBar
        headlineSize="medium"
        leadingIcon={true}
        trailingIcon={true}
        headlineText="Medium Headline"
        supportingText="Supporting text"
      />
      {/* Alert banner */}
      <div className="mb-spacing-24">
        <Alert
          variant="warning"
          title="Time ID not activated"
          message="It appears this ID is already registered but not yet active. An activation email will be sent to the customer."
          // actionText="Action"
        />
      </div>

      {/* Nationality */}
      <span className="font-label-xs text-neutral-70">Nationality</span>
      <div className="flex mb-4 gap-x-8">
        <RadioButton
          name="nationality"
          value="option1"
          label="Malaysian"
          checked={selected === "option1"}
          onChange={setSelected}
        />
        <RadioButton
          name="nationality"
          value="option2"
          label="Non-Malaysian"
          checked={selected === "option2"}
          onChange={setSelected}
          disabled
        />
      </div>

      {/* Info fields */}
      {personalInfoData.map((data, index) => (
        <TextField
          key={index}
          variant="filled"
          margin={12}
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
  );
}
