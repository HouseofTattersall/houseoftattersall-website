export type Testimonial = {
  names: string;
  venue: string;
  date: string;
  quote: string;
  /** Used to show a couple's own words on the matching county page */
  county?: "Derbyshire" | "Staffordshire" | "Nottinghamshire";
  /** Pulled out as the headline quote on the homepage */
  featured?: boolean;
  /**
   * A shorter extract for the grids on the homepage and county pages, where a
   * long review would swamp the others. Kind Words always shows `quote` in
   * full. Falls back to `quote`.
   */
  short?: string;
};

export const testimonials: Testimonial[] = [
  {
    names: "Jack and Rob",
    venue: "The Wilderness, Canterbury",
    date: "2026",
    featured: true,
    quote:
      "We're so so SO happy with the film, it's so beautiful and exactly what we were hoping for. We keep watching it over and over and everyone we show it to cries. My mum showed just the trailer to her hairdresser even and she stood there crying during her appointment",
  },
  {
    names: "Laura and Daniel",
    venue: "Holy Cross, Ilam and Lower Damgate Farm",
    county: "Derbyshire",
    date: "2025",
    short:
      "He was present and visible when needed, and somehow disappeared into the shadows for the more candid moments. You never felt like there was a video camera stuck in your face.",
    quote:
      "A very late review (sorry!). But one we have kept meaning to do during a busy first year of marriage, and really we blame Andy for changing his company name. We got married at The Church of The Holy Cross at Ilam, an incredible church that speaks for itself, but one that Andy managed to bring even more beauty and love out of. Our reception was at Lower Damgate Farm, which is a 'DIY' venue and he captured the vibe perfectly, polished and classic but relaxed and fun, exactly as we wanted it to be. We always knew we wanted a video from the day, and when we saw Andy's work we knew he was The One. Anybody can film an event but getting the right shots at the right time and putting that together and telling the story of the day takes talent, he did just that. Working with him from the start to the end was easy and enjoyable. He's a really down to earth, normal person that you can have a laugh and a chat with, he worked seamlessly with our photographers (Lufu Weddings), and made the awkwardness of being in front of a camera dissolve away. He was present and visible when needed, and somehow disappeared into the shadows for the more candid moments. You never felt like there was a video camera stuck in your face. The photos and videos are, apart from actually being married, the only real tangible thing you have left after the day so you have to make sure you choose well, and we're absolutely certain we did. We went for the full package with the ceremony, the speeches and an extra of the behind the scenes bits which I think, if even just for enjoying the unused clips, is worth it. Thanks again for our wonderful videos, and for anybody reading, we absolutely recommend.",
  },
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
