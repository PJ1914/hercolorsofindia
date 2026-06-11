import { HomepageRenderer } from "@/components/features/homepage/HomepageRenderer";
import { MOCK_HOMEPAGE_SECTIONS } from "@/lib/mock-data";

export default async function HomePage() {
  const sections = MOCK_HOMEPAGE_SECTIONS;

  return (
    <main>
      <HomepageRenderer sections={sections} />
    </main>
  );
}
