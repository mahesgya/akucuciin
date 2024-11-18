import React from "react";
import { Link } from "react-router-dom";

function VerifyFailed() {
  return (
    <div className="h-screen w-screen flex flex-col items-center justify-start mx-[0.5em] mt-[3em] space-y-8">
      <img src="/Images/LogoAkucuciin.png" alt="logo" className="w-[9rem]" />
      <div className="flex flex-col items-center justify-center space-y-5">
        <h1 className="font-bold text-[30px] text-red-500 font-poppins text-center">Email Aktivasi Expired</h1>
        <p className="font-bold text-[25px] font-poppins text-[#687EFF] text-center">Akun Gagal diaktivasi </p>
        <h4 className="font-sans font-base font-[20px] text-gray55 text-center">Silahkan Daftar Ulang Akun Anda</h4>
        <Link to="/register">
          <button className="shadow-md font-sans w-[10rem] bg-blue-500 text-white font-semibold py-4 px-4  rounded-[20px] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">Daftar</button>
        </Link>
      </div>
    </div>
  );
}

export default VerifyFailed;
