export const downloadFile = (val: any) => {
  if (val) {
    fetch(val)
      .then((response) => response.blob())
      .then((blob) => {
        const blobUrl = URL.createObjectURL(blob);

        const link = document.createElement("a");
        link.href = blobUrl;
        link.download = val;
        link.click();

        URL.revokeObjectURL(blobUrl);
      })
      .catch((error) => {
        console.error("Error downloading the file:", error);
      });
  }
};
