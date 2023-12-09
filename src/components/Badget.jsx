import React from "react";

const Badget = ({ barTitle, badgetTitle }) => {
  return (
    <div className="d-flex gap-3 flex-wrap">
      {barTitle} :
      {badgetTitle.map((badge,i) => (
        <p key={i}
          className={`badge ${
            barTitle === "Kategoriler"
              ? "bg-danger"
              : barTitle === "Diller"
              ? "bg-primary"
              : barTitle === "Yapımcı Şirketler"
              ? "bg-success"
              : null
          }`}
        >
          {badge.name}
        </p>
      ))}
    </div>
  );
};

export default Badget;
