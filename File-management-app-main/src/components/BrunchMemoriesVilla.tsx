import CustomCard from "./CustomCard"
import teacher from "../assets/images/teacher.jpeg"
import hangout from "../assets/images/hangout.jpeg"
import footballing from "../assets/images/footballing.jpeg"
import samplePdf from "../assets/rawFiles/sample.pdf"
import {  BsFileImage, BsFillFileEarmarkPdfFill } from "react-icons/bs";
import { AiFillFileExcel } from "react-icons/ai";
import { useState } from "react";

const arrayOfFiles = [
  {
    id: 1,
    title: "Brunch with friends idoko esther",
    addedDate: "13th July 2022",
    isDownloaded: false,
    fileType: "image",
    src: teacher,
    icon: "",
    path: "",
    thumbnail: <BsFileImage size={20} className="text-warning" />,
    isLiked: false,
  },
  {
    id: 2,
    title: "Project invoice template",
    addedDate: "13th July 2022",
    isDownloaded: true,
    fileType: "pdf",
    src: "",
    icon: <BsFillFileEarmarkPdfFill size={35} className="text-danger" />,
    path: samplePdf,
    thumbnail: <BsFillFileEarmarkPdfFill size={20} className="text-danger" />,
    isLiked: false,
  },
  {
    id: 3,
    title: "Foodcourt hangout 2,0",
    addedDate: "13th July 2023",
    isDownloaded: false,
    fileType: "image",
    src: hangout,
    icon: "",
    path: "",
    thumbnail: <BsFileImage size={20} className="text-warning" />,
    isLiked: false,
  },
  {
    id: 4,
    title: "Pricing analysis format",
    addedDate: "13th July 2021",
    isDownloaded: true,
    fileType: "pdf",
    src: "",
    icon: <AiFillFileExcel size={35} className="text-success" />,
    path: samplePdf,
    thumbnail: <AiFillFileExcel size={20} className="text-success" />,
    isLiked: false,
  },
  {
    id: 5,
    title: "Project invoice template",
    addedDate: "13th July 2022",
    isDownloaded: true,
    fileType: "pdf",
    src: "",
    icon: <BsFillFileEarmarkPdfFill size={35} className="text-danger" />,
    path: samplePdf,
    thumbnail: <BsFillFileEarmarkPdfFill size={20} className="text-danger" />,
    isLiked: false,
  },
  {
    id: 6,
    title: "Brunch with friends",
    addedDate: "13th July 2022",
    isDownloaded: false,
    fileType: "image",
    src: teacher,
    icon: "",
    path: "",
    thumbnail: <BsFileImage size={20} className="text-warning" />,
    isLiked: false,
  },
  {
    id: 7,
    title: "Pricing analysis format",
    addedDate: "13th July 2020",
    isDownloaded: true,
    fileType: "pdf",
    src: "",
    icon: <AiFillFileExcel size={35} className="text-success" />,
    path: samplePdf,
    thumbnail: <AiFillFileExcel size={20} className="text-success" />,
    isLiked: false,
  },
  {
    id: 8,
    title: "Mali youth inc employment",
    addedDate: "13th July 2022",
    isDownloaded: false,
    fileType: "image",
    src: footballing,
    icon: "",
    path: "",
    thumbnail: <BsFileImage size={20} className="text-warning" />,
    isLiked: false,
  },
];

function BrunchMemoriesVilla({
  selectedSort,
  search,
}: {
  selectedSort: string;
  search: string;
}) {
  const [likedFiles, setLikedFiles] = useState<any[]>(arrayOfFiles);

  const handleToggle = (fileId: number) => {
    const updatedLikedFiles = likedFiles.map((file) => {
      if (file.id === fileId) {
        return { ...file, isLiked: !file.isLiked };
      }
      return file;
    });

    setLikedFiles(updatedLikedFiles);
  };
  const sortedFile = likedFiles.sort((a, b) => {
    if (selectedSort === "name") {
      return a.title.localeCompare(b.title);
    } else if (selectedSort === "date") {
      return a.addedDate.localeCompare(b.addedDate);
    }
    return 0;
  });

  const SearchFile = likedFiles.filter((val) => {
    return val.title?.toLowerCase().includes(search);
  });

  return (
    <div className="row">
      <>
        {SearchFile.length > 0
          ? SearchFile.map((val: any, i) => (
              <div className="col-md-3 mb-3" key={i}>
                <CustomCard
                  key={val.id}
                  val={val}
                  likedFiles={likedFiles}
                  onToggle={handleToggle}
                />
              </div>
            ))
          : sortedFile.map((val: any, i) => (
              <div className="col-md-3 mb-3" key={i}>
                <CustomCard
                  key={val.id}
                  val={val}
                  likedFiles={likedFiles}
                  onToggle={handleToggle}
                />
              </div>
            ))}
      </>
    </div>
  );
}

export default BrunchMemoriesVilla
