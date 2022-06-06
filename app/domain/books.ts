export type Book = {
  id: string;
  kind: string;
  etag: string;
  selfLink: string;
  volumeInfo: {
     title: string;
  }
};
