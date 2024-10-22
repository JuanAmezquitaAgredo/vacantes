"use client"
import SelectComponent from "@/components/atoms/select/select";
import React, { useState } from "react";

export default function Home() {
  const [selectedValue, setSelectedValue] = useState("");

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedValue(event.target.value);
  };

  const options = [
    { value: 'Option 1', label: 'Option 1' },
    { value: 'Option 2', label: 'Option 2' },
    { value: 'Option 3', label: 'Option 3' },
    { value: 'Option 4', label: 'Option 4' },
    { value: 'Option 5', label: 'Option 5' },
  ]
  return (
    <div>
      <h1>home</h1>
      <SelectComponent options={options} value={selectedValue} onChange={handleSelectChange} placeholder="--Select--" focusColor="primary"/>
    </div>
  );
}
