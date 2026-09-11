export type Testimonial = {
  names: string;
  venue: string;
  date: string;
  quote: string;
  /** Used to show a couple's own words on the matching county page */
  county?: "Derbyshire" | "Staffordshire" | "Nottinghamshire";
};

export const testimonials: Testimonial[] = [
  {
    names: "Faye and Daniel",
    venue: "Bourton Hall, Warwickshire",
    date: "June 2026",
    quote:
      "Andy is incredibly talented at what he does. He has an amazing eye for capturing the best moments and shots, and it's obvious how passionate he is about videography. On the wedding day itself, he was absolutely fantastic. We got married on the hottest day recorded in the UK in May, in a beautiful old building with no air conditioning, and the heat was intense! Despite that, Andy worked tirelessly all day, stayed calm and professional, and kept us laughing throughout.",
  },
  {
    names: "Olivia and Charles",
    venue: "The West Mill, Derby",
    county: "Derbyshire",
    date: "June 2026",
    quote:
      "We honestly couldn't be happier with our wedding video. From the moment we met Andy on video call, his friendly, relaxed, and genuinely cool nature put us completely at ease! He blended so well into our day, making us and all our guests feel comfortable while capturing every moment so naturally. What was really special is his incredible talent for noticing and preserving both the big, emotional moments and the small details that might otherwise go unnoticed.",
  },
  {
    names: "Shannon and Anand",
    venue: "Leicestershire",
    date: "January 2024",
    quote:
      "Andy went above and beyond from the moment we enquired to the moment he sent us our final video. The video itself was unbelievably beautiful and it captured the day so beautifully. We would highly recommend using Andy for your special day and can confidently say you will not regret it!",
  },
  {
    names: "Alice and Ryan",
    venue: "Carriage Hall, Nottinghamshire",
    county: "Nottinghamshire",
    date: "July 2023",
    quote:
      "From the first chat it was clear that Andy was somebody that would go above and beyond for us. The video we received was stunning, and the montage is unbelievable how it all links together. It's something we will treasure forever, and we can't wait to show it to family and friends. We'd urge anybody looking for a friendly, professional and talented videographer to choose Andy.",
  },
  {
    names: "Amy and Tom",
    venue: "Cockliffe Country House, Nottinghamshire",
    county: "Nottinghamshire",
    date: "July 2023",
    quote:
      "Mate! WOW! We've just watched it. That is absolutely incredible!!! You've captured so much in 1 minute there!!!!! There were a few tears not gunna lie. Absolutely incredible!!!! Thank you soooo soooo much! We're soo grateful for what you've done!",
  },
  {
    names: "Hannah and Tom",
    venue: "Foxtail Barns, Staffordshire",
    county: "Staffordshire",
    date: "July 2023",
    quote:
      "Andy!!! Just want to say a massive thank you for yesterday! You were absolutely 10/10! You guys were so relaxed and put us both at ease all day knowing you had everything on point. Even with the weather situation you pulled it off! We're so happy we chose you to video our day and wouldn't hesitate to recommend you to anyone in the future! Andy this is just incredible, I can't stop crying watching it! Thank you so very very much!",
  },
  {
    names: "Bethany and Connor",
    venue: "Derbyshire",
    county: "Derbyshire",
    date: "June 2023",
    quote:
      "Andy was incredible to work with. Ultimate professional from first contact to on the wedding day. The film is amazing! We will cherish it forever. Thank you Andy! Legend",
  },
  {
    names: "Dave and Steph",
    venue: "The West Mill, Derby",
    county: "Derbyshire",
    date: "April 2023",
    quote:
      "We had Andy video our wedding, we was very friendly and professional. the video is amazing can't recommend highly enough!!",
  },
];
