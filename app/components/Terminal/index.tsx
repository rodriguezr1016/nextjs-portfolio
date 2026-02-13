"use client";

import { useEffect, useMemo, useRef, useState } from "react";

type Line =
  | { type: "prompt"; cmd: string }
  | { type: "text"; value: React.ReactNode }
  | { type: "grid"; values: string[] };

const DEFAULT_SKILLS = [
  "python",
  "typescript",
  "node.js",
  "mongodb",
  "next.js",
  "docker",
  "express.js",
  "mysql",
  "php",
  "wordpress",
  "c++",
];

export default function Terminal() {
    const containerRef = useRef<HTMLDivElement | null>(null);

  const skills = useMemo(() => DEFAULT_SKILLS, []);

  const [cwd] = useState("~");
  const [user] = useState("Rene_Rodriguez");
  const [input, setInput] = useState("");
  const [lines, setLines] = useState<Line[]>([
    { type: "prompt", cmd: "whoami" },
    { type: "text", value: user },
    { type: "prompt", cmd: "ls skills/" },
    { type: "grid", values: skills },
  ]);

  const bottomRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  // Auto scroll to bottom on new output
 useEffect(() => {
  if (containerRef.current) {
    containerRef.current.scrollTop = containerRef.current.scrollHeight;
  }
}, [lines]);


  // Focus input when clicking anywhere in terminal body
  const focusInput = () => inputRef.current?.focus();

  const runCommand = (raw: string) => {
    const cmd = raw.trim();

    // Always echo the command as a prompt line (even if empty)
    const next: Line[] = [{ type: "prompt", cmd: cmd || "" }];

    if (!cmd) {
      setLines((prev) => [...prev, ...next]);
      return;
    }

    const [base, ...args] = cmd.split(/\s+/);

    const addText = (value: string) => next.push({ type: "text", value });
    const addGrid = (values: string[]) => next.push({ type: "grid", values });

    switch (base.toLowerCase()) {
      case "help":
        addText("Commands:");
        addText("  help                show commands");
        addText("  whoami               print user");
        addText("  ls skills/            list skills");
        addText("  projects             show projects summary");
        addText("  contact              show contact info");
        addText("  clear                clear terminal");
        break;

      case "whoami":
        addText(user);
        break;

      case "ls": {
        const target = args.join(" ");
        if (target === "skills/" || target === "skills") {
          addGrid(skills);
        } else {
          addText(`ls: cannot access '${target || ""}': No such file or directory`);
        }
        break;
      }

      case "projects":
        addText("Projects:");
        addText("  - Next.js Tree Service App (EdgeStore + MongoDB)");
        addText("  - AI Prompt Microsite (Markdown in repo)");
        addText("  - WordPress Nonprofit (JS DOM + PHP)");
        addText("  - AI Image Generator (Cloudinary + MongoDB)");
        addText("  - WordPress Nonprofit Sections (JS DOM + animations)");
        break;

      case "contact":
        addText("Contact:");
        next.push({
            type: "text",
            value: (
                <>
            {"   "}email:{" "}
        <a
          href="mailto:rodriguezr1016@gmail.com"
          className="text-primary underline hover:opacity-80"
        >
          rodriguezr1016@gmail.com
        </a>
      </>
            )
        })
        next.push({
            type: "text",
            value:(
                <>
            {"   "}github:{" "}
        <a
          href="https://github.com/rodriguezr1016/"
          className="text-primary underline hover:opacity-80"
        >
          https://github.com/rodriguezr1016/
        </a>
      </>
            )
        })
        next.push({
            type: "text",
            value:(
                <>
            {"   "}linkedin:{" "}
        <a
          href="https://www.linkedin.com/in/rene-rodriguez-570648329/"
          className="text-primary underline hover:opacity-80"
        >
          https://www.linkedin.com/in/rene-rodriguez-570648329/
        </a>
      </>
            )
        })
        break;

      case "clear":
        // Don’t append; just clear to a clean state
        setLines([{ type: "prompt", cmd: "whoami" },
    { type: "text", value: user },
    { type: "prompt", cmd: "ls skills/" },
    { type: "grid", values: skills },]);
        return;

      default:
        addText(`command not found: ${base}`);
        addText(`type "help" to see available commands`);
        break;
    }

    setLines((prev) => [...prev, ...next]);
  };

  return (
    <div className="w-full h-full max-w-4xl mx-auto">
      <div className="relative bg-slate-900 rounded-xl border border-slate-700 shadow-2xl overflow-hidden font-mono text-sm sm:text-base leading-relaxed">
        {/* Header */}
        <div className="bg-slate-800 px-4 py-3 flex items-center gap-2 border-b border-slate-700">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500/80" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <div className="w-3 h-3 rounded-full bg-green-500/80" />
          </div>
          <div className="mx-auto text-slate-400 text-xs">zsh — 80×24</div>
        </div>

        {/* Body */}
        <div
          className="p-6 text-slate-300"
          onMouseDown={focusInput}
          role="presentation"
        >
          <div
  ref={containerRef}
  className="max-h-[323px] min-h-[323px] overflow-y-auto pr-2"
>

            {lines.map((line, idx) => {
              if (line.type === "prompt") {
                return (
                  <div key={idx} className="flex gap-3">
                    <span className="text-primary">➜</span>
                    <span className="text-emerald-400">{cwd}</span>
                    <span>{line.cmd}</span>
                  </div>
                );
              }

              if (line.type === "grid") {
                return (
                  <div
                    key={idx}
                    className="mt-1 grid grid-cols-2 sm:grid-cols-3 gap-x-6 text-slate-400"
                  >
                    {line.values.map((v) => (
                      <span key={v}>{v}</span>
                    ))}
                  </div>
                );
              }

              return (
                <div key={idx} className="mt-1 text-slate-400 whitespace-pre-wrap">
                  {line.value}
                </div>
              );
            })}

            {/* Active input line */}
            <form
              className="flex gap-3 mt-4"
              onSubmit={(e) => {
                e.preventDefault();
                runCommand(input);
                setInput("");
              }}
            >
              <span className="text-primary">➜</span>
              <span className="text-emerald-400">{cwd}</span>

              <div className="flex-1 flex items-center gap-2">
                <input
                  ref={inputRef}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  className="w-full bg-transparent outline-none text-slate-200 placeholder:text-slate-600"
                  placeholder='type "help"'
                  spellCheck={false}
                  autoCapitalize="off"
                  autoCorrect="off"
                />
                <span className="animate-pulse text-slate-400">|</span>
              </div>
            </form>

            <div ref={bottomRef} />
          </div>
        </div>
      </div>
    </div>
  );
}
