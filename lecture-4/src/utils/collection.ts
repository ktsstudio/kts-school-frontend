export type CollectionT<Uid extends string | number, T> = {
  order: Uid[];
  entities: Record<Uid, T>;
};

export const linearizeCollection = <Uid extends string | number, T>(
  collection: CollectionT<Uid, T>
): T[] => collection.order.map((uid) => collection.entities[uid]);
