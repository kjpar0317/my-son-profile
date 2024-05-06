export function convertTimeline(timeline: any[]) {
  return timeline.map((timeline: any, index: number) => {
    let media;

    if (timeline.media) {
      media = {
        name: "dunkirk beach",
        source: {
          //   url: arrImages[index],
          url: require("@/assets/images/" + timeline.media).default.src,
        },
        type: "IMAGE",
      };
    }

    return {
      title: timeline.title,
      cardTitle: timeline.cardTitle,
      media: media,
      cardSubtitle: timeline.cardDetailedText,
    };
  });
}
