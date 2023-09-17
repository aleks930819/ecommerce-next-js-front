import { getStaticPage } from "@/actions/get-static-pages";
import StaticPageContaienr from "@/components/static-page/static-page";
import React from "react";

const editorJsHtml = require("editorjs-html");
const EditorJsToHtml = editorJsHtml();

const AboutUsPage = async () => {
  const staticPage = (await getStaticPage("about-us")) as any;

  const content = EditorJsToHtml.parse(JSON.parse(staticPage.content)).join("");

  return <StaticPageContaienr content={content} />;
};

export default AboutUsPage;
