import React from "react";
import { Helmet } from "react-helmet-async";

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
}

const SEO: React.FC<SEOProps> = ({
  title = "Benjamin Olufemi | Frontend & Web3 Engineer",
  description = "Frontend engineer specializing in React, Next.js, and Web3 applications. I build fast, scalable, production-ready products from smart contract interaction to polished UI.",
  image = "/og-image.png",
  url = "https://benjamin-olufemi.com",
}) => {
  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#050505" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />

      {/* Structured Data (JSON-LD) */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Benjamin Olufemi",
          url: url,
          image: image,
          sameAs: [
            "https://github.com/benjamin-olufemi",
            "https://linkedin.com/in/benjamin-olufemi",
            "https://twitter.com/benjamin_web3",
          ],
          jobTitle: "Frontend & Web3 Engineer",
          worksFor: {
            "@type": "Organization",
            name: "Freelance",
          },
          description: description,
        })}
      </script>
    </Helmet>
  );
};

export default SEO;
