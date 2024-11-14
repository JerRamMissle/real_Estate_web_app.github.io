import Link from "next/link";
import Image from "next/image";
import { Flex, Box, Text, Button } from "@chakra-ui/react";
import { fetchApi, baseUrl } from "../utils/fetchApi";
import Property from "../components/Property";

export const Banner = ({
  purpose,
  title1,
  title2,
  desc1,
  desc2,
  buttonText,
  linkName,
  imageUrl,
}) => (
  <Flex flexWrap="wrap" justifyContent="center" alignItems="center" m="10">
    <Image src={imageUrl} width={500} height={300} alt={`${purpose} image`} />
    <Box p="5">
      <Text color="gray.500" fontSize="sm" fontWeight="medium">
        {purpose}
      </Text>
      <Text fontSize="3xl" fontWeight="bold">
        {title1}
        <br />
        {title2}
      </Text>
      <Text fontSize="lg" paddingTop="3" paddingBottom="3" color="gray.700">
        {desc1}
        <br />
        {desc2}
      </Text>
      <Link href={linkName} passHref>
        <Button fontSize="xl" bg="blue.300" color="white">
          {buttonText}
        </Button>
      </Link>
    </Box>
  </Flex>
);

const Home = ({ propertiesForSale, propertiesForRent, error }) => (
  <Box>
    {error && <Text color="red.500">{error}</Text>}

    <Banner
      purpose="RENT A HOME"
      title1="Rental Homes for"
      title2="Everyone"
      desc1=" Explore from Apartments, builder floors, villas"
      desc2="and more"
      buttonText="Explore Renting"
      linkName="/search?purpose=for-rent"
      imageUrl="https://bayut-production.s3.eu-central-1.amazonaws.com/image/145426814/33973352624c48628e41f2ec460faba4"
    />
    <Flex flexWrap="wrap">
      {propertiesForRent.length > 0 ? (
        propertiesForRent.map((property) => (
          <Property property={property} key={property.id} />
        ))
      ) : (
        <Text>No rental properties available.</Text>
      )}
    </Flex>

    <Banner
      purpose="BUY A HOME"
      title1=" Find, Buy & Own Your"
      title2="Dream Home"
      desc1=" Explore from Apartments, land, builder floors,"
      desc2=" villas and more"
      buttonText="Explore Buying"
      linkName="/search?purpose=for-sale"
      imageUrl="https://bayut-production.s3.eu-central-1.amazonaws.com/image/110993385/6a070e8e1bae4f7d8c1429bc303d2008"
    />
    <Flex flexWrap="wrap">
      {propertiesForSale.length > 0 ? (
        propertiesForSale.map((property) => (
          <Property property={property} key={property.id} />
        ))
      ) : (
        <Text>No properties available for sale.</Text>
      )}
    </Flex>
  </Box>
);

export async function getServerSideProps() {
  try {
    // Fetch data dynamically on each request
    const propertyForSale = await fetchApi(
      `${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=6`
    );
    const propertyForRent = await fetchApi(
      `${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=6`
    );

    // Simplify the properties data to avoid large payloads
    const simplifiedSaleProperties = propertyForSale?.hits?.map((property) => ({
      id: property.id,
      title: property.title,
      price: property.price,
      imageUrl: property.coverPhoto?.url, // Assuming the first photo is the cover photo
    }));

    const simplifiedRentProperties = propertyForRent?.hits?.map((property) => ({
      id: property.id,
      title: property.title,
      price: property.price,
      imageUrl: property.coverPhoto?.url, // Assuming the first photo is the cover photo
    }));

    return {
      props: {
        propertiesForSale: simplifiedSaleProperties || [],
        propertiesForRent: simplifiedRentProperties || [],
      },
    };
  } catch (error) {
    console.error("Error fetching properties:", error);
    return {
      props: {
        propertiesForSale: [],
        propertiesForRent: [],
        error: "Failed to fetch properties. Please try again later.",
      },
    };
  }
}

export default Home;
