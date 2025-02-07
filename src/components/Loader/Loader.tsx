import { InfinitySpin } from "react-loader-spinner";
import '../../App.css';

const Loader = () => {
return (
<div className="loader">
<InfinitySpin
  visible={true}
  width="200"
  color="blue"
  ariaLabel="infinity-spin-loading"
  />
</div>)}

export default Loader;
