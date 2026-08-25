import Cover from "./components/Cover";
import Chapter from "./components/Chapter";
import Finale from "./components/Finale";
import MemoryWall from "./components/MemoryWall";
import PageNav from "./components/PageNav";
import SherkhanTest from "./components/SherkhanTest";
import { chapters, finale, quiz } from "./data/content";

function App() {
  const navSections = [
    ...chapters.map((c) => ({ id: c.id, tabLabel: c.tabLabel })),
    { id: "sherkhan-test", tabLabel: quiz.tabLabel },
    { id: "finale", tabLabel: finale.tabLabel },
    { id: "memory-wall", tabLabel: "Photo Wall" },
  ];

  return (
    <main className="w-full overflow-hidden">
      <Cover
        onEnter={() =>
          document.getElementById(chapters[0].id)?.scrollIntoView({ behavior: "smooth" })
        }
      />
      <PageNav sections={navSections} />
      {chapters.map((chapter, i) => (
        <Chapter key={chapter.id} chapter={chapter} index={i} />
      ))}
      <SherkhanTest />
      <Finale />
      <MemoryWall />
    </main>
  );
}

export default App;
