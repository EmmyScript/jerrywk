import { Card } from "react-bootstrap";
import { AiFillHeart, AiFillPrinter } from "react-icons/ai";
import { BiSolidCloudDownload } from "react-icons/bi";
import { useState } from "react";
import { downloadFile } from "../services/downloadFiles";
import PopModal from "./PopModal";

const CustomCard = ({ val, likedFiles, onToggle }: any) => {
  const [isPhoto, setIsPhoto] = useState<boolean>(false);

  // image array

  const printFile = () => {
    if (val.path) {
      window.open(val.path, "_blank");
    }
  };

  const handleToggle = () => {
    onToggle(val.id);
  };

  // console.log("likedFiles", likedFiles);

  return (
    
    <Card className="custom-card p-3">
      <AiFillHeart
        className="heart-icon"
        style={{
          color: likedFiles.some(
            (file: any) => file.id === val.id && file.isLiked
          )
            ? "red"
            : "#002",
          backgroundColor: "#ccc",
        }}
        onClick={handleToggle}
      />
      {val.src ? (
        <Card.Img
          variant="top"
          src={val?.src}
          alt="Card Image"
          className="card-image"
          onClick={() => setIsPhoto(!isPhoto)}
          title="Preview Image"
        />
      ) : (
        <div className="icon-placeholder">{val.icon}</div>
      )}
      {val.isDownloaded && (
        <h5 className="download-printer">
          <BiSolidCloudDownload
            size={30}
            className="print-icon"
            onClick={() => downloadFile(val.path)}
          />
          <AiFillPrinter size={24} className="print-icon" onClick={printFile} />
        </h5>
      )}
      <>
        {/* {isPhoto && (
          <Lightbox
            open={isPhoto}
            close={() => setIsPhoto(false)}
            slides={imageArr}
          />
        )} */}

        <PopModal val={val} isPhoto={isPhoto} setIsPhoto={setIsPhoto} />
      </>
      <Card.Footer className="custom-footer bg-red">
        <div className="footer-icons">
          <span className="icon">{val.thumbnail}</span>
        </div>
        <div className="footer-text">
          <h5>{val.title}</h5>
          <p className="text-muted">{val.addedDate}</p>
        </div>
      </Card.Footer>   
    </Card>
    
  );
};


export default CustomCard;
