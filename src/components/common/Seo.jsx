import { useEffect } from "react";

const SITE_NAME = "AI Ready Engineer LP";
const DEFAULT_TITLE = "AI Ready Engineer LP";

function upsertMeta(attr, key, content) {
  if (!content) return;
  let tag = document.head.querySelector(`meta[${attr}="${key}"]`);
  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute(attr, key);
    document.head.appendChild(tag);
  }
  tag.setAttribute("content", content);
}

function upsertCanonical(href) {
  let tag = document.head.querySelector('link[rel="canonical"]');
  if (!href) {
    if (tag) tag.remove();
    return;
  }
  if (!tag) {
    tag = document.createElement("link");
    tag.setAttribute("rel", "canonical");
    document.head.appendChild(tag);
  }
  tag.setAttribute("href", href);
}

export default function Seo({ title, description, canonical }) {
  useEffect(() => {
    const fullTitle = title ? `${title} | ${SITE_NAME}` : DEFAULT_TITLE;
    document.title = fullTitle;

    upsertMeta("name", "description", description);
    upsertMeta("property", "og:title", fullTitle);
    upsertMeta("property", "og:description", description);
    upsertCanonical(canonical);

    return () => {
      document.title = DEFAULT_TITLE;
    };
  }, [title, description, canonical]);

  return null;
}
