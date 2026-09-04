const postsEl = document.getElementById("posts");
const filtersEl = document.getElementById("filters");
const searchEl = document.getElementById("search");
const emptyEl = document.getElementById("empty");
document.getElementById("year").textContent = new Date().getFullYear();

let activeTag = "all";

const tags = ["all", ...new Set(posts.flatMap(p => p.tags))];

tags.forEach(tag => {
  const btn = document.createElement("span");
  btn.textContent = tag;
  btn.className = "filter" + (tag === "all" ? " active" : "");
  btn.onclick = () => {
    document.querySelectorAll(".filter").forEach(f => f.classList.remove("active"));
    btn.classList.add("active");
    activeTag = tag;
    render();
  };
  filtersEl.appendChild(btn);
});

function render() {
  postsEl.innerHTML = "";
  const query = searchEl.value.toLowerCase();

  const filtered = posts.filter(p => {
    const matchTag = activeTag === "all" || p.tags.includes(activeTag);
    const matchSearch = p.title.toLowerCase().includes(query);
    return matchTag && matchSearch;
  });

  emptyEl.hidden = filtered.length > 0;

  filtered.forEach(p => {
    const div = document.createElement("div");
    div.className = "post";
    div.innerHTML = `
      <h3><a href="post.html?p=${p.slug}">${p.title}</a></h3>
      <div class="meta">${p.date} · ${p.read}</div>
    `;
    postsEl.appendChild(div);
  });
}

searchEl.addEventListener("input", render);
render();
