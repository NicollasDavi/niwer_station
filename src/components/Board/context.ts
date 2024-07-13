import { createContext } from "react";
import { ListProps } from '../../types/StationProps';

export default createContext({
    lists: [] as ListProps[],
    move: (fromlist : number, toList: number, from : number, to : number ) => {}
})