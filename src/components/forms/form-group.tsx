import { useState } from "react";

function FormGroup<T>({ children }: any) {
  const [formState, updateFormState] = useState({});

  function handleInputChange(event: any) {
    const target = event.target;
    const name = target.name;

    updateFormState({
      ...formState,
      [name]: target.value,
    });
  }

  return <div>{children}</div>;
}

export default FormGroup;
