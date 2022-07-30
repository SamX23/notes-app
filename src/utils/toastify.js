import { toast } from "react-toastify";

const toastSuccess = (text) =>
  toast.success(text, {
    position: "bottom-right",
    autoClose: 3000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: false,
    progress: undefined,
  });

export default toastSuccess;
