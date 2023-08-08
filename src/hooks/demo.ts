import {GraphQLClient} from "graphql-request";
import {useQuery, UseQueryResult} from "@tanstack/react-query";
import {graphql} from "@/gql";
export const endpoint = 'http://127.0.0.1:1337/graphql';

export const GQLCLIENT = new GraphQLClient(endpoint, {});




export const getStyles = graphql(/* GraphQL */ `
    query getstyles{
        styles {
            data {
               attributes {
                   theme 
               }
            }
        }
    }
`);

export const getNames = graphql(/* GraphQL */ `
query getNames {
  names {
    data {
      attributes {
        title
      }
    }
  }
}
`)

export const getNamesFN = async () => {
    const response = await GQLCLIENT.request(getNames);

    console.log({ SBIOWME: response });
    return response;
}

export const stylesFN = async () => {
    const response = await GQLCLIENT.request(getStyles);

    console.log({ SBIOWME: response });
    return response;
};

export const useGetStyles = () => {
    const { data, ...methods } = useQuery({
        queryKey: ['get-cms-games'],
        queryFn: stylesFN,

        staleTime: 1000 * 60 * 60 * 24,
    });
    return {
        data,
        ...methods,
    };
};

