import React from "react";

type ListProps<TItem> = {
  items: TItem[];
  renderItem: (item: TItem) => JSX.Element;
};

function List<TItem>({ items, renderItem }: ListProps<TItem>) {
  return <ul>{items.map(renderItem)}</ul>;
}

function Home() {
  return (
    <List
      items={[{ id: "1", name: "Nikhil", age: 30 }]}
      renderItem={(item) => (
        <li key={item.id}>
          {item.id}: {item.name} - {item.age}
        </li>
      )}
    />
  );
}
