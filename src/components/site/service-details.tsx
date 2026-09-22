import { ServiceDetail } from "./service-detail";

export function EquipmentDetail() {
  return (
    <ServiceDetail
      id="location-evenementiel"
      index="01"
      eyebrow="Equipment Rental"
      title="Event Equipment Rental"
      intro="From a single chair to a full venue of marquees, SH Event Management provides a complete range of event equipment for rent — delivered, installed and collected by our team so you can focus on your guests."
      image="/images/service-equipment.jpg"
      features={[
        {
          title: "Tents & Marquees",
          description:
            "White tents and chapiteaux in multiple sizes for intimate receptions and large public gatherings, with professional setup and anchoring.",
        },
        {
          title: "Gold Chiavari Chairs",
          description:
            "Elegant gold Chiavari chairs that bring a premium finish to weddings, gala dinners and corporate events.",
        },
        {
          title: "White Folding Chairs",
          description:
            "Lightweight, clean white folding chairs — the reliable, cost-effective seating for any ceremony or reception.",
        },
        {
          title: "White Plastic Chairs",
          description:
            "Sturdy white plastic chairs available in large quantities for conferences, community events and large audiences.",
        },
      ]}
      catalog={[
        "White folding chairs",
        "Gold Chiavari chairs",
        "White plastic chairs",
        "Small tents (10×10)",
        "Medium marquees",
        "Large chapiteaux",
        "Round & rectangular tables",
        "Table linens (on request)",
      ]}
    />
  );
}

export function ComfortDetail() {
  return (
    <ServiceDetail
      id="confort-logistique"
      index="02"
      eyebrow="Comfort & Logistics"
      title="Comfort & Event Logistics"
      intro="Keep every guest comfortable and your venue safe and clean. Our logistics range covers cooling, flooring and sanitation — delivered and installed on-site by our team."
      image="/images/service-comfort.jpg"
      features={[
        {
          title: "Air Conditioners & Evaporative Coolers",
          description:
            "Portable air conditioners and evaporative coolers to keep tents and indoor venues comfortable in the Accra heat.",
        },
        {
          title: "Event Flooring",
          description:
            "Interlocking floor tiles and ground protection to create a clean, level surface on grass, sand or uneven ground.",
        },
        {
          title: "Mobile Toilets",
          description:
            "Clean, well-maintained mobile toilet units — ideal for outdoor events, construction sites and large gatherings.",
        },
        {
          title: "Delivery & Setup",
          description:
            "Our team handles delivery, installation, maintenance during the event and collection afterwards.",
        },
      ]}
      catalog={[
        "Portable air conditioners",
        "Evaporative coolers",
        "Event floor tiles",
        "Ground protection mats",
        "Mobile toilet units",
        "Hand-wash stations (on request)",
      ]}
    />
  );
}

export function PhotographyDetail() {
  return (
    <ServiceDetail
      id="photographie"
      index="03"
      eyebrow="Photography"
      title="Event Photography"
      intro="Every event tells a story. Our professional photographers capture weddings, ceremonies and corporate events with vivid, documentary-style imagery you will cherish for years."
      image="/images/service-photography.jpg"
      features={[
        {
          title: "Wedding Photography",
          description:
            "Full-day coverage of your wedding — from preparation to the last dance — delivered in a timeless, elegant style.",
        },
        {
          title: "Ceremonies & Parties",
          description:
            "Birthdays, naming ceremonies, anniversaries and private receptions, captured with attention to every meaningful moment.",
        },
        {
          title: "Corporate Event Coverage",
          description:
            "Conferences, product launches and corporate galas — professional imagery for your brand and communications.",
        },
        {
          title: "Edited Galleries",
          description:
            "Curated, colour-graded galleries and high-resolution downloads delivered promptly after your event.",
        },
      ]}
      catalog={[
        "Wedding day packages",
        "Half-day coverage",
        "Corporate event coverage",
        "Portrait sessions",
        "Same-day sneak peeks",
        "Print & album add-ons (on request)",
      ]}
    />
  );
}
