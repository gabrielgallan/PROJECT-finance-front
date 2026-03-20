import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { Inter, Share_Tech } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const shareTech = Share_Tech({ subsets: ["latin"], weight: "400" });

const titleGradientClass =
  "bg-gradient-to-b from-[#a1a1aa] to-white bg-clip-text text-transparent";
const titleMainClass =
  "leading-[1.02] font-black tracking-[-0.01em] sm:tracking-[-0.012em]";
const bodyLeadClass =
  "text-center text-base leading-[1.4] text-[#adb9bb] sm:text-xl";
const buttonBaseClass =
  "inline-flex items-center justify-center rounded-md text-[15px] font-bold tracking-[0.01em] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60";
const buttonPrimaryClass = `${buttonBaseClass} bg-gradient-to-b from-[#adadad] to-white text-[#0b1020] shadow-[0_8px_20px_-10px_rgba(255,255,255,0.85)] hover:brightness-105 active:translate-y-px`;
const buttonSecondaryClass = `${buttonBaseClass} border border-[#2a3448] bg-transparent text-[#e2e8f0] backdrop-blur-[20px] hover:border-[#3a4864] hover:bg-[#252a34a8] active:translate-y-px`;

export const metadata: Metadata = {
  title: "Valora Landing",
};

const features = [
  {
    title: "Smart expense tracking",
    description:
      "Automatically categorize spending and surface trends so you always know where your money goes.",
  },
  {
    title: "Budgets that adapt",
    description:
      "Set monthly limits by category and get real-time alerts before you overspend.",
  },
  {
    title: "Cash flow forecasting",
    description:
      "Project upcoming balances from recurring bills, income, and planned transfers.",
  },
  {
    title: "Goal-based saving",
    description:
      "Create savings goals, automate contributions, and track progress toward every milestone.",
  },
  {
    title: "Account consolidation",
    description:
      "View checking, credit, loans, and investments in one secure financial dashboard.",
  },
  {
    title: "Actionable insights",
    description:
      "Receive personalized recommendations to reduce fees, optimize spending, and grow savings.",
  },
];

export default function LandingPage() {
  return (
    <main
      className={`${inter.className} min-h-screen overflow-x-clip bg-[#09090b] text-white`}
    >
      <div className="mx-auto flex w-full max-w-360 flex-col gap-5 px-4 py-6 sm:px-7">
        <section className="relative isolate flex min-h-245 flex-col gap-4 overflow-hidden sm:min-h-[1120px] lg:min-h-[1579px]">
          <div className="relative z-10 flex w-full flex-col items-center gap-16 px-0 pt-7 sm:gap-[114px] sm:px-10 sm:pb-16">
            <nav className="flex w-full items-center justify-between rounded-2xl border-0 px-4 py-[14px] shadow-[0_4px_20px_0_rgba(0,0,0,0.49)] backdrop-blur-sm sm:px-5">
              <span className="text-lg font-bold text-[#e5e7eb]">Valora</span>

              <div className="flex items-center gap-3 sm:gap-6">
                <Link
                  href="/auth/sign-in"
                  className="text-sm font-medium text-[#c2c4c8] hover:text-white"
                >
                  Sign in
                </Link>
                <Link
                  href="/auth/sign-up"
                  className={`${shareTech.className} ${buttonPrimaryClass} h-9 rounded-lg px-4 text-[13px] text-[#1b1b1b] sm:h-10 sm:px-[18px] sm:text-[15px]`}
                >
                  Get Started
                </Link>
              </div>
            </nav>

            <div className="flex w-full max-w-245 flex-col items-center gap-8 sm:gap-12">
              <h1
                className={`${shareTech.className} ${titleGradientClass} ${titleMainClass} text-center text-[clamp(2.4rem,9vw,6rem)]`}
              >
                Take control of every dollar with confidence
              </h1>

              <p className={`w-full max-w-150 ${bodyLeadClass}`}>
                Valora helps you track spending, set budgets, and grow savings
                with clear insights for every account.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-3">
                <Link
                  href="/auth/sign-up"
                  className={`${shareTech.className} ${buttonPrimaryClass} h-11.25 px-5.5`}
                >
                  Start for free
                </Link>

                <Link
                  href="https://github.com/gabrielgallan/PROJECT-valora-front"
                  className={`${shareTech.className} ${buttonSecondaryClass} h-11.25 px-5.5`}
                >
                  Github
                </Link>
              </div>
            </div>
          </div>

          <Image
            src="/landing/mockup.png"
            alt="Valora dashboard preview"
            width={1440}
            height={1069}
            priority
            className="pointer-events-none absolute left-0 top-[430px] h-auto w-full"
          />
        </section>

        <section className="flex w-full flex-col items-center gap-16 py-8 sm:gap-20 sm:py-0">
          <h2
            className={`${shareTech.className} ${titleGradientClass} ${titleMainClass} w-full max-w-[548px] text-center text-[clamp(2.1rem,6.2vw,3rem)]`}
          >
            Financial clarity for every decision.
          </h2>

          <div className="grid w-full grid-cols-1 gap-10 sm:grid-cols-2 sm:gap-12 lg:grid-cols-3 lg:gap-x-12 lg:gap-y-12">
            {features.map((feature) => (
              <article
                key={feature.title}
                className="flex w-full flex-col gap-4"
              >
                <h3
                  className={`${titleGradientClass} text-lg font-bold leading-[1.08]`}
                >
                  {feature.title}
                </h3>
                <p className="text-base leading-[1.4] text-[#9c9c9c]">
                  {feature.description}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="relative isolate mt-14 h-[640px] w-full overflow-hidden sm:mt-20 sm:h-[860px] lg:mt-24 lg:h-[998px]">
          <div className="relative z-10 flex h-full w-full flex-col items-center px-0 pt-7 sm:px-10 sm:pb-16">
            <div className="flex w-full max-w-[980px] flex-col items-center gap-10 sm:gap-16">
              <h2
                className={`${shareTech.className} ${titleGradientClass} ${titleMainClass} w-full max-w-[719px] text-center text-[clamp(2.3rem,7.5vw,4.5rem)]`}
              >
                Financial clarity you can plan on.
              </h2>

              <p className={`w-full max-w-[605px] ${bodyLeadClass}`}>
                From daily cash flow to long-term goals, Valora gives you
                reliable dashboards, secure account connections, and actionable
                insights.
              </p>
            </div>
          </div>

          <Image
            src="/landing/rising-large.png"
            alt="Decorative rising glow"
            width={1440}
            height={1069}
            className="pointer-events-none absolute left-0 top-[210px] h-auto w-full sm:top-[159px]"
          />
        </section>

        <footer className="flex w-full flex-col gap-4">
          <div className="h-[82px] w-full border-b border-white/30" />

          <div className="flex w-full flex-col items-start gap-2 pb-2 text-xs text-[#7d7d7d] sm:flex-row sm:items-center sm:justify-between sm:gap-4">
            <span>© 2026 Valora Financial. All rights reserved.</span>
            <Link href="#" className="transition-colors hover:text-white/80">
              Privacy &amp; Terms
            </Link>
          </div>
        </footer>
      </div>
    </main>
  );
}
