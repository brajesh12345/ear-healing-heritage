import { createFileRoute } from "@tanstack/react-router";
import LandingPage from "@/components/landing/LandingPage";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "भारतीय कर्णबिंदु चिकित्सा — FREE Live Webinar | अक्षता मोहिते" },
      { name: "description", content: "FREE Live Webinar में सीखें भारत की प्राचीन Auricular (कर्णबिंदु) चिकित्सा — सिर्फ कान के बिंदुओं से दर्द, तनाव और नींद में सहायता।" },
      { property: "og:title", content: "भारतीय कर्णबिंदु चिकित्सा — FREE Live Webinar" },
      { property: "og:description", content: "अक्षता मोहिते के साथ FREE Live Webinar — सीमित सीटें, अभी Register करें।" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: LandingPage,
});
