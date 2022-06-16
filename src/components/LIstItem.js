import React from "react";
import Button from "./Button";

export default function LIstItem(props) {
  return (
    <div className="bg-gray-300 shadow-lg max-w-3xl mx-auto rounded-lg m-0.5 p-2 h-full flex-1 w-50">
      
      <p className="text-[18px] font-semibold">{props.name}</p>
      <div className="flex justify-end">
        <Button text="UBAH DATA" backgroundColor="#00FFAB" onClick={props.update}/>
        <Button text="HAPUS DATA" backgroundColor="#FF5D5D" onClick={props.delete}/>
      </div>
    </div>
  );
}
