import { getStaticPage } from "@/actions/get-static-pages";
import StaticPageContaienr from "@/components/static-page/static-page";
import React from "react";

const editorJsHtml = require("editorjs-html");
const EditorJsToHtml = editorJsHtml();

const PrivacyPolicyPage = async () => {
  const staticPage = (await getStaticPage("black-friday")) as any;

  const content = EditorJsToHtml.parse(JSON.parse(staticPage.content)).join("");

  return <StaticPageContaienr content={content} />;
};

export default PrivacyPolicyPage;
