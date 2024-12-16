"use client";
import React, { useState, useTransition } from "react";

export default function AddPage() {
  // hook (useState)
  const [getNPM, setNPM] = useState("");
  const [getNAMA, setNAMA] = useState("");
  const [getProdi, setProdi] = useState("");

  //fungsi simpan data
  const setSaveData = () => {
    // if (getNPM == "" || getNAMA == "" || getProdi == "") {
    //   alert("Lengkapi Seluruh Data !");
    // } else {
    //   alert("Ok");
    // }

    // ternary operator
    (getNPM == "" || getNAMA == "" || getProdi == "")
    ? alert ("Lengkapi Seluruh Data !")
    : alert("Ok");
  };

  return (
    <>
      <title>Tambah Data Mahasiswa</title>
      <div className="grid grid-cols-10 gap-4 items-center">
        <div className="">NPM</div>
        <div className="col-span-4">
          <input
            type="text"
            placeholder="Isi NPM"
            className="input input-bordered input-success w-full"
            onChange={(e) => {
              setNPM(e.target.value);
            }}
          />
        </div>
        <div className="col-start-1">Nama</div>
        <div className="col-span-4">
          <input
            type="text"
            placeholder="Isi Nama Mahasiswa"
            className="input input-bordered input-success w-full"
            onChange={(e) => {
              setNAMA(e.target.value);
            }}
          />
        </div>
        <div className="col-start-1">Program Studi</div>
        <div className="col-span-4">
          <select
            onChange={(e) => {
              setProdi(e.target.value);
            }}
            defaultValue={""}
            className="select select-success w-full"
          >
            <option value={""} disabled>
              Pilih Program Studi Mahasiswa
            </option>
            <option value={"Informatika"}>Informatika</option>
            <option value={"Sistem Informasi"}>Sistem Informasi</option>
            <option value={"Teknologi Informasi"}>Teknologi Informasi</option>
            <option value={"Teknik Komputer"}>Teknik Komputer</option>
          </select>
        </div>
        <div className="col-start-2 col-span-4">
          <button
            className="btn btn-active btn-neutral mr-5X w-28"
            onClick={setSaveData}
          >
            Simpan
          </button>
          <button className="btn btn-outline ml-5X 2-28">Batal</button>
        </div>
      </div>
    </>
  );
}