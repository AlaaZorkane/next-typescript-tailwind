import Hello from "@/components/Hello";
import { FC } from "react";

const IndexPage: FC = () => (
  <div className="flex h-screen">
    <Hello who="world" />
  </div>
);

export default IndexPage;
