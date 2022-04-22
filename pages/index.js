import { Hero } from "../sections";
import { Selection } from "../sections";

const heroProps = {
  image: { src: "/img/heroimg.png", alt: "", width: 1000, height: 1680 },
  title: "Agency procurement, outsourced.",
  description: "Start the process here",
  ctaText: "Start",
};

const selectionProps = {
  image: { src: "/img/video.png", alt: "video" },
  agencySelections: [
    {
      width: "320px",
      miniImg: { src: "/img/brief.png", alt: "brief", width: 130, height: 130 },
      selectionTitle: "Brief",
      selectionDesc: (
        <>
          Complete <b>brief writing or simple guidence</b> on what to include,
          we ve got u covered
        </>
      ),
    },
    {
      width: "340px",
      miniImg: {
        src: "/img/search.png",
        alt: "search",
        width: 130,
        height: 130,
      },
      selectionTitle: "Search",
      selectionDesc: (
        <>
          In-depth agency search cvering;<b>criterial matching,</b> door
          knocking and due-dilligence vetting.
        </>
      ),
    },
    {
      width: "360px",
      miniImg: { src: "/img/pitch.png", alt: "pitch", width: 130, height: 130 },
      selectionTitle: "Pitch",
      selectionDesc: (
        <>
          Comprehensive <b>pitch management,</b> including comms, diary
          management and pitch hosting.
        </>
      ),
    },
  ],
  title: "Managed agency selection",
  description: "Stengthen your onboarding process",
};

export default function Home() {
  return (
    <>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
      </head>
      <div>
        {/* <Hero {...heroProps} /> */}
        <Selection {...selectionProps} />
      </div>
    </>
  );
}
