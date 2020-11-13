import { useState, useCallback } from "react";
import { valid } from "utils/validation";
import { setInfo } from "modules/info";
import { useDispatch } from "react-redux";

function useInputs(initialState) {
  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState({});
  const dispatch = useDispatch();

  const onChange = useCallback(
    (e) => {
      e.persist();
      const { name, value } = e.target;

      const newValues = { ...values, [name]: value };
      setValues((values) => ({ ...values, [name]: value }));
      setErrors(valid(name, newValues));
      dispatch(setInfo(newValues));
    },
    [values]
  );

  const onSubmit = useCallback(
    (e) => {
      e.persist();
      setErrors(valid("none", values, "submit"));
      const res = valid("none", values, "submit");
      console.log("res", res);
      if (valid("none", values, "submit") === {}) {
        console.log(valid("none", values, "submit"));

        alert("결제");
      } else {
      }
    },
    [values]
  );

  return [values, onChange, errors, onSubmit];
}

export default useInputs;
