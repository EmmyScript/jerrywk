import { Card } from "react-bootstrap"
import { AiFillHeart } from "react-icons/ai"


const Folders = ({val, likedFiles, onToggle} : any ) => {

    const handleToggle =() => {
        onToggle(val.id)
    }
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
      </Card>
  )
}

export default Folders