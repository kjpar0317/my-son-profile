import Image1 from "@/assets/images/images-2222.jpg";
import Movie1 from "@/assets/videos/sample-5s.mp4";

export const items = [
  {
    title: "2019-05-11",
    cardTitle: "Dunkirk",
    media: {
      name: "dunkirk beach",
      source: {
        url: Image1.src,
      },
      type: "IMAGE",
    },
  },
  {
    title: "2019-05-13",
    cardTitle: "Pearl Harbor",
    media: {
      source: {
        url: Movie1,
        type: "mp4",
      },
      type: "VIDEO",
      name: "Pearl Harbor",
    },
  },
  {
    title: "2019-05-15",
    cardTitle: "Pearl Harbor",
    media: {
      source: {
        url: "https://www.youtube.com/embed/f6cz9gtMTeI",
        type: "mp4",
      },
      type: "VIDEO",
      name: "Pearl Harbor",
    },
  },
  {
    title: "2019-05-18",
    cardTitle: "Pearl Harbor",
    media: {
      source: {
        url: "https://www.youtube.com/embed/f6cz9gtMTeI",
        type: "mp4",
      },
      type: "VIDEO",
      name: "Pearl Harbor",
    },
  },
];

export default items;
