
import React from 'react';
import AppButton from '../components/AppButton';
import AppInput from '../components/AppInput'
import AppSelect from '../components/AppSelect';
import FolderComponentToggle from '../components/FolderComponentToggle';




const buttonGroups = [
  {
      title: "Brunch Memories villa",
      subtitle: "10mb",
    id: 1,
  },
  {
     title: "Project references",
       subtitle: "240mb",
    id: 2,
  },
  {
     title: "Trip to Effiel Tower, Paris",
         subtitle: "10mb",
     id: 3,
    
  },
  {
     title: "Wedding Decorations",
         subtitle: "240mb",
    id: 4,
  },
  
];

function Home() {
   const [folder, setFolder] = React.useState<string>("Brunch Memories villa");
  const [activeFolder, setActiveFolder] = React.useState<string>("1");
  const [search, setSearch] = React.useState<string>("");
  const [selectedSort, setSelectedSort] = React.useState<string>("");

  const handleDoubleClick = (val: any) => {
    setFolder(val.title);
    setActiveFolder(val.id);
  };

  return (
    <>
      <div className="container mt-5">
        <div className="d-flex justify-content-between align-items-center ms-4 me-4">
          <AppSelect onChange={(e: any) => setSelectedSort(e.target.value)} />
          <AppInput
            type="text"
            placeholder="search..."
            className="custom-form-control ms-3"
            icon_class="bi bi-search"
            name="search"
            onChange={(e: any) => setSearch(e.target.value)}
          />
        </div>

        <h5 className="fs-5 ms-4 mb-3 mt-3">Folders</h5>
        <div className="scrolling-buttons-container">
          <div className="scrolling-buttons">
            {buttonGroups.length > 1 &&
              buttonGroups.map((val: any, index: number) => (
                <AppButton
                  key={index}
                  title={val.title}
                  subtitle={val.subtitle}
                  onDoubleClick={() => handleDoubleClick(val)}
                  isActive={activeFolder === val.id ? true : false}
                />
              ))}
          </div>
        </div>
        <h5 className="fs-5 ms-4 mb-3">Files</h5>
        <FolderComponentToggle
          folder={folder}
          selectedSort={selectedSort}
          search={search}
        />
        
      </div>
      <footer className="footer mt-auto py-3 bg-light mb-2">
        <div className="container">
          <span className="text-muted">@emmy:Nov-2023</span>
          <br></br>
         
          
          
       
        </div>
      </footer>
      
      
    </> 

  
  
  );
}



export default Home