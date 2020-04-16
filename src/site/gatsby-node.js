/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

exports.sourceNodes = ({ actions }) => {
    actions.createTypes(`
        type Stock implements Node @dontInfer {
            id: ID!
            makeModel: String! @proxy(from: "make-model")
            price: Float!
            km: String!
            firstRegistration: String! @proxy(from: "first-registration")
            motor: String!
            transmission: String!
            fuel: String!
            state: String!
            owners: String!
            consumption: String!
            co2: String!
            link: String!
            picture: String!
            tag: String
        }
    `);
}
