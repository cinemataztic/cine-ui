import React, { useState } from "react";
import ListBox from "./Listbox.component";

export default {
  title: "Example/Listbox",
  component: ListBox,
  argTypes: {
    data: {
      control: {
        type: "array",
      },
    },
  },
};

const Template = ({ data }) => {
  const [selectedAd, setSelectedAd] = useState();

  return (
    <ListBox
      options={data}
      value={selectedAd}
      onChange={setSelectedAd}
      placeholder="Select ad"
    />
  );
};

export const ListboxComponent = Template.bind({});

ListboxComponent.args = {
  data: [
    { value: "1", label: "Option 1" },
    { value: "2", label: "Coco Cola-15" },
    { value: "3", label: "Coco Cola-30" },
    { value: "4", label: "Pepsi-15" },
    { value: "5", label: "Pepsi-30" },
  ],
};
