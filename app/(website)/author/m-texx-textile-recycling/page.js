import { getSettings } from "@/lib/sanity/client";
import Author from "./author";

export default async function ContactPage() {
  const settings = await getSettings();
  return <Author settings={settings} />;
}
