export interface User {
    user: string;
  }
  
  export interface Card {
    id: number;
    content: string;
    labels: string[];
    user?: string;
  }
  
  export interface List {
    title: string;
    creatable: boolean;
    done?: boolean;
    cards: Card[];
  }
  
  export interface ContainerProps {
    done?: boolean;
  }
  