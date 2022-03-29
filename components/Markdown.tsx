/* eslint-disable @next/next/no-img-element */
import { memo, useEffect, useRef  } from "react";
import { marked } from "marked";
import hljs from "highlight.js/lib/core"
import xml from 'highlight.js/lib/languages/xml';
import csharp from "highlight.js/lib/languages/csharp";
// import 'highlight.js/styles/github-dark.css';
import ReactDOM from "react-dom"
import Head from "next/head";
import { getUrlHash } from "../helpers";
import { useAtom } from "jotai";
import { themeAtom } from "../pages/_app";

hljs.registerLanguage('xml', xml);
hljs.registerLanguage("csharp", csharp);

interface Props {
    markdown: string
}

function MarkdownInternal({ markdown }: Props) {
    const __html = marked(markdown);
    const elmRef = useRef(null);

    const [theme] = useAtom(themeAtom);

    useEffect(() => {
        hljs.highlightAll();
        document.querySelector(".markdown").querySelectorAll("h1, h2, h3").forEach(h => {
            h.classList.add("group", "cursor-pointer")
            h.addEventListener("click", _ => { location.hash = getUrlHash(h.textContent)})
            // eslint-disable-next-line react/no-render-return-value
            ReactDOM.render(<>
                <span className="absolute">
                    <img src="/link.svg" alt="heading-link" width="18" height="18" 
                        className="relative -left-6 top-2 invisible group-hover:visible color-gray-400"/>
                </span>
                {h.textContent}
            </>, h)
        });
    }, [elmRef])

    return <>
        <Head>
            <link rel="stylesheet" type="text/css" href={`/styles/github${theme === "dark" ? "-dark" : ""}.css`}/>)
        </Head>
        <div ref={elmRef} className="markdown" dangerouslySetInnerHTML={{ __html }}></div>
    </>
}

const Markdown = memo(MarkdownInternal);
Markdown.displayName = "Markdown"
export default Markdown;