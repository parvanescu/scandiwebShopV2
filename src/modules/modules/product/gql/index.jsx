import {gql} from "@apollo/client";

export const getItemById = gql`
query getItemById($id: String!){
    product(id:$id){
        attributes{
            id
            items{
                displayValue
                id
                value
            }
            name
            type
        }
        brand
        category
        description
        gallery
        id
        inStock
        name
        prices{
            amount
            currency
        }
    }
}

`