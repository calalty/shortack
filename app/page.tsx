import { Header } from "@/components/ui/header";
import { Shortack } from "@/icons/shortack";
import { navigationMenuMock } from "@/mocks/navigation-menu.mock";

export default function Home() {
  return (
    <main>
      <Header
        navigationItems={{
          items: navigationMenuMock,
        }}
        actionLinks={[{ variant: "default", children: "Default", url: "#" }]}
        logo={<Shortack />}
      />
    </main>
  );
}
