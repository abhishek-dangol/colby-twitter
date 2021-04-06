import React from "react";

import Post from "./Post";

export default {
  title: "Components/Post",
  component: Post,
};

const Template = () => <Post content="hello world" date="2/25/2021" />;

export const Default = Template.bind({});
