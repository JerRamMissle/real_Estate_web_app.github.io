import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { Flex, Box, Text, Icon } from "@chakra-ui/react";
import { BsFilter } from "react-icons/bs";

import Property from "../components/Property";
import SearchFilters from "../components/SearchFilter";
import { baseUrl, fetchApi } from "../utils/fetchApi";

const Search = ({ initialProperties }) => {
  const [searchFilters, setSearchFilters] = useState(false);
  const [properties, setProperties] = useState(initialProperties || []);
  const router = useRouter();

  // Fetch updated properties when the query changes
  useEffect(() => {
    const fetchProperties = async () => {
      const queryParams = router.query;
      const url = `${baseUrl}/properties/list?locationExternalIDs=${
        queryParams.locationExternalIDs || "5002"
      }&purpose=${queryParams.purpose || "for-rent"}&categoryExternalID=${
        queryParams.categoryExternalID || "4"
      }&bathsMin=${queryParams.bathsMin || "0"}&rentFrequency=${
        queryParams.rentFrequency || "yearly"
      }&priceMin=${queryParams.minPrice || "0"}&priceMax=${
        queryParams.maxPrice || "1000000"
      }&roomsMin=${queryParams.roomsMin || "0"}&sort=${
        queryParams.sort || "price-desc"
      }&areaMax=${queryParams.areaMax || "35000"}`;

      const data = await fetchApi(url);
      setProperties(data?.hits || []);
    };

    fetchProperties();
  }, [router.query]);

  return (
    <Box>
      <Flex
        onClick={() => setSearchFilters(!searchFilters)}
        cursor="pointer"
        bg="gray.100"
        borderBottom="1px"
        borderColor="gray.200"
        p="2"
        fontWeight="black"
        fontSize="lg"
        justifyContent="center"
        alignItems="center"
      >
        <Text>Search Property By Filters</Text>
        <Icon paddingLeft="2" w="7" as={BsFilter} />
      </Flex>
      {searchFilters && <SearchFilters />}
      <Text fontSize="2xl" p="4" fontWeight="bold">
        Properties {router.query.purpose}
      </Text>
      <Flex flexWrap="wrap">
        {properties.map((property) => (
          <Property property={property} key={property.id} />
        ))}
      </Flex>
      {properties.length === 0 && (
        <Flex
          justifyContent="center"
          alignItems="center"
          flexDir="column"
          marginTop="5"
          marginBottom="5"
        >
          <Image
            src="/images/noresult.svg" // Reference to public/images/noresult.svg
            alt="No results found"
            width={200}
            height={200}
          />
          <Text fontSize="xl" marginTop="3">
            No Result Found.
          </Text>
        </Flex>
      )}
    </Box>
  );
};

export async function getStaticProps() {
  const defaultQuery = `${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-rent&categoryExternalID=4&bathsMin=0&rentFrequency=yearly&priceMin=0&priceMax=1000000&roomsMin=0&sort=price-desc&areaMax=35000`;
  const data = await fetchApi(defaultQuery);

  return {
    props: {
      initialProperties: data?.hits || [],
    },
  };
}

export default Search;
