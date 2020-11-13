import React from "react";
import Time from "components/Time";
import useInputs from "customHooks/useInputs";
import { useSelector } from "react-redux";
const TimeContainer = () => {
  const { info, info_errors } = useSelector((state) => ({
    info: state.info.info,
    info_errors: state.info.info_errors,
  }));
  const [values, onChange, errors] = useInputs(info, info_errors);
  return <Time values={values} onChange={onChange} errors={errors}></Time>;
};

export default TimeContainer;
