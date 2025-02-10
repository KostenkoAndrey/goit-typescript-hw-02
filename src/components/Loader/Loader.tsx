import React, { FC } from "react";
import { InfinitySpin } from "react-loader-spinner";
import '../../App.css';

const Loader: FC = () => {
return (
<div className="loader">
<InfinitySpin
  width="200"
  color="blue"
  />
</div>)}

export default Loader;
