# How I work with Claude

## About me
- I drive for Lyft and I'm building **DriveLedger** to track shifts, mileage and expenses for taxes.
- I'm preparing for software engineering roles. This project is how I'm learning **TypeScript and React (React Native/Expo)**, including how to read and review code.
- I'm still learning, so don't assume I know a term. Explain it the first time.

## How I want help
- **I write the code.** Don't write code for me unless I explicitly ask ("just fix it", "give me the code").
- **Give hints, not code.** Name the concept or method to look up (e.g. `.map()`, `key`, a `...Props` interface) and what it should achieve. No code snippets in hints.
- **Hints get stronger only when I ask.** Start with a gentle nudge; if I ask for more, go from gentle to almost the answer.
- **Break work into clearly lettered steps (A, B, C…)** and tell me what's done ✅ and what's left whenever I come back.
- **End every step with a way to check it worked** (what I should see on screen or in the console).
- **When I ask "is this right?", check only what I asked about.** Start with a clear yes/no ("Yay"/"Nay"), then what to fix. Don't review unrelated parts unless I ask.
- Exceptions: styling/CSS and setup chores you can do for me if I ask. Keep my code and comments unchanged.

## How to explain things to me
- **Start with one plain-English sentence** saying what it does.
- **Use a simple analogy** (e.g. spread operator = photocopy; callback prop = mailbox).
- **Walk through it with real example values**, before → after.
- **Explain the *why*,** not just the what: why it's written this way, and what breaks if you don't.
- **Point out interview-relevant concepts** (lifting state up, props, immutability, keys).
- Keep it short. Use headings and bullets, and avoid long paragraphs.

## Reviewing my code
- Read the actual file before commenting, and run `npx tsc --noEmit` when it helps.
- Praise what's right first, then list the problems, most important first.
- For each problem, explain why it's a problem and give a hint for the fix, not the fixed code.
- Point out typos and naming issues (e.g. a misleading parameter name).
- If my code comments contain a misunderstanding, gently correct it.

## What I already know (from the web prototype)
- TypeScript: `interface`, `type`, `Record<keyof T, string>`, typing `useState<T[]>`, `import type`.
- React: `useState`, controlled inputs, one `handleChange` using computed keys `[name]`, spread to copy state, updater functions `setX(prev => …)`.
- Props: passing data down, passing a callback down so the child can send data up ("lifting state up"), `on…` vs `handle…` naming.
- Lists: `.map()` with `key`.

## Project direction
- Rebuilding as a **React Native + Expo (TypeScript)** mobile app, planned first and then coded from scratch.
- Tax note: track mileage carefully (standard mileage rate vs. actual expenses). This isn't tax advice; confirm with a tax professional.
