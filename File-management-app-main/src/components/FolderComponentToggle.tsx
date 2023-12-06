import BrunchMemoriesVilla from "./BrunchMemoriesVilla";
import ProjectReferences from "./ProjectReferences";
import TripToEffielTowerParis from "./TripToEffielTowerParis";
import WeddingDecorations from "./WeddingDecorations";

function FolderComponentToggle({
  folder,
  selectedSort,
  search,
}: {
  folder: string;
  selectedSort: string;
  search: string;
}) 

{
  const renderSwitch = () => {
    switch (folder) {
      case "Brunch Memories villa":
        return (
          <BrunchMemoriesVilla selectedSort={selectedSort} search={search} />
        );
      case "Project referencesiiiiii":
        return (
          <ProjectReferences selectedSort={selectedSort} search={search} />
        );
      case "Trip to Effiel Tower, ":
        return (
          <TripToEffielTowerParis selectedSort={selectedSort} search={search} />
        );
      case "Wedding Decorations":
        return (
          <WeddingDecorations selectedSort={selectedSort} search={search} />
        );
    }
  };
  return <div className="container me-3 ms-3">{renderSwitch()}</div>;
}

export default FolderComponentToggle