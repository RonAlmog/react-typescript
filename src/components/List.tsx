interface IProps {
  people: {
    name: string;
    age: number;
    url: string;
    note?: string;
  }[];
}

const List: React.FC<IProps> = (props: IProps) => {
  return <div>list here</div>;
};

export default List;
