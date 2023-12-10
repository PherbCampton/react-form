import React, { useState } from "react";

import Tab from "../tab/Tab";
import Register from "../register/Register";

interface FormData {
  name: string;
  terms: boolean;
  sectors: {
    value: string;
    label: string;
  }[];
}

export interface Option {
  value: string;
  label: string;
  children?: Option[];
}

const Form: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  const onSubmit = (data: FormData) => {
    console.log(data);
    setActiveTab(1);
  };

  return (
    <div>
      <Tab activeTab={activeTab} onTabChange={setActiveTab} />
      <div>
        {activeTab === 0 && (
          <Register onSubmit={onSubmit} heading="Register!" btnValue="Save" />
        )}
        {activeTab === 1 && (
          <Register onSubmit={onSubmit} heading="Profile!" btnValue="Update" />
        )}
      </div>
    </div>
  );
};

export default Form;
