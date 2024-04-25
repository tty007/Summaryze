"use client";
import React, { useState } from "react";

const Summerize = (text: string) => {
  const [summary, setSummary] = useState<string>("");
  const test_body =
    "当社グループは株式会社極洋(当社)及び子会社26社、関連会社４社により構成され、水産商事事業、食品事業、鰹・鮪事業、物流サービス事業を主として行っております。各事業における当社グループの位置付けは次のとおりであります。下記の事業区分は、セグメント情報の区分と同一であります。水産商事事業…当社及びKyokuyoAmericaCorporation他において水産物の買付及び加工、販売を行っております。食品事業…当社、極洋食品㈱及び㈱ジョッキ他において業務用冷凍食品、市販用冷凍食品・缶詰・海産物珍味の製造及び販売を行っております。鰹・鮪事業…当社及び極洋水産㈱他においてカツオ・マグロ等の漁獲、養殖、買付及び加工、販売を行っております。物流サービス事業…キョクヨー秋津冷蔵㈱において冷蔵倉庫事業を行っております。その他事業…キョクヨー総合サービス㈱他において保険代理店業等を行っております。";

  const handleClick = async (body: string) => {
    const res = await fetch("http://localhost:3000/api/summarize", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        body: test_body,
      }),
    });
    const data = await res.json();
    setSummary(data);
    return summary;
  };

  return (
    <>
      <div>
        <button
          className="p-3 my-5 backdrop-blur-0 bg-slate-600 text-white font-bold text-center rounded-lg"
          onClick={() => handleClick(text)}
        >
          要約する
        </button>
      </div>
      <div className="w-full">
        <div className="min-w-[100px] min-h-[100px] bg-white my-10 rounded-lg">
          {summary}
        </div>
      </div>
    </>
  );
};

export default Summerize;
