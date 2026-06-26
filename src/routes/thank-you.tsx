import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { CheckCircle2, MessageCircle, CalendarCheck, Clock, Gift, ChevronRight } from "lucide-react";

const WHATSAPP_URL = "https://chat.whatsapp.com/FFyouJSnHGQEWWNZWSeojC";

export const Route = createFileRoute("/thank-you")({
  head: () => ({
    meta: [
      { title: "धन्यवाद! Registration सफल — कर्णबिंदु चिकित्सा Webinar" },
      { name: "description", content: "आपका Registration सफल हुआ। WhatsApp Group join करें और Webinar में मिलते हैं।" },
      { property: "og:title", content: "धन्यवाद! Registration सफल" },
      { property: "og:url", content: "/thank-you" },
      { name: "robots", content: "noindex" },
    ],
    links: [{ rel: "canonical", href: "/thank-you" }],
  }),
  component: ThankYou,
});

function ThankYou() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <div aria-hidden className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute -top-40 -right-32 h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle,oklch(0.86_0.13_82/0.4),transparent_70%)] blur-3xl" />
        <div className="absolute bottom-0 -left-32 h-[480px] w-[480px] rounded-full bg-[radial-gradient(circle,oklch(0.58_0.13_160/0.25),transparent_70%)] blur-3xl" />
      </div>

      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-24">
        <motion.div
          initial={{ scale: 0.6, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 140, damping: 14 }}
          className="relative mx-auto grid h-32 w-32 place-items-center"
        >
          <div className="absolute inset-0 rounded-full bg-[var(--gradient-gold)] opacity-40 blur-2xl" />
          <div className="relative grid h-32 w-32 place-items-center rounded-full bg-[var(--gradient-heal)] text-white shadow-[var(--shadow-luxe)]">
            <CheckCircle2 className="h-16 w-16" strokeWidth={2.2} />
          </div>
          <motion.span
            initial={{ scale: 0 }}
            animate={{ scale: [0, 1.4, 1] }}
            transition={{ delay: 0.4, duration: 1.2 }}
            className="absolute -inset-2 rounded-full border-2 border-gold/60"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-10 text-center"
        >
          <h1 className="font-hindi text-5xl font-bold text-secondary sm:text-6xl">
            <span className="text-gradient-gold">धन्यवाद!</span>
          </h1>
          <p className="font-hindi mx-auto mt-4 max-w-xl text-lg text-muted-foreground">
            आपका Registration सफलतापूर्वक हो गया है। अब आगे के तीन कदम पूरे करें।
          </p>
        </motion.div>

        <div className="mt-12 space-y-4">
          <Step n={1} icon={MessageCircle} title="WhatsApp Group Join करें" desc="महत्वपूर्ण updates और reminders के लिए।">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-emerald font-hindi inline-flex items-center gap-2 rounded-full px-7 py-4 text-base font-bold">
              <MessageCircle className="h-5 w-5" /> WhatsApp Group Join करें
            </a>
          </Step>
          <Step n={2} icon={Clock} title="10 मिनट पहले जुड़ें" desc="Webinar शुरू होने से पहले अपना device check कर लें।" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card relative mt-10 overflow-hidden rounded-3xl p-7"
        >
          <div aria-hidden className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[var(--gradient-gold)] opacity-25 blur-2xl" />
          <div className="flex items-start gap-4">
            <div className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-[var(--gradient-gold)] text-secondary shadow-[var(--shadow-gold)]">
              <Gift className="h-7 w-7" />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Bonus</p>
              <p className="font-hindi mt-1 text-lg font-semibold text-secondary">
                WhatsApp Group में महत्वपूर्ण Study Material मिलेगा।
              </p>
            </div>
          </div>
        </motion.div>

        <div className="mt-10 text-center">
          <Link to="/" className="font-hindi inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-secondary">
            ← मुख्य पेज पर वापस जाएँ
          </Link>
        </div>
      </div>

      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
        className="fixed bottom-6 right-5 z-40 grid h-14 w-14 place-items-center rounded-full bg-[var(--gradient-heal)] text-white shadow-[0_15px_40px_-10px_oklch(0.58_0.13_160/0.6)] transition hover:-translate-y-1"
      >
        <MessageCircle className="h-6 w-6" />
      </a>
    </div>
  );
}

function Step({
  n,
  icon: Icon,
  title,
  desc,
  children,
}: {
  n: number;
  icon: typeof MessageCircle;
  title: string;
  desc: string;
  children?: React.ReactNode;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.1 * n }}
      className="glass-card flex flex-col gap-4 rounded-2xl p-6 sm:flex-row sm:items-center"
    >
      <div className="flex items-center gap-4">
        <div className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-secondary font-display text-lg font-bold text-gold">
          {n}
        </div>
        <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-[var(--gradient-gold)] text-secondary shadow-[var(--shadow-gold)] sm:hidden">
          <Icon className="h-6 w-6" />
        </div>
      </div>
      <div className="hidden h-12 w-12 shrink-0 sm:grid sm:place-items-center sm:rounded-xl sm:bg-[var(--gradient-gold)] sm:text-secondary sm:shadow-[var(--shadow-gold)]">
        <Icon className="h-6 w-6" />
      </div>
      <div className="flex-1">
        <p className="font-hindi text-lg font-semibold text-secondary">{title}</p>
        <p className="font-hindi mt-1 text-sm text-muted-foreground">{desc}</p>
        {children && <div className="mt-4">{children}</div>}
      </div>
      {!children && <ChevronRight className="hidden h-5 w-5 text-muted-foreground sm:block" />}
    </motion.div>
  );
}