import { gql } from 'apollo-boost';


const getAuthorsQuery = gql`
  {
    authors{
      name
      id
    }
  }
`

const getBooksQuery = gql`
  {
    books{
      name
      id
    }
  }
`

const addBookMutation = gql`
  mutation($name: String!, $genre: String!, $author_id: ID!) {
    addBook(name: $name, genre: $genre, author_id: $author_id) {
      name
      id
    }
  }
`

const getBookQuery = gql`
  query($id: ID) {
    book(id: $id) {
      id
      name
      genre
      author {
        id
        name
        age
        books {
          name
          id
        }
      }
    }
  }
`

export { getAuthorsQuery, getBooksQuery, addBookMutation, getBookQuery };