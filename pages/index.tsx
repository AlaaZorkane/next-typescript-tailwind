import React, { FC } from "react";
import Hello from "@/components/Hello";

const IndexPage: FC<void> = () => (
  <div className="flex h-screen">
    <Hello who="world" />
  </div>
);

export default IndexPage;
