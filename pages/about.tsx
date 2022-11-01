import type { NextPage } from "next";
import Seo from "../components/Seo";

const requestPermission = () => {
  if (!("Notification" in window)) {
    throw new Error("브라우저가 알림을 지원하지 않습니다.");
  }

  Notification.requestPermission().then((permission) => {
    const notification = new Notification("Test", {
      body: "이건 테스트 알람입니다.",
      icon: "/vercel.svg",
    });
  });
};

const Hey: NextPage = () => {
  return (
    <div>
      <Seo title="About" />
      <button className="notify" onClick={requestPermission}>
        Notify Me
      </button>
    </div>
  );
};

export default Hey;
