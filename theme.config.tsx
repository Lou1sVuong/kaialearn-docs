import React from "react";
import { DocsThemeConfig, useConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  head: function useHead() {
    const config = useConfig<{ description?: string; image?: string }>();
    const description =
      config.frontMatter.description ||
      "Kaialearn is a platform for learning Web3, focusing on Solidity and smart contracts. Gain hands-on experience, earn NFTs, and exchange them for Kaia Tokens in a gamified, blockchain-powered learning journey.";
    const title = `${config.title} | Kaialearn`;
    return (
      <>
        <title>{title}</title>
        <meta property="og:title" content={title} />
        <meta name="description" content={description} />
        <meta property="og:description" content={description} />

        {/* Favicons, meta */}
        {/* Get favicon here from png */}
        {/* https://favicon.io/favicon-converter/#google_vignette */}
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/logo/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/logo/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/logo/favicon-16x16.png"
        />
        <link rel="manifest" href="/logo/site.webmanifest" />
      </>
    );
  },
  logo: (
    <div className="flex items-center">
      <img
        src="/logo/kaialearn-logo-black.png"
        alt="kaialearn-logo"
        width={200}
        height={50}
        className="w-[10rem] dark:nx-hidden"
      />
    </div>
  ),
  project: {
    link: "https://github.com/Lou1sVuong/kaialearn-docs",
  },
  chat: {
    link: "https://discord.com",
  },
  docsRepositoryBase: "https://github.com/Lou1sVuong/kaialearn-docs/tree/main",
  footer: {
    text: "Kaialearn Platform Docs",
  },
  darkMode: false,
};

export default config;
