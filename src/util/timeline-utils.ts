import Image1 from "@/assets/images/1.jpg";
import Image2 from "@/assets/images/2.jpg";
import Image3 from "@/assets/images/3.jpg";

export function convertTimeline(timeline: any[]) {
    const arrImages = [Image1.src, Image2.src, Image3.src];
    return timeline.map((timeline: any, index: number) => {
        let media;

        if(timeline.media) {
            media = {
                name: "dunkirk beach",
                source: {
                  url: arrImages[index],
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