import React from "react";

type CommonProps = {
  name: string;
  size?: "small" | "medium" | "large";
  // other common props
};

type ConditionalProps =
  | {
      icon?: never;
      /**
       * src is required
       */
      src: string;
    }
  | {
      /**
       * icon is required
       */
      icon: JSX.Element;
      src?: never;
    };

type AvatarProps = CommonProps & ConditionalProps;

function Avatar(props: AvatarProps): JSX.Element {
  const { icon, src, name, size } = props;
  return <div></div>;
}

function Home() {
  return <Avatar name="Nikhil" icon={<div></div>} />;
}
