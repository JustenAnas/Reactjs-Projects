import axios from "axios";
import { useEffect, useState } from "react";
import Container from "./Container";

const Box = ({ category, setCategory }) => {
  const [shoes, setShoes] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

const filteredShoes = shoes.filter((shoe, index) => {
  const categories = ["Men", "Women", "Children", "Sports"];
  const shoeCat = categories[index % categories.length];

  // 1. If nothing is selected, show everything
  if (!category || category === "" || category === "shoes") return true;

  // 2. Check if the clicked Category matches (e.g., "Men" === "Men")
  const isCategoryMatch = shoeCat === category;

  // 3. Check if the Search term matches the shoe data or the category name
  const isSearchMatch = 
    shoe.alt.toLowerCase().includes(category.toLowerCase()) || 
    shoeCat.toLowerCase().includes(category.toLowerCase());

  // Return the shoe if it matches EITHER the category OR the search term
  return isCategoryMatch || isSearchMatch;
});

 
  const itemsPerPage = 6;
  const lastIndex = currentPage * itemsPerPage;
  const firstIndex = lastIndex - itemsPerPage;
  const currentShoes = filteredShoes.slice(firstIndex, lastIndex);

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(
        "https://api.pexels.com/v1/search?query=shoes&per_page=80",
        {
          headers: {
            Authorization: import.meta.env.VITE_PEXELS_API_KEY,
          },
        }
      );
      setShoes(response.data.photos);
    };
    getData();
  }, []);

  useEffect(() => {
    setCurrentPage(1);
  }, [category]);

  return (
    <Container
      shoeData={currentShoes}
      setCurrentPage={setCurrentPage}
      currentPage={currentPage}
      selectedCategory={category}
    />
  );
};

export default Box;