import { GraphQLClient, gql } from "graphql-request";
import { NextRequest, NextResponse } from "next/server";

const client = new GraphQLClient("https://gql.hashnode.com", {
  headers: {
    Authorization: `${process.env.HASHNODE_API_TOKEN}`,
  },
});

const GetPosts = gql`
  query GetPosts($id: ObjectId = "689e85517fe4bb882b07acfb") {
    publication(id: $id) {
      posts(first: 5) {
        edges {
          node {
            title
            brief
            slug
            url
            coverImage {
              url
            }
            publishedAt
            author {
              name
            }
          }
        }
      }
    }
  }
`;

export async function GET() {
  try {
    const data = await client.request(GetPosts);
    return NextResponse.json(data);
  } catch (error) {
    console.error("Error fetching posts:", error);
    return NextResponse.json(
      { error: "Failed to fetch posts" },
      { status: 500 },
    );
  }
}
