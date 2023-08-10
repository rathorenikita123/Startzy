/* eslint-disable react/style-prop-object */
import React from "react";
import { Button } from "../Button/Button";
import { Logo } from "../Logo/Logo";
import { Table } from "../Table/Table";
import { Info } from "../Information/Information";

const Card = () => {
  return (
    <div>
      <div className="container mx-auto w-[25rem] h-[19rem] rounded-2xl bg-gradient-to-r from-[#393046] to-[#2D2537] p-5">
        <div className="flex flex-col justify-between h-full">
          <div className="flex justify-around">
            <Logo />
            <Info />
          </div>
          <div>
            <Table />
          </div>
          <div className="flex justify-between">
            <Button text="About Trade" />
            <Button
              text="Place Order"
              style="bg-gradient-to-r from-[#01C36D] via-[#01C16C] to-[#019C57] border-none"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
