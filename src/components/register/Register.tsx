import React, { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

import Button from "../btn/btn";
import InputField from "../input-field/InputField";
import SelectField from "../select-field/SelectField";
import CheckboxField from "../checkbox-field/CheckBox";

import { Heading } from "../form/Form.syles";

interface Option {
  value: string;
  label: string;
  children?: Option[];
}

interface FormData {
  name: string;
  terms: boolean;
  sectors: {
    value: string;
    label: string;
  }[];
}

interface RegisterProps {
  heading: string;
  btnValue: string;
  onSubmit: SubmitHandler<FormData>;
}

const Register: React.FC<RegisterProps> = ({ onSubmit, heading, btnValue }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  useEffect(() => {
    const fetchData = async () => {
      const sectors = await import("../select-field/sectors.json");
      setOptions(sectors.default);
    };

    fetchData();
  }, []);

  const [options, setOptions] = useState<Option[]>([]);

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Heading>{heading}</Heading>
        <InputField
          id="name"
          label="Name"
          error={errors.name}
          register={register}
        />
        <SelectField
          id="sectors"
          label="Sectors"
          options={options}
          register={register}
          error={errors.sectors}
        />
        <CheckboxField
          id="terms"
          register={register}
          error={errors.terms}
          label="Agree to terms"
        />
        <Button value={btnValue} />
      </form>
    </>
  );
};

export default Register;
