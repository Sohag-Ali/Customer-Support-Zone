import { Suspense } from "react";
import "./App.css";
import CounterBox from "./Component/CounterBox";
import Footer from "./Component/Footer";
import Navbar from "./Component/Navbar";
import TicketDashboard from "./Component/TicketDashboard";
import { ToastContainer } from "react-toastify";
import { HiH2 } from "react-icons/hi2";
import Loading from "./Component/Loading";

const fetchData = async () => {
  const result = await fetch("/data.json");
  return result.json();
};

function App() {
  const fetchPromise = fetchData();

  return (
    <>
      <Navbar></Navbar>

      <Suspense fallback={<Loading></Loading>}>
        <TicketDashboard fetchPromise={fetchPromise}></TicketDashboard>
      </Suspense>

      <Footer></Footer>
      <ToastContainer />
    </>
  );
}

export default App;
