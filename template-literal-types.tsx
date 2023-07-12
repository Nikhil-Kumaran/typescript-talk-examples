import React from "react";

const statusColors = ["green", "red", "yellow", "blue"] as const;

type Props = {
  label: string;
  color: (typeof statusColors)[number] | `#${string}`;
  margin?: `${number}${"px" | "rem" | "em"}`;
};

function Tag({ color, label, margin }: Props) {
  return <div style={{ background: color, margin }}>{label}</div>;
}

function Home() {
  return (
    <>
      <Tag label="Nikhil" color="blue" margin="16px" />
      <Tag label="Nikhil" color="#fff" margin="1rem" />
    </>
  );
}
