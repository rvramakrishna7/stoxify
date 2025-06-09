import React from "react";


function chunkArray(array, chunkSize) {
  const chunks = [];
  for (let i = 0; i < array.length; i += chunkSize) {
    chunks.push(array.slice(i, i + chunkSize));
  }
  return chunks;
}

function Ticket() {
  const sections = [
    {
      title: "Account Opening",
      links: [
        "Resident Individual",
        "Minor",
        "Non Resident Indian (NRI)",
        "Company, Partnership, HUF and LLP",
        "Glossary",
      ],
    },
    {
      title: "Your Stoxify Account",
      links: [
        "Your Profile",
        "Account modification",
        "Client Master Report (CMR) and DP",
        "Nomination",
        "Transfer and conversion of securities",
      ],
    },
    {
      title: "Stoxify",
      links: [
        "IPO",
        "Trading FAQs",
        "Margin Trading Facility (MTF) and Margins",
        "Charts and orders",
        "Alerts and Nudges",
        "General",
      ],
    },
    {
      title: "Investments",
      links: [
        "Mutual funds",
        "National Pension Scheme (NPS)",
        "Features",
        "Payments and Orders",
        "General",
      ],
    },
    {
      title: "Funds",
      links: [
        "Add money",
        "Withdraw money",
        "Add bank accounts",
        "eMandates",
      ],
    },
    {
      title: "Portfolio",
      links: [
        "Funds statement",
        "Reports",
        "Profile",
        "Segments",
      ],
    },
  ];

  const chunkedSections = chunkArray(sections, 3);

  return (
    <div className="container py-5 mt-3">
      <div className="mx-auto" style={{ maxWidth: "1140px" }}>
        <h4 className="text-muted mb-5">
          To create a ticket, select a relevant topic
        </h4>

        {chunkedSections.map((sectionGroup, rowIndex) => (
          <div key={rowIndex} className="row mb-5">
            {sectionGroup.map(({ title, links }) => (
              <div key={title} className="col-md-4">
                <h5 className="mb-3">{title}</h5>
                {links.map((linkText, i) => (
                  <a
                    key={i}
                    className="text-decoration-none d-block text-muted mb-2"
                    href="#"
                  >
                    {linkText}
                  </a>
                ))}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Ticket;
