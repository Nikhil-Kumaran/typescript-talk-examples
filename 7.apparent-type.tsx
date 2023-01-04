import React from "react";

type Props = {
  label: string;
  color: typeof statusColors[number] | `#${string & {}}`;
};

const statusColors = ["green", "red", "yellow", "blue"] as const;

function Tag({ color, label }: Props) {
  return <div style={{ background: color }}>{label}</div>;
}

function Home() {
  return <Tag label="Nikhil" color="blue" />;
}
