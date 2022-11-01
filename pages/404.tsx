import { NextPage } from "next";
import Seo from "../components/Seo";

const NotFound: NextPage = () => {
  return (
    <div>
      <Seo title="404" />
      <h1>404 : Pages Not Found 🤯</h1>
    </div>
  );
};

export default NotFound;
