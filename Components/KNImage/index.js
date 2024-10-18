"use client";

import Image from "next/image";
import React, { Fragment } from "react";

const KNImage = ({ ...rest }) => {
  return (
    <Fragment>
      <Image
        draggable={false}
        {...rest}
        alt="Pic"
        onError={(e) => {
          e.onerror = null;
          e.target.src = "../../public/Images/noImage.jpg";
        }}
      />
    </Fragment>
  );
};

export default KNImage;
