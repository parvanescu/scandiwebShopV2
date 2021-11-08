import {gql} from "@apollo/client";

export const getCategoryQuery = gql`
query getCategoryBYTitle($input: CategoryInput!){
    category(input: $input){
        products{
            id
            inStock
            name
            gallery
            prices{
                amount
                currency
            }
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
        }
    }
}
`