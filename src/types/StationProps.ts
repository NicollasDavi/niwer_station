export interface User {
    user: string;
  }
  
  export interface CardProps {
    id: number;
    content: string;
    labels: string[];
    user?: string;
    index?: number;
    listIndex?: number;
  }
  
  export interface List {
    title: string;
    creatable: boolean;
    done?: boolean;
    cards: CardProps[];
  }
  
  export interface ContainerProps {
    done?: boolean;
  }

  export interface DragProps {
    isDragging?: boolean;
  }

  export interface ListProps {
    title: string;
    creatable: boolean;
    cards: CardProps[];
  }
  
  