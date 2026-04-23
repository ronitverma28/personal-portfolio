import React from "react";
import { Helmet } from "react-helmet";
import {
    greeting,
    seo,
    socialMediaLinks,
    contactPageData,
    certifications,
} from "../../portfolio.js";

function SeoHeader() {
    const sameAs = socialMediaLinks
        .filter(
            (media) =>
                !(media.link.startsWith("tel") || media.link.startsWith("mailto"))
        )
        .map((media) => media.link);

    const mailObj = socialMediaLinks.find((media) =>
        media.link.startsWith("mailto")
    );
    const mail = mailObj ? mailObj.link.replace("mailto:", "") : "";

    const credentials = certifications.certifications.map((certification) => ({
        "@type": "EducationalOccupationalCredential",
        url: certification.certificate_link,
        name: certification.title,
        description: certification.subtitle,
    }));

    const data = {
        "@context": "https://schema.org",
        "@type": "Person",
        name: greeting.title,
        url: seo?.og?.url,
        email: mail,
        telephone: contactPageData.phoneSection?.subtitle,
        sameAs: sameAs,
        address: {
            "@type": "PostalAddress",
            addressLocality: contactPageData.addressSection?.locality,
            addressRegion: contactPageData.addressSection?.region,
            addressCountry: contactPageData.addressSection?.country,
            postalCode: contactPageData.addressSection?.postalCode,
            streetAddress: contactPageData.addressSection?.streetAddress,
        },
        hasCredential: credentials,
    };

    return (
        <Helmet>
            <title>{seo.title}</title>
            <meta name="description" content={seo.description} />
            <meta name="keywords" content={seo.keywords.join(", ")} />
            <meta name="author" content={seo.author} />
            <meta name="robots" content={seo.robots} />

            <link rel="canonical" href={seo.og.url} />

            <meta property="og:title" content={seo.og.title} />
            <meta property="og:description" content={seo.og.description} />
            <meta property="og:type" content={seo.og.type} />
            <meta property="og:url" content={seo.og.url} />
            <meta property="og:image" content={seo.og.image} />
            <meta property="og:site_name" content="Ronit Portfolio" />

            <meta name="twitter:card" content={seo.twitter.card} />
            <meta name="twitter:title" content={seo.twitter.title} />
            <meta name="twitter:description" content={seo.twitter.description} />
            <meta name="twitter:image" content={seo.twitter.image} />
            <meta name="google-site-verification" content="koLnDB1FT3Mr0pEZH2-Aw6iBgexfjsOoaQYgLsBqNKE" />

            <script type="application/ld+json">
                {JSON.stringify(data)}
            </script>
        </Helmet>
    );
}

export default SeoHeader;