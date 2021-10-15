import {gql} from "@apollo/client";

export const getCategoriesQuery = gql`
query getCategories{
    categories{
        name
    }
}
`

export const getCurrenciesQuery = gql`
query getCurrencies{
    currencies
}
`;