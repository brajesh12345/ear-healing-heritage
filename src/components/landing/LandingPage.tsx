import { useEffect, useMemo, useState } from "react";
import { motion } from "motion/react";
import { Link } from "@tanstack/react-router";
import {
  Sparkles,
  HeartPulse,
  Brain,
  Moon,
  Activity,
  Leaf,
  GraduationCap,
  Home,
  Stethoscope,
  Dumbbell,
  ShieldCheck,
  BookOpen,
  HandHeart,
  Infinity as InfinityIcon,
  Star,
  Plus,
  Minus,
  CalendarCheck,
  ChevronRight,
  Github,
} from "lucide-react";
import heroAsset from "@/assets/auricular.jpg.asset.json";
import hostAsset from "@/assets/akshata.jpg.asset.json";

const heroImg = heroAsset.url;
const hostImg = hostAsset.url;

const WEBINAR_DATE = (() => {
  const d = new Date();
  d.setMinutes(d.getMinutes() + 10);
  return d;
})();

function useCountdown(target: Date) {
  const [now, setNow] = useState(() => Date.now());
  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);
  const diff = Math.max(0, target.getTime() - now);
  const d = Math.floor(diff / 86400000);
  const h = Math.floor((diff % 86400000) / 3600000);
  const m = Math.floor((diff % 3600000) / 60000);
  const s = Math.floor((diff % 60000) / 1000);
  return { d, h, m, s };
}

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] as const },
};

export default function LandingPage() {
  return (
    <div className="relative overflow-x-hidden text-foreground">
      <Ornaments />
      <Header />
      <Hero />
      <WhyAttend />
      <WhatYouLearn />
      <WhoShouldJoin />
      <WhyTrust />
      <HostBlock />
      <Testimonials />
      <FAQ />
      <FinalCTA />
      <Footer />
      <StickyCTA />
    </div>
  );
}

function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[color-mix(in_oklab,var(--gold)_30%,transparent)] bg-white/70 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 sm:px-8 sm:py-4">
        <Link to="/" className="font-display text-lg font-bold text-secondary sm:text-xl">
          कर्णबिंदु <span className="text-gradient-gold">चिकित्सा</span>
        </Link>
        <div className="flex items-center gap-3">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="grid h-10 w-10 place-items-center rounded-full bg-secondary text-gold shadow-[var(--shadow-soft)] transition hover:scale-110 hover:bg-gold hover:text-secondary"
          >
            <Github className="h-5 w-5" />
          </a>
          <Link
            to="/thank-you"
            className="font-hindi hidden items-center gap-1 rounded-full bg-[var(--gradient-gold)] px-4 py-2 text-sm font-semibold text-secondary shadow-[var(--shadow-gold)] transition hover:brightness-105 sm:inline-flex"
          >
            Register करें
          </Link>
        </div>
      </div>
    </header>
  );
}

function Ornaments() {
  return (
    <>
      <div aria-hidden className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute -top-32 -right-32 h-[480px] w-[480px] rounded-full bg-[radial-gradient(circle,oklch(0.86_0.13_82/0.35),transparent_70%)] blur-3xl" />
        <div className="absolute top-1/3 -left-40 h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle,oklch(0.45_0.12_250/0.22),transparent_70%)] blur-3xl" />
        <div className="absolute bottom-0 right-1/4 h-[380px] w-[380px] rounded-full bg-[radial-gradient(circle,oklch(0.72_0.13_145/0.22),transparent_70%)] blur-3xl" />
      </div>
    </>
  );
}

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-[color-mix(in_oklab,var(--gold)_50%,transparent)] bg-white/70 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-secondary backdrop-blur">
      <span className="h-1.5 w-1.5 rounded-full bg-gold" />
      {children}
    </span>
  );
}

function Hero() {
  const c = useCountdown(WEBINAR_DATE);
  return (
    <section className="relative pt-20 sm:pt-24 lg:pt-32">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 pb-10 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:pb-20">
        <motion.div {...fadeUp} className="relative z-10">
          <Pill>FREE Live Webinar · सीमित सीटें</Pill>
          <h1 className="font-hindi mt-6 text-4xl font-bold leading-[1.5] text-secondary sm:text-5xl lg:text-[3.4rem]">
            भारत की प्राचीन{" "}
            <span className="text-gradient-gold">कर्णबिंदु चिकित्सा</span>{" "}
            सीखें
          </h1>
          <p className="font-hindi mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            सिर्फ कान के विशेष बिंदुओं को सक्रिय करके शरीर के अनेक विकारों में
            सहायता करने वाली भारतीय ऊर्जा चिकित्सा पद्धति को FREE LIVE Webinar
            में सीखें।
          </p>

          <div className="mt-6 flex items-center gap-3">
            <img
              src={hostImg}
              alt="अक्षता मोहिते"
              width={64}
              height={64}
              className="h-14 w-14 rounded-full border-2 border-gold object-cover shadow-[var(--shadow-gold)]"
            />
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Host</p>
              <p className="font-hindi text-lg font-semibold text-secondary">अक्षता मोहिते</p>
            </div>
          </div>

          <div className="mt-8">
            <Link to="/thank-you" className="btn-gold font-hindi inline-flex items-center gap-2 rounded-full px-8 py-4 text-base font-semibold">
              अभी FREE Register करें <ChevronRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-10 grid max-w-xs grid-cols-2 gap-3">
            {[
              { v: c.m, l: "Min" },
              { v: c.s, l: "Sec" },
            ].map((t) => (
              <div key={t.l} className="glass-card rounded-2xl px-3 py-4 text-center">
                <div className="text-gradient-gold text-3xl font-bold tabular-nums">{String(t.v).padStart(2, "0")}</div>
                <div className="mt-1 text-[10px] uppercase tracking-[0.18em] text-muted-foreground">{t.l}</div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="relative"
        >
          <div className="absolute -inset-6 -z-10 rounded-[2rem] bg-[var(--gradient-gold)] opacity-30 blur-2xl" />
          <div className="glass-card overflow-hidden rounded-[1.75rem] p-3">
            <img
              src={heroImg}
              alt="कर्णबिंदु चिकित्सा"
              width={1280}
              height={1280}
              className="aspect-square w-full rounded-[1.4rem] object-cover"
            />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="glass-card absolute -bottom-6 -left-4 hidden items-center gap-3 rounded-2xl px-5 py-3 sm:flex"
          >
            <div className="grid h-10 w-10 place-items-center rounded-full bg-[var(--gradient-heal)] text-white"><Leaf className="h-5 w-5" /></div>
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">100% Natural</p>
              <p className="font-hindi text-sm font-semibold text-secondary">बिना दवा की चिकित्सा</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="glass-card absolute -top-4 -right-2 hidden items-center gap-3 rounded-2xl px-5 py-3 sm:flex float-slow"
          >
            <div className="grid h-10 w-10 place-items-center rounded-full bg-[var(--gradient-gold)] text-secondary"><Sparkles className="h-5 w-5" /></div>
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Live · Hindi</p>
              <p className="font-hindi text-sm font-semibold text-secondary">प्राचीन भारतीय विद्या</p>
            </div>
          </motion.div>
        </motion.div>
      </div>

    </section>
  );
}

function SectionHeading({ eyebrow, title, sub }: { eyebrow: string; title: React.ReactNode; sub?: string }) {
  return (
    <motion.div {...fadeUp} className="mx-auto max-w-3xl text-center">
      <Pill>{eyebrow}</Pill>
      <h2 className="font-hindi mt-5 text-3xl font-bold leading-[1.5] text-secondary sm:text-4xl lg:text-5xl">{title}</h2>
      {sub && <p className="font-hindi mt-4 text-muted-foreground">{sub}</p>}
    </motion.div>
  );
}

function WhyAttend() {
  const items = [
    { icon: Leaf, t: "बिना दवा की प्राकृतिक चिकित्सा" },
    { icon: Sparkles, t: "कान के बिंदुओं द्वारा ऊर्जा संतुलन" },
    { icon: HeartPulse, t: "दर्द प्रबंधन में सहायक" },
    { icon: Brain, t: "तनाव कम करने में सहायक" },
    { icon: Moon, t: "नींद सुधारने में सहायक" },
    { icon: Activity, t: "प्राकृतिक उपचार क्षमता सक्रिय" },
    { icon: GraduationCap, t: "सीखने में आसान" },
    { icon: Home, t: "घर व क्लिनिक दोनों में उपयोगी" },
  ];
  return (
    <section className="section-pad">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Why Attend"
          title={<>क्यों सीखें <span className="text-gradient-gold">कर्णबिंदु चिकित्सा</span>?</>}
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((it, i) => (
            <motion.div key={it.t} {...fadeUp} transition={{ ...fadeUp.transition, delay: i * 0.05 }} className="glass-card group rounded-2xl p-6 transition hover:-translate-y-1 hover:shadow-[var(--shadow-luxe)]">
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-[var(--gradient-gold)] text-secondary shadow-[var(--shadow-gold)] transition group-hover:scale-110">
                <it.icon className="h-6 w-6" />
              </div>
              <p className="font-hindi mt-5 text-base font-semibold leading-snug text-secondary">{it.t}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhatYouLearn() {
  const items = [
    "कर्णबिंदु चिकित्सा क्या है",
    "इसका भारतीय इतिहास",
    "कान का शरीर से संबंध",
    "ऊर्जा बिंदु कैसे कार्य करते हैं",
    "मुख्य उपचार बिंदु",
    "दर्द नियंत्रण",
    "तनाव प्रबंधन",
    "मोटापा एवं Lifestyle Support",
    "Practical Demonstration",
    "Live Q&A Session",
  ];
  return (
    <section className="section-pad relative">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="What You Will Learn"
          title={<>Webinar में आप क्या <span className="text-gradient-gold">सीखेंगे</span></>}
        />
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-2">
          {items.map((t, i) => (
            <motion.div key={t} {...fadeUp} transition={{ ...fadeUp.transition, delay: i * 0.04 }}
              className="glass-card flex items-start gap-4 rounded-2xl p-5">
              <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-secondary text-gold font-display text-base font-bold">
                {String(i + 1).padStart(2, "0")}
              </div>
              <p className="font-hindi pt-1.5 text-base font-medium text-secondary">{t}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhoShouldJoin() {
  const items = [
    { icon: Stethoscope, t: "Doctors" },
    { icon: HandHeart, t: "Therapists" },
    { icon: GraduationCap, t: "Students" },
    { icon: Activity, t: "Health Coaches" },
    { icon: Leaf, t: "Alternative Medicine" },
    { icon: Dumbbell, t: "Yoga Trainers" },
    { icon: Home, t: "Housewives" },
    { icon: Sparkles, t: "Natural Healing Lovers" },
  ];
  return (
    <section className="section-pad">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading eyebrow="Who Should Join" title={<>यह Webinar किसके <span className="text-gradient-gold">लिए</span> है</>} />
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((it, i) => (
            <motion.div key={it.t} {...fadeUp} transition={{ ...fadeUp.transition, delay: i * 0.04 }}
              className="group relative overflow-hidden rounded-2xl border border-[color-mix(in_oklab,var(--gold)_30%,transparent)] bg-white p-6 text-center shadow-[var(--shadow-soft)] transition hover:-translate-y-1">
              <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-[var(--gradient-royal)] text-gold shadow-[var(--shadow-soft)]">
                <it.icon className="h-6 w-6" />
              </div>
              <p className="mt-4 text-base font-semibold text-secondary">{it.t}</p>
              <div aria-hidden className="pointer-events-none absolute inset-x-6 bottom-0 h-px bg-[var(--gradient-gold)] opacity-0 transition group-hover:opacity-100" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyTrust() {
  const items = [
    { icon: BookOpen, t: "Indian Knowledge", d: "पारंपरिक भारतीय ज्ञान का आधार।" },
    { icon: ShieldCheck, t: "Scientific Approach", d: "वैज्ञानिक दृष्टिकोण से समझाया गया।" },
    { icon: GraduationCap, t: "Simple Learning", d: "हर कोई आसानी से सीख सके।" },
    { icon: HandHeart, t: "Practical Demo", d: "Live Demonstration के साथ।" },
    { icon: InfinityIcon, t: "Lifetime Skills", d: "जीवन भर काम आने वाला कौशल।" },
    { icon: Sparkles, t: "Trusted Mentor", d: "अनुभवी मेंटर का मार्गदर्शन।" },
  ];
  return (
    <section className="section-pad relative">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading eyebrow="Why Trust Us" title={<>हम पर <span className="text-gradient-gold">भरोसा</span> क्यों</>} />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it, i) => (
            <motion.div key={it.t} {...fadeUp} transition={{ ...fadeUp.transition, delay: i * 0.05 }}
              className="glass-card group relative overflow-hidden rounded-3xl p-7">
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[var(--gradient-gold)] opacity-10 blur-2xl transition group-hover:opacity-25" />
              <div className="grid h-14 w-14 place-items-center rounded-2xl bg-[var(--gradient-gold)] text-secondary shadow-[var(--shadow-gold)]">
                <it.icon className="h-7 w-7" />
              </div>
              <h3 className="mt-5 text-xl font-semibold text-secondary">{it.t}</h3>
              <p className="font-hindi mt-2 text-sm leading-relaxed text-muted-foreground">{it.d}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HostBlock() {
  return (
    <section className="section-pad">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <motion.div {...fadeUp} className="glass-card relative overflow-hidden rounded-[2rem] p-6 sm:p-10">
          <div className="grid items-center gap-8 md:grid-cols-[260px_1fr]">
            <div className="relative mx-auto">
              <div className="absolute -inset-3 rounded-full bg-[var(--gradient-gold)] opacity-40 blur-xl" />
              <img src={hostImg} alt="अक्षता मोहिते" width={260} height={260} loading="lazy"
                className="relative h-56 w-56 rounded-full border-4 border-gold object-cover shadow-[var(--shadow-luxe)]" />
            </div>
            <div>
              <Pill>Your Mentor</Pill>
              <h3 className="font-hindi mt-4 text-3xl font-bold text-secondary sm:text-4xl">अक्षता मोहिते</h3>
              <p className="font-hindi mt-4 text-muted-foreground">
                अक्षता मोहिते भारतीय कर्णबिंदु चिकित्सा की एक समर्पित शिक्षिका हैं
                जो प्राचीन भारतीय ज्ञान को आधुनिक जीवनशैली से जोड़कर हजारों लोगों
                को प्राकृतिक उपचार सिखा चुकी हैं।
              </p>
              <div className="mt-6">
                <Link to="/thank-you" className="btn-gold font-hindi rounded-full px-6 py-3 text-sm font-semibold">Register करें</Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Testimonials() {
  const items = useMemo(
    () => [
      { n: "Dr. Reena Sharma", r: "Ayurvedic Practitioner", t: "अक्षता जी का सेशन बहुत स्पष्ट और प्रभावी था। मरीज़ों पर तुरंत प्रयोग करने योग्य।" },
      { n: "Manish Kulkarni", r: "Physiotherapist", t: "कर्णबिंदु चिकित्सा को इतने सरल तरीके से समझाया कि पहली बार में ही पकड़ में आ गया।" },
      { n: "Priya Nair", r: "Yoga Trainer", t: "मेरी कक्षाओं में अब यह तकनीक जोड़ी है — छात्रों को बहुत लाभ मिल रहा है।" },
      { n: "Sunita Deshmukh", r: "Housewife", t: "घर पर ही परिवार की छोटी-मोटी तकलीफों में सहायता मिलने लगी है।" },
      { n: "Dr. Aman Verma", r: "Naturopath", t: "Indian heritage और scientific clarity का बेहतरीन मेल।" },
    ],
    []
  );
  return (
    <section className="section-pad relative">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading eyebrow="Testimonials" title={<>हमारे <span className="text-gradient-gold">शिष्यों</span> की राय</>} />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it, i) => (
            <motion.div key={it.n} {...fadeUp} transition={{ ...fadeUp.transition, delay: i * 0.05 }}
              className="glass-card relative rounded-3xl p-7">
              <div className="flex gap-1 text-gold">
                {Array.from({ length: 5 }).map((_, k) => <Star key={k} className="h-4 w-4 fill-current" />)}
              </div>
              <p className="font-hindi mt-4 text-base leading-relaxed text-secondary">“{it.t}”</p>
              <div className="mt-6 flex items-center gap-3 border-t border-[color-mix(in_oklab,var(--gold)_30%,transparent)] pt-4">
                <div className="grid h-10 w-10 place-items-center rounded-full bg-[var(--gradient-royal)] text-gold font-display font-bold">
                  {it.n.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-semibold text-secondary">{it.n}</p>
                  <p className="text-xs text-muted-foreground">{it.r}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const items = [
    { q: "Is this webinar free?", a: "Yes, this webinar is completely free. Only registration is required." },
    { q: "Who can join this webinar?", a: "Doctors, therapists, students, health coaches, yoga trainers, housewives, and anyone interested in natural healing." },
    { q: "Will recording be available?", a: "Yes, registered participants will receive the recording for a limited time." },
    { q: "Is medical background necessary?", a: "No, this webinar is designed in simple language for beginners as well." },
    { q: "Can I practice what I learn?", a: "Absolutely. You can start practicing immediately after the practical demonstration." },
  ];
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="section-pad">
      <div className="mx-auto max-w-4xl px-5 sm:px-8">
        <SectionHeading eyebrow="FAQ" title={<>Your <span className="text-gradient-gold">Questions</span></>} />
        <div className="mt-12 space-y-3">
          {items.map((it, i) => {
            const isOpen = open === i;
            return (
              <motion.div key={it.q} {...fadeUp} transition={{ ...fadeUp.transition, delay: i * 0.04 }}
                className="glass-card overflow-hidden rounded-2xl">
                <button onClick={() => setOpen(isOpen ? null : i)} className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left">
                  <span className="text-base font-semibold text-secondary sm:text-lg">{it.q}</span>
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-[var(--gradient-gold)] text-secondary">
                    {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                  </span>
                </button>
                <div className={`grid transition-all duration-300 ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                  <div className="overflow-hidden">
                    <p className="px-6 pb-6 text-sm leading-relaxed text-muted-foreground">{it.a}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="section-pad">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <motion.div {...fadeUp} className="glass-dark relative overflow-hidden rounded-[2rem] p-10 text-center sm:p-16">
          <div aria-hidden className="pointer-events-none absolute inset-0 opacity-30">
            <div className="absolute -top-20 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-[var(--gradient-gold)] blur-3xl" />
          </div>
          <Pill>Limited Seats · Free Webinar</Pill>
          <h2 className="font-hindi mx-auto mt-5 max-w-3xl text-3xl font-bold leading-tight text-gold-soft sm:text-5xl">
            क्या आप <span className="text-gradient-gold">कर्णबिंदु चिकित्सा</span> सीखने के लिए तैयार हैं?
          </h2>
          <p className="font-hindi mx-auto mt-4 max-w-2xl text-gold-soft/80">
            भारत की प्राचीन ऊर्जा चिकित्सा को Live सीखें — सीटें सीमित हैं।
          </p>
          <div className="mt-8 flex justify-center">
            <Link to="/thank-you" className="btn-gold font-hindi inline-flex items-center gap-2 rounded-full px-8 py-4 text-base font-bold">
              अभी Register करें <ChevronRight className="h-5 w-5" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-[color-mix(in_oklab,var(--gold)_30%,transparent)] bg-white/60 backdrop-blur">
      <div className="mx-auto grid max-w-7xl gap-6 px-5 py-10 sm:px-8 md:grid-cols-3 md:items-center">
        <div>
          <p className="font-display text-xl font-bold text-secondary">कर्णबिंदु <span className="text-gradient-gold">चिकित्सा</span></p>
          <p className="mt-2 text-xs text-muted-foreground">© {new Date().getFullYear()} अक्षता मोहिते. All rights reserved.</p>
        </div>
        <nav className="flex flex-wrap justify-center gap-5 text-sm text-secondary">
          <a href="#" className="hover:text-gold">Privacy Policy</a>
          <a href="#" className="hover:text-gold">Terms</a>
          <a href="#" className="hover:text-gold">Contact</a>
        </nav>
        <div className="flex items-center justify-center gap-4 md:justify-end">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="grid h-10 w-10 place-items-center rounded-full bg-secondary text-gold shadow-[var(--shadow-soft)] transition hover:scale-110 hover:bg-gold hover:text-secondary"
          >
            <Github className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}

function StickyCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-[color-mix(in_oklab,var(--gold)_30%,transparent)] bg-white/85 px-4 py-3 backdrop-blur sm:hidden">
      <Link to="/thank-you" className="btn-gold font-hindi block w-full rounded-full px-4 py-3 text-center text-sm font-bold">
        अभी FREE Register करें
      </Link>
    </div>
  );
}


export { CalendarCheck };