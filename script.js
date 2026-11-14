const versionButton = document.getElementById("versionButton");
const statusElement = document.getElementById("status");

versionButton.addEventListener("click", () => {
  statusElement.textContent = "Website đang hoạt động · Phiên bản 1.0";
});
