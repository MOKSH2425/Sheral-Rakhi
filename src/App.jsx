import Cover from "./components/Cover";
import Chapter from "./components/Chapter";
import Finale from "./components/Finale";
import MemoryWall from "./components/MemoryWall";
import SherkhanTest from "./components/SherkhanTest";
import PageNav from "./components/PageNav";
import { chapters, finale } from "./data/content";

function App() {
  const navSections = [
    ...chapters.map((c) => ({ id: c.id, tabLabel: c.tabLabel })),
    { id: "sherkhan-test", tabLabel: "Sherkhan Test" },
    { id: "finale", tabLabel: finale.tabLabel },
  ];

  return (
    <div className="w-full">
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
    </div>
  );
}

export default App;
