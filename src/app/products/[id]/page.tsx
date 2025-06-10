import React from "react";

const page = ({ params }: { params: { id: string } }) => {
  return <div>products {params.id}</div>;
};

export default page;
