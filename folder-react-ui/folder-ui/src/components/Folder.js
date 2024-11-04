import { useState } from "react";
import File from "./File";

function Folder({fileTree}) {
  const [expand, setExpand] = useState(false);

  // helper fn
  const isFolder = (ft) => {
    if (ft.type === "directory") {
      return true;
    } else if (ft.type === "file") {
      return false;
    }
    return null;
  }
  
  return (
    <div>
      <div>
        <span style={{cursor: "pointer"}} 
          onClick={() => setExpand(!expand)}>
            {fileTree.name}
        </span>
      </div>
      <div style={{display: expand ? "block": "none", cursor: "pointer"}}>
        {fileTree.contents.map(ft => { 
          if (isFolder(ft)) {
            return (<Folder key={ft.name} fileTree={ft}/>)
          } else {
            return (<File key={ft.name} file={ft}/>)
          }
        })}
      </div>
    </div>
  );
}

export default Folder;
