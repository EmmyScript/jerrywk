import { Card } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import { AiFillHeart } from "react-icons/ai";
import { TiTimes } from "react-icons/ti";

function PopModal({ isPhoto, setIsPhoto, val }: any) {
  const handleClose = () => setIsPhoto(!isPhoto);

  return (
    <>
      <Modal show={isPhoto} onHide={handleClose} centered backdrop="static">
        <Modal.Header className="d-flex justify-content-between  align-items-end">
          <span className=""></span>
          <button
            className="btn btn-secondary d-flex justify-content-between align-items-center"
            onClick={handleClose}
          >
            <span className="bi bi-times">
              <TiTimes />
            </span>
            <span className="bi bi-times">Close</span>
          </button>
        </Modal.Header>
        <Modal.Body className="text-center">
          <Card className="custom-cards p-3">
            <AiFillHeart
              className="heart-icon"
              style={{
                backgroundColor: "#ccc",
              }}
              //   onClick={handleToggle}
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

            <Card.Footer className="custom-footer bg-white">
              <div className="footer-icons">
                <span className="icon">{val.thumbnail}</span>
              </div>
              <div className="footer-text">
                <h5>{val.title}</h5>
                <p className="text-muted">{val.addedDate}</p>
              </div>
            </Card.Footer>
          </Card>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default PopModal;
