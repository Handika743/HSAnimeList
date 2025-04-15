export const getAnimeResponse = async (resource, query) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/${resource}?${query}`
  );
  const anime = await response.json();
  return anime;
};

export const getNestedAnimeResponse = async (resource, objectProperty) => {
  const response = await getAnimeResponse(resource);

  // 🔥 Pastikan data tidak undefined sebelum .flatMap()
  if (!response || !response.data) {
    console.warn("Data masih kosong, coba lagi...");
    return []; // Kembalikan array kosong agar tidak error
  }

  return response.data.flatMap((item) => item[objectProperty] || []);
};

export const reproduce = (data, gap = 12) => {
  const first = ~~(Math.random() * (data.length - gap));
  const last = first + gap;
  console.log(first, last);
  const response = {
    data: data.slice(first, last),
  };
  return response;
};
