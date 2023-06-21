import { Marker } from "react-map-gl";
import "./App.css";
import Map from "./components/Map";
import Geolocation from "./components/Geolocation";
import ReactPlayer from "react-player";
import { Chart } from "./components/Chart";
import { useEffect, useRef, useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import useTheme from "./hooks/useTheme";

const validationSchema = yup.object({
  name: yup.string().required("es obligatorio"),
  address: yup.string(),
  id: yup.string(),
  email: yup.string().matches(/.*@.*\..{2,3}/, "invalid"),
  invoice: yup.bool()
});

function App() {
  const { theme, changeTheme } = useTheme();
  const { values, errors, handleSubmit, handleChange } = useFormik({
    initialValues: { name: "holaa", address: "", id: "", email: "" },
    onSubmit: values => {
      console.log("submit: ", values);
      // LLamadas a servidor
    },
    validationSchema
  });
  const [counter, setCounter] = useState(0);
  const myFormRef = useRef();
  const myNumberRef = useRef(22);
  myNumberRef.current = 40;
  console.log(values, errors);
  return (
    <div className={`my-app ${theme}`}>
      {/* <h1>New order</h1>
      <button onClick={() => setCounter(state => state + 1)}>
        Add to counter
      </button>
      <form className="my-form" ref={myFormRef} onSubmit={handleSubmit}>
        <input
          autoFocus
          name="name"
          value={values.name}
          placeholder="name"
          onChange={e => {
            console.log("change!!");
            handleChange(e);
          }}
        />
        <span>{errors.name}</span>
        <label>
          Need invoice?{" "}
          <input
            type="checkbox"
            name="invoice"
            checked={true}
            onChange={handleChange}
            value={values.invoice}
          />
        </label>
        <div className="invoice-data" style={{ padding: 10 }}>
          <input
            autoFocus
            name="address"
            placeholder="address"
            onChange={handleChange}
            value={values.address}
          />
          <input
            autoFocus
            name="id"
            placeholder="DNI"
            onChange={handleChange}
            value={values.id}
          />
        </div>
        <input
          autoFocus
          name="email"
          placeholder="email"
          onChange={handleChange}
          value={values.email}
        />
        <button type="submit">Submit</button>
      </form> */}

      <h1>Geolocation</h1>
      <Geolocation />
      <h1>Mapbox component</h1>
      <Map></Map>
      <h1 style={{ marginTop: 100 }}>React player</h1>
      <ReactPlayer url="https://www.youtube.com/watch?v=ysz5S6PUM-U" />
      <h1>Chart JS</h1>
      <Chart />

      {/* Custom hook */}
      <button onClick={() => changeTheme("dark")}>Change theme to dark</button>
    </div>
  );
}

export default App;
