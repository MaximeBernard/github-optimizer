console.log("Github Optimizer is running!");

if (
  document.location.hostname === "github.com" &&
  document.location.pathname.includes("/orgs/kymono/projects")
) {
  console.log("Github Projects detected! Cleaning...");

  document.querySelectorAll("[role=navigation]")[0].remove();
  document.querySelectorAll("header")[0].remove();
  document.querySelectorAll('[data-testid="tab-nav"]')[0].remove();

  console.log("Cleaned up complete!");
}
