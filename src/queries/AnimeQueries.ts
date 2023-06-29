import { gql } from '@apollo/client';

const GET_ANIME = gql`
  query ($id: Int, $page: Int, $perPage: Int) {
    Page(page: $page, perPage: $perPage) {
      pageInfo {
        total
        currentPage
        lastPage
        hasNextPage
        perPage
      }
      media(id: $id, sort: POPULARITY_DESC) {
        id
        coverImage {
          large
        }
        title {
          userPreferred
        }
      }
    }
  }
`;

const GET_ANIME_DETAIL = gql`
  query ($id: Int) {
    Page {
      media(id: $id) {
        id
        coverImage {
          extraLarge
        }
        title {
          userPreferred
        }

        description
        popularity
        episodes

        genres
      }
    }
  }
`;

export { GET_ANIME, GET_ANIME_DETAIL };
