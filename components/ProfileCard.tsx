import { useAtom } from "jotai";
import Image from "next/image";
import { themeAtom } from "../pages/_app";
import Link from "./Link";

const skills: [name: string, icon?: string][] = [
    ["Rust", "/brandIcons/rust.png"],
    ["Kubernetes", "/brandIcons/kubernetes.png"],
    ["React", "/brandIcons/react-icon.png"],
    ["Next.js", "/brandIcons/nextjs.svg"],
    ["Typescript", "/brandIcons/typescript.png"],
    ["GraphQL", "/brandIcons/graphql.png"],
    ["C#", "/brandIcons/csharp.png"],
    ["Blazor(ASP.NET Core)", "/brandIcons/blazor.png"],
    ["Unity", "/brandIcons/unity.webp"],
    ["Hasura", "/brandIcons/hasura.webp"],
    ["NodeJS", "/brandIcons/nodejs.png"],
    ["HTML", "/brandIcons/html.png"],
    ["CSS", "/brandIcons/css.webp"],
    ["Clojure", "/brandIcons/clojure.png"],
];

const interests = [
    "Graphic",
    "WebGPU",
    "Shader",
    "WASM",
    "Parser",
    "LLVM",
    "SFX",
    "VFX",
    "Sound",
    "Synth",
    "3DMotion",
    "3DModel",
    "Library",
];

export default function ProfileCard() {
    const [theme] = useAtom(themeAtom);
    const light = theme === "light";
    return (
        <div className="lg:m-24 sm:m-12 m-6 p-8 neum">
            <h1 className="mb-3">
                {light ? "松尾 弥玖人 (Mikuto Matsuo)" : "WiZLite"}
            </h1>
            <h3 className="mb-2">
                {light ? "Job: Software Engineer" : "A Programmer / Creator"}
            </h3>
            <h3 className="mb-2 flex items-center gap-2">
                <div className="align-middle break-normal mb-2">
                    {light ? "業務経験:" : "Interested in"}
                </div>
                <ul className="flex flex-wrap">
                    {light
                        ? skills.map(([name, url]) => (
                              <li
                                  key={name}
                                  className="group relative neum-sm inline-block align-middle w-10 h-10 p-1 m-1"
                              >
                                  <Image
                                      alt={name}
                                      src={url}
                                      width="100%"
                                      height="100%"
                                      className="align-middle"
                                  />
                                  <span className="hidden group-hover:inline absolute -bottom-full -left-1 text-sm p-1 bg-white dark:bg-black dark:text-white shadow">
                                      {name}
                                  </span>
                              </li>
                          ))
                        : interests.map((interest, index) => (
                              <li
                                  className="neum-sm inline text-sm p-2 m-1"
                                  key={interest}
                              >
                                  {interest}
                              </li>
                          ))}
                </ul>
            </h3>
            <div className="mt-4 p-2">
                <p className="text-sm">
                    私は、2019年から業務を通して、Webサービス、業務システム、ゲームエンジンのプロファイラなど様々なものを開発してきました。
                </p>
                <p className="text-sm mt-2">
                    グラフィックや言語処理系など、低レイヤーに興味がありつつも、最新のテクノロジーにも常に興味を持ち、継続的な学習と技術向上に努めています。
                </p>
                <p className="text-sm mt-2">
                    Webに限らない幅広い知識を生かした一貫した開発や、チームでのマネジメントを得意としています。
                </p>
                <p className="text-sm mt-2">
                    個人開発で、
                    <Link href="https://novel-land.com">NoveLand</Link>
                    というサービスを開発しています。
                </p>
            </div>
        </div>
    );
}
