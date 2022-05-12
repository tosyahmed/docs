import React from "react";
// @ts-ignore
import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";
import CodeBlock from "@theme/CodeBlock";

type LanguagePlusText = {
  language: string;
  text: string;
};

type Props = {
  codes: LanguagePlusText[];
};

export default function CodeSnippetForGuide({ codes }: Props) {
  return (
    <Tabs groupId="thirdweb-code-snippet">
      {codes.map((code) => (
        <TabItem
          key={code.language}
          value={code.language}
          label={
            // capitalize first letter
            code.language.charAt(0).toUpperCase() + code.language.slice(1)
          }
        >
          <CodeBlock language={code.language}>{code.text}</CodeBlock>
        </TabItem>
      ))}
    </Tabs>
  );
}
