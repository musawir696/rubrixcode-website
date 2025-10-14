const removeSlashFromPagination = () => {
  if (typeof window === "undefined") return;
  if (document.querySelectorAll(".swiper-pagination")) {
    document.querySelectorAll(".swiper-pagination").forEach((item) => {
      item.innerHTML = item.innerHTML.replace(" / ", "");
    });
  }
};
export default removeSlashFromPagination;
