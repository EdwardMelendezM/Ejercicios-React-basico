function getrandom() {
  const random_string =
    Math.random().toString(32).substring(2, 5) +
    Math.random().toString(32).substring(2, 5);
  return random_string;
}

export function add(state, action) {
  const url = action.data;
  const shortUrl = getrandom();
  const temp = [...state.items];
  const newItem = {
    url: url.toString(),
    shortUrl: shortUrl,
    view: 0,
  };

  localStorage.setItem("urls", JSON.stringify([...temp, newItem]));
  return { items: [...temp, newItem] };
}

export function load(state, action) {
  const data = localStorage.getItem("urls");
  if (data) {
    const temp = JSON.parse(data);
    return { items: [...temp] };
  }
  return { items: [] };
}

export function addView(state, action) {
  const data = localStorage.getItem("urls");
  if (data) {
    const items = JSON.parse(data);

    const item = items.find((i) => i.shortUrl === action.data);
    if (item) {
      item.view++;
      localStorage.setItem("urls", JSON.stringify(items));
      return { items: [...items] };
    }
  }
}
