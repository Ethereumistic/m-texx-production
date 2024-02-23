import { getSettings } from "@/lib/sanity/client";
import About from "./about";

export default async function ContactPage() {
  const settings = await getSettings();
  return <About settings={settings} />;
}
