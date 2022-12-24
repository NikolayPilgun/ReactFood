import sanityClient from "@sanity/client";
import ImageUrlBuilder from "@sanity/image-url";

export const client = sanityClient({
	projectId: "1w9kfowy",
	dataset: "production",
	apiVersion: "2022-12-24",
	useCdn: true,
	token: process.env.SANITY_TOKEN,
});

const builder = ImageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);
