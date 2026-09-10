import kevinBishop from "@/assets/kevin-bishop.webp";
import erleneJackson from "@/assets/erlene-jackson.webp";

export const teamBios = [
  {
    id: "kevin-bishop",
    published: true,
    name: "Pastor Kevin R. Bishop",
    role: "Founding & Senior Pastor",
    image: kevinBishop,
    paragraphs: [
      "For more than two decades, Pastor Kevin Bishop has faithfully served as the Founding and Senior Pastor of The River Church in Wisconsin Rapids, Wisconsin. His passion is to exalt Jesus Christ, proclaim the uncompromising truth of God’s Word, and cultivate an atmosphere where people genuinely encounter the presence and power of the Holy Spirit.",
      "Known for his Christ-centered, Spirit-led ministry, Pastor Kevin communicates God’s Word through prophetic and revelatory preaching and teaching that is firmly rooted in Scripture and empowered by the Holy Spirit. His passion is to equip believers to grow in spiritual maturity, discover their God-given purpose, walk in the fullness of Christ, and advance the Kingdom of God in every sphere of life.",
    ],
  },
  {
    id: "erlene-jackson",
    // Hold until the rest of the team bios are ready.
    published: false,
    name: "Erlene Jackson",
    role: "Church Secretary",
    image: erleneJackson,
    paragraphs: [
      "Erlene Jackson has faithfully served as the Church Secretary of The River Church for more than a decade. With a heart for Christ and a servant’s spirit, she has been a steady source of encouragement, excellence, and support to our church family. Her dedication behind the scenes helps ensure that the daily ministries and operations of the church are carried out with care, integrity, and compassion.",
      "Whether welcoming guests, assisting members, or coordinating the many details of church life, Erlene serves with grace, faithfulness, and a genuine love for people. Her years of devoted service reflect her commitment to the Kingdom of God and her desire to see lives impacted through the ministry of The River Church.",
    ],
  },
] as const;
