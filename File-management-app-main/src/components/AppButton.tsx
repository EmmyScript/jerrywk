import React from "react";
import { Button } from "react-bootstrap";
import { AiOutlineFolderOpen } from "react-icons/ai";

interface IconButtonProps {
  title: string;
  subtitle: string;
  onDoubleClick: () => void;
  isActive: boolean;
}

const AppButton: React.FC<IconButtonProps> = ({
  title,
  subtitle,
  onDoubleClick,
  isActive,
}) => {
  return (
    <Button
      className={`d-flex align-items-center buttonColor ${
        isActive ? "active" : ""
      }`}
      onDoubleClick={onDoubleClick}
      title={"Double click to open folder"}
    >
      <AiOutlineFolderOpen size={24} className="me-2" />
      <div className="text-start">
        <div>{title}</div>
        <div className="text-muted">{subtitle}</div>
      </div>
    </Button>
  );
};

export default AppButton;
